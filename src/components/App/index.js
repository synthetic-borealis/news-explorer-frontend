import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";

import SavedNews from "../../routes/SavedNews";
import Home from "../../routes/Home";

import Header from "../Header";
import Footer from "../Footer";
import Popup from "../Popup";
import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";
import SuccessMessage from "../SuccessMessage";

import * as auth from "../../utils/api/MainApi";
import * as newsApi from "../../utils/api/NewsApi";

import {
  popupContentTypes,
  routePaths,
  maxMobileWidth,
  searchStorageKeys,
} from "../../utils/constants";

function App() {
  const history = useHistory();
  const [isMobilePhone, setIsMobilePhone] = React.useState(
    window.innerWidth <= maxMobileWidth
  );
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isPopupVisible, setIsPopupVisible] = React.useState(false);
  const [popupContentType, setPopupContentType] = React.useState(
    popupContentTypes.signIn
  );
  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
  const [jwt, setJwt] = React.useState(
    localStorage.getItem("jwt") ? localStorage.getItem("jwt") : ""
  );
  const [currentUser, setCurrentUser] = React.useState();
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [searchResults, setSearchResults] = React.useState(
    localStorage.getItem(searchStorageKeys.results)
      ? JSON.parse(localStorage.getItem(searchStorageKeys.results))
      : []
  );

  const [keyword, setKeyword] = React.useState(
    localStorage.getItem(searchStorageKeys.keyword)
      ? localStorage.getItem(searchStorageKeys.keyword)
      : ""
  );
  const [showSearchResults, setShowSearchResults] = React.useState(searchResults.length > 0);
  const [numberOfCards, setNumberOfCards] = React.useState(3);

  function handleWindowResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setJwt("");
    setCurrentUser();
    setSavedArticles([]);
    setSearchResults([]);
    setShowSearchResults(false);
    history.push(routePaths.home);
  }

  function handleLogin({ email, password }) {
    return auth.signin({ email, password }).then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        setJwt(res.token);
        auth.getUserInfo(res.token).then((res) => {
          setCurrentUser(res.data);
          setIsPopupVisible(false);
        });
      }
    });
  }

  function handleLoginButton() {
    setPopupContentType(popupContentTypes.signIn);
    setIsPopupOpen(true);
  }

  function handleSignup({ email, password, name }) {
    return auth.signup({ email, password, name }).then(() => {
      setPopupContentType(popupContentTypes.success);
    });
  }

  function handleSignupLink() {
    setPopupContentType(popupContentTypes.signUp);
  }

  function handleSigninLink() {
    setPopupContentType(popupContentTypes.signIn);
  }

  function handleSaveCard(cardData) {
    auth
      .addArticle({ ...cardData }, jwt)
      .then((res) => setSavedArticles([res, ...savedArticles]))
      .catch(console.log);
  }

  function handleDeleteCard(cardData) {
    let cardId = cardData._id;
    // Save button is clicked twice
    if (!cardId) {
      const foundArticle = savedArticles.find(
        (article) =>
          article.link === cardData.url || article.link === cardData.link
      );
      if (foundArticle) {
        cardId = foundArticle._id;
      }
    }
    if (cardId) {
      auth
        .deleteArticle(cardId, jwt)
        .then(() => {
          setSavedArticles(
            savedArticles.filter((element) => element._id !== cardId)
          );
        })
        .catch(console.log);
    }
  }

  function handleSearch(query) {
    setNumberOfCards(3);
    setKeyword(query);
    setShowSearchResults(true);
    setIsPreloaderVisible(true);
    newsApi
      .search(query)
      .then((res) => {
        setSearchResults(res.articles);
      })
      .catch(console.log)
      .finally(() => setIsPreloaderVisible(false));
  }

  function handlePopupClose() {
    setIsPopupVisible(false);
    setIsPopupOpen(false);
  }

  function renderPopupContent() {
    switch (popupContentType) {
      case popupContentTypes.signIn:
        return (
          <SignInForm onSignIn={handleLogin} onClickLink={handleSignupLink} />
        );

      case popupContentTypes.signUp:
        return (
          <SignUpForm onSignUp={handleSignup} onClickLink={handleSigninLink} />
        );

      case popupContentTypes.success:
        return (
          <SuccessMessage
            title="Registration successfully completed!"
            linkCaption="Sign in"
            onClickLink={handleSigninLink}
          />
        );

      default:
        return <h2>You shouldn't see this</h2>;
    }
  }

  React.useEffect(() => {
    if (searchResults.length > 0) {
      setShowSearchResults(true);
    }
    if (jwt.length > 0) {
      auth
        .getUserInfo(jwt)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          setJwt("");
          console.log(err);
        });
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  React.useEffect(() => {
    setIsMobilePhone(windowSize.width <= maxMobileWidth);
  }, [windowSize]);

  React.useEffect(() => {
    if (isPopupOpen) {
      setIsPopupVisible(true);
    } else {
      setPopupContentType(popupContentTypes.signIn);
    }
  }, [isPopupOpen]);

  React.useEffect(() => {
    if (typeof currentUser === "object") {
      auth
        .getArticles(jwt)
        .then((res) => {
          setSavedArticles(res.data.reverse());
        })
        .catch(console.log);
    }
  }, [currentUser]);

  React.useEffect(() => {
    const popupTransitionDelay = 0.25;

    if (!isPopupVisible) {
      setTimeout(() => setIsPopupOpen(false), popupTransitionDelay);
    }
  }, [isPopupVisible]);

  React.useEffect(() => {
    localStorage.setItem(searchStorageKeys.keyword, keyword);
  }, [keyword]);

  React.useEffect(() => {
    localStorage.setItem(searchStorageKeys.results, JSON.stringify(searchResults));
  }, [searchResults]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header
          isMobilePhone={isMobilePhone}
          onLogoutClick={handleLogout}
          onLoginClick={handleLoginButton}
        />
        <Switch>
          <ProtectedRoute path={routePaths.savedNews} isLoggedIn={typeof currentUser === "object"}>
            <SavedNews
              savedArticles={savedArticles}
              onCardDeleteClick={handleDeleteCard}
            />
          </ProtectedRoute>
          <Route exact path={routePaths.home}>
            <Home
              onSearch={handleSearch}
              onCardSaveClick={handleSaveCard}
              onCardDeleteClick={handleDeleteCard}
              numberOfCards={{
                value: numberOfCards,
                setValue: setNumberOfCards,
              }}
              isPreloaderVisible={isPreloaderVisible}
              searchResults={searchResults}
              showSearchResults={showSearchResults}
              savedArticles={savedArticles}
              keyword={keyword}
            />
          </Route>
        </Switch>
        <Footer />
        {isPopupOpen ? (
          <Popup isVisible={isPopupVisible} onClose={handlePopupClose}>
            {renderPopupContent()}
          </Popup>
        ) : (
          ""
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
