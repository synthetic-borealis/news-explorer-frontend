import React from "react";
import "./SearchForm.css";

import Button from "../Button/Button";

function SearchForm(props) {
  const [searchValue, setSearchValue] = React.useState("");

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <form name="search-form" className="SearchForm" action="#">
      <input
        name="search"
        className="SearchForm__input"
        placeholder="Enter topic"
        value={searchValue}
        onChange={handleChange}
      />
      <Button
        type="submit"
        extraClasses="SearchForm__button"
        onClick={(e) => e.preventDefault()}
        ariaLabel="search button"
      >
        <span className="SearchForm__button-label">Search</span>
      </Button>
    </form>
  );
}

export default SearchForm;
