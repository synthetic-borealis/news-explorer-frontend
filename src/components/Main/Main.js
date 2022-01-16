import "./Main.css";

import React from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import SearchSection from "../SearchSection/SearchSection";
import SearchResults from "../SearchResults/SearchResults";
import AboutSection from "../AboutSection/AboutSection";

function Main({
  onCardSaveClick,
  onCardDeleteClick,
  onSearch,
  savedArticles,
  keyword,
  numberOfCards,
  searchResults,
  showSearchResults = false,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main>
      <SearchSection onSearch={onSearch} />
      {showSearchResults ? (
        <SearchResults
          isLoggedIn={currentUser}
          onSaveClick={onCardSaveClick}
          onDeleteClick={onCardDeleteClick}
          savedArticles={savedArticles}
          searchResults={searchResults}
          keyword={keyword}
          numberOfCards={numberOfCards}
        />
      ) : (
        ""
      )}
      <AboutSection />
    </main>
  );
}

export default Main;
