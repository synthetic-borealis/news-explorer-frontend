import "./Main.css";

import SearchSection from "../SearchSection/SearchSection";
import SearchResults from "../SearchResults/SearchResults";
import AboutSection from "../AboutSection/AboutSection";

function Main({ isLoggedIn, onCardSaveClick, onCardDeleteClick, onSearch, savedArticles, keyword, searchResults, showSearchResults = false }) {
  return (
    <main>
      <SearchSection onSearch={onSearch} />
      {
        showSearchResults ?
        <SearchResults
          isLoggedIn={isLoggedIn}
          onSaveClick={onCardSaveClick}
          onDeleteClick={onCardDeleteClick}
          savedArticles={savedArticles}
          searchResults={searchResults}
          keyword={keyword}
        />
        : ""
      }
      <AboutSection />
    </main>
  );
}

export default Main;
