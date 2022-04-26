import "./Home.css";

import React from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import SearchSection from "../../components/SearchSection";
import SearchResults from "../../components/SearchResults";
import AboutSection from "../../components/AboutSection";

function Home({
  onCardSaveClick,
  onCardDeleteClick,
  onSearch,
  savedArticles,
  keyword,
  numberOfCards,
  searchResults,
  showSearchResults = false,
  isPreloaderVisible = false,
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
          isPreloaderVisible={isPreloaderVisible}
        />
      ) : (
        ""
      )}
      <AboutSection />
    </main>
  );
}

export default Home;
