import "./SearchResults.css";

import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

function SearchResults(props) {
  const currentCards = props.currentResults.slice(0, 3);

  function handleShowMore() {
    console.log("Showing more");
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
        <ShowMoreButton onClick={handleShowMore} />
      </div>
    </section>
  );
}

export default SearchResults;
