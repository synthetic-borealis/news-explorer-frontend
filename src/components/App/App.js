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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
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
