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

import {
  popupContentTypes,
  routePaths,
  articles,
} from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "Elise Bauer",
    email: "elise.bauer@aperturescience.com",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isPopupOpen, setIsPopupOpen] = React.useState(true);
  const [isPopupVisible, setIsPopupVisible] = React.useState(true);
  const [popupContentType, setPopupContentType] = React.useState(popupContentTypes.signIn);

  React.useEffect(() => {
    if (isPopupOpen) {
      setIsPopupVisible(true);
    } else {
      setPopupContentType(popupContentTypes.signIn);
    }
  }, [isPopupOpen]);

  React.useEffect(() => {
    const popupTransitionDelay = 0.25;

    if(!isPopupVisible) {
      setTimeout(() => setIsPopupOpen(false), popupTransitionDelay);
    }
  }, [isPopupVisible]);

  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    history.push(routePaths.home);
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleSaveCard(cardData) {
    alert("Saving card");
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
        return <SignInForm />;

      case popupContentTypes.signUp:
        return <h2>Sign Up</h2>;

      case popupContentTypes.success:
        return <h2>Registeration successful</h2>;

      default:
        return <h2>You shouldn't see this</h2>
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          onLogoutClick={handleLogout}
          onLoginClick={handleLogin}
        />
        <Switch>
          <ProtectedRoute path={routePaths.savedNews} isLoggedIn={isLoggedIn}>
            <SavedNews
              savedArticles={articles}
              onCardButtonClick={handleDeleteCard}
            />
          </ProtectedRoute>
          <Route exact path={routePaths.home}>
            <Main isLoggedIn={isLoggedIn} onCardButtonClick={handleSaveCard} />
          </Route>
        </Switch>
        <Footer />
        {isPopupOpen
        ? <Popup isVisible={isPopupVisible} onClose={handlePopupClose}>{renderPopupContent()}</Popup>
        : ""}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
