import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";

import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import Preloader from "../Preloader/Preloader";

import * as auth from "../../utils/api/auth";

import {
  popupContentTypes,
  routePaths,
  maxMobileWidth,
  articles,
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
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [searchResults, setSearchResults] = React.useState(articles);
  const [showSearchResults, setShowSearchResults] = React.useState(true);

  function handleWindowResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setJwt("");
    setIsLoggedIn(false);
    setCurrentUser({});
    setSavedArticles([]);
    history.push(routePaths.home);
  }

  function handleLogin({ email, password }) {
    return auth.signin({ email, password }).then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        setJwt(res.token);
        auth.getUserInfo(res.token).then((res) => {
          setCurrentUser(res.data);
          setIsLoggedIn(true);
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
    auth.addArticle({...cardData}, jwt)
      .then((res) => setSavedArticles([res, ...savedArticles]))
      .catch(console.log);
  }

  function handleDeleteCard(cardData) {
    alert("Deleting card");
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
    if (jwt.length > 0) {
      auth
        .getUserInfo(jwt)
        .then((res) => {
          setCurrentUser(res.data);
          setIsLoggedIn(true);
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
    if (isLoggedIn) {
      setIsPreloaderVisible(true);
      auth
        .getArticles(jwt)
        .then((res) => {
          setSavedArticles(res.data.reverse());
        })
        .catch(console.log)
        .finally(() => setIsPreloaderVisible(false));
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    const popupTransitionDelay = 0.25;

    if (!isPopupVisible) {
      setTimeout(() => setIsPopupOpen(false), popupTransitionDelay);
    }
  }, [isPopupVisible]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          isMobilePhone={isMobilePhone}
          onLogoutClick={handleLogout}
          onLoginClick={handleLoginButton}
        />
        <Switch>
          <ProtectedRoute path={routePaths.savedNews} isLoggedIn={isLoggedIn}>
            <SavedNews
              savedArticles={savedArticles}
              onCardButtonClick={handleDeleteCard}
            />
          </ProtectedRoute>
          <Route exact path={routePaths.home}>
            <Main
              isLoggedIn={isLoggedIn}
              onCardSaveClick={handleSaveCard}
              searchResults={searchResults}
              showSearchResults={showSearchResults}
              savedArticles={savedArticles}
              keyword="Boop"
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
        {isPreloaderVisible ? <Preloader /> : ""}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
