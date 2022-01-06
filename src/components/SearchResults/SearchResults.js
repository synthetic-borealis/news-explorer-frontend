import "./SearchResults.css";

import React from "react";

import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

function SearchResults(props) {
  const [numberOfCards, setNumberOfCards] = React.useState(3);
  const currentCards = props.currentResults.length > 0 ? props.currentResults.slice(0, numberOfCards) : [];
  const cardNumberDifference = props.currentResults.length - numberOfCards;

  function handleShowMore() {
    if (numberOfCards >= props.currentResults.length) return;
    if (cardNumberDifference > 3) {
      setNumberOfCards(numberOfCards + 3);
    } else {
      setNumberOfCards(numberOfCards + cardNumberDifference);
    }
  }

  return (
    <section className="SearchResults">
      <div className="SearchResuls__container">
        <h2 className="SearchResults__title">Search results</h2>
        <NewsCardList>
          {currentCards.map((card, index) => (
            <NewsCard key={index} cardData={card} />
          ))}
        </NewsCardList>
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
