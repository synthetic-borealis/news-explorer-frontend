import "./SearchResults.css";

import React from "react";

import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import NoResultsFound from "../NoResultsFound/NoResultsFound";

function SearchResults({ isLoggedIn, currentResults, onCardButtonClick }) {
  const [numberOfCards, setNumberOfCards] = React.useState(3);
  const sectionClassName = "SearchResults";
  const containerClassName = "SearchResuls__container";
  const titleClassName = "SearchResults__title";
  const searchKeyword = "Dogs";

  const currentCards =
    currentResults.length > 0 ? currentResults.slice(0, numberOfCards) : [];
  const cardNumberDifference = currentResults.length - numberOfCards;

  function handleShowMore() {
    if (numberOfCards >= currentResults.length) return;
    if (cardNumberDifference > 3) {
      setNumberOfCards(numberOfCards + 3);
    } else {
      setNumberOfCards(numberOfCards + cardNumberDifference);
    }
  }

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <h2 className={titleClassName}>Search results</h2>
        {currentResults.length === 0 ? (
          <NoResultsFound keyword={searchKeyword} />
        ) : (
          <NewsCardList>
            {currentCards.map((card, index) => (
              <NewsCard
                key={index}
                cardData={card}
                isLoggedIn={isLoggedIn}
                onButtonClick={() => onCardButtonClick(card)}
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
