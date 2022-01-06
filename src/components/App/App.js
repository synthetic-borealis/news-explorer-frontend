import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "Elise Bauer",
    email: "elise.bauer@aperturescience.com",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} onLogin={handleLogin} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
