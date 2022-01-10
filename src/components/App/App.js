import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";

import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import { routePaths, articles } from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "Elise Bauer",
    email: "elise.bauer@aperturescience.com",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {/* <Header isLoggedIn={isLoggedIn} onLogoutClick={handleLogout} onLoginClick={handleLogin} /> */}
        <Switch>
          <ProtectedRoute path={routePaths.savedNews} isLoggedIn={isLoggedIn}>
            <SavedNews savedArticles={articles} onCardButtonClick={handleDeleteCard} />
          </ProtectedRoute>
          <Route exact path={routePaths.home}>
            <Main isLoggedIn={isLoggedIn} onCardButtonClick={handleSaveCard} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
