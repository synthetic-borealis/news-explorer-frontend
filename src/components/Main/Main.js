import "./Main.css";

import SearchSection from "../SearchSection/SearchSection";
import SearchResults from "../SearchResults/SearchResults";
import AboutSection from "../AboutSection/AboutSection";

function Main({ isLoggedIn, onCardSaveClick, savedArticles, keyword, searchResults, showSearchResults = false }) {
  return (
    <main>
      <SearchSection />
      {
        showSearchResults ?
        <SearchResults
          isLoggedIn={isLoggedIn}
          onSaveClick={onCardSaveClick}
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
