import "./SearchResults.css";

import React from "react";

import NewsCardList from "../NewsCardList";
import NewsCard from "../NewsCard";
import ShowMoreButton from "../ShowMoreButton";
import Preloader from "../Preloader";
import NoResultsFound from "../NoResultsFound";

function SearchResults({
  isLoggedIn,
  isPreloaderVisible,
  searchResults,
  numberOfCards,
  savedArticles,
  onSaveClick,
  onDeleteClick,
  keyword = "",
}) {
  const currentCards =
    searchResults.length > 0 ? searchResults.slice(0, numberOfCards.value) : [];
  const cardNumberDifference = searchResults.length - numberOfCards.value;

  function handleShowMore() {
    if (numberOfCards.value >= searchResults.length) return;
    if (cardNumberDifference > 3) {
      numberOfCards.setValue(numberOfCards.value + 3);
    } else {
      numberOfCards.setValue(numberOfCards.value + cardNumberDifference);
    }
  }

  function isArticleSaved(article) {
    if (article.url) {
      return savedArticles.some(
        (savedArticle) => savedArticle.link === article.url
      );
    } else if (article.link) {
      return savedArticles.some(
        (savedArticle) => savedArticle.link === article.link
      );
    }
    return false;
  }

  return (
    <section className="SearchResults">
      <div className="SearchResuls__container">
        <h2 className="SearchResults__title">Search results</h2>
        {searchResults.length === 0 ? (
          isPreloaderVisible ? (
            <Preloader />
          ) : (
            <NoResultsFound keyword={keyword} />
          )
        ) : (
          <NewsCardList>
            {currentCards.map((card, index) => (
              <NewsCard
                key={index}
                cardData={card}
                isLoggedIn={isLoggedIn}
                onSaveClick={onSaveClick}
                onDeleteClick={onDeleteClick}
                isSaved={isArticleSaved(card)}
                keyword={keyword}
              />
            ))}
          </NewsCardList>
        )}
        {cardNumberDifference > 0 ? (
          <ShowMoreButton onClick={handleShowMore} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default SearchResults;
