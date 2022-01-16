import "./SearchResults.css";

import React from "react";

import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import NoResultsFound from "../NoResultsFound/NoResultsFound";

function SearchResults({ isLoggedIn, searchResults, savedArticles, onSaveClick, keyword = "" }) {
  const [numberOfCards, setNumberOfCards] = React.useState(3);
  const sectionClassName = "SearchResults";
  const containerClassName = "SearchResuls__container";
  const titleClassName = "SearchResults__title";
  const searchKeyword = "Dogs";

  const currentCards =
    searchResults.length > 0 ? searchResults.slice(0, numberOfCards) : [];
  const cardNumberDifference = searchResults.length - numberOfCards;

  function handleShowMore() {
    if (numberOfCards >= searchResults.length) return;
    if (cardNumberDifference > 3) {
      setNumberOfCards(numberOfCards + 3);
    } else {
      setNumberOfCards(numberOfCards + cardNumberDifference);
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
          <NoResultsFound keyword={searchKeyword} />
        ) : (
          <NewsCardList>
            {currentCards.map((card, index) => (
              <NewsCard
                key={index}
                cardData={card}
                isLoggedIn={isLoggedIn}
                onSaveClick={onSaveClick}
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
