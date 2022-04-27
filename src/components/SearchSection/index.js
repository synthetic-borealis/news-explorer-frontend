import "./SearchSection.css";

import SearchForm from "../SearchForm";

function SearchSection({ onSearch }) {
  return (
    <section className="SearchSection">
      <div className="SearchSection__container">
        <h1 className="SearchSection__title">What's going on in the world?</h1>
        <p className="SearchSection__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
      </div>
    </section>
  );
}

export default SearchSection;
