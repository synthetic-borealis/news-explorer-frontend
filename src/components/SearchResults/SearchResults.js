import "./SearchResults.css";

import NewsCardList from "../NewsCardList/NewsCardList";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

function SearchResults(props) {
  function handleShowMore() {
    console.log("Showing more");
  }

  return (
    <section className="SearchResults">
      <div className="SearchResuls__container">
        <h2 className="SearchResults__title">Search results</h2>
        <NewsCardList></NewsCardList>
        <ShowMoreButton onClick={handleShowMore} />
      </div>
    </section>
  );
}

export default SearchResults;
