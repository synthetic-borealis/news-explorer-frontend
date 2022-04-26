import "./SearchSection.css";

import SearchForm from "../SearchForm";

function SearchSection({ onSearch }) {
  const sectionClassName = "SearchSection";
  const containerClassName = "SearchSection__container";
  const titleClassName = "SearchSection__title";
  const subtitleClassName = "SearchSection__subtitle";

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <h1 className={titleClassName}>What's going on in the world?</h1>
        <p className={subtitleClassName}>
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
      </div>
    </section>
  );
}

export default SearchSection;
