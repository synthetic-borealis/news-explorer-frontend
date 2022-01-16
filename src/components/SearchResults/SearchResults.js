import "./SearchResults.css";

import React from "react";

import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import NoResultsFound from "../NoResultsFound/NoResultsFound";

function SearchResults({ isLoggedIn, searchResults, numberOfCards, savedArticles, onSaveClick, onDeleteClick, keyword = "" }) {
  const sectionClassName = "SearchResults";
  const containerClassName = "SearchResuls__container";
  const titleClassName = "SearchResults__title";

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
      return savedArticles.some((savedArticle) => savedArticle.link === article.url);
    } else if (article.link) {
      return savedArticles.some((savedArticle) => savedArticle.link === article.link);
    }
    return false;
  }

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <h2 className={titleClassName}>Search results</h2>
        {searchResults.length === 0 ? (
          <NoResultsFound keyword={keyword} />
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
