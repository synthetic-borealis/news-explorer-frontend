import React from "react";
import "./SearchForm.css";

import Button from "../Button";
import { searchStorageKeys } from "../../utils/constants";

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = React.useState(
    window.localStorage.getItem(searchStorageKeys.query)
      ? window.localStorage.getItem(searchStorageKeys.query)
      : ""
  );
  const [isErrorVisible, setIsErrorVisible] = React.useState(false);
  const errorLabelClass = `SearchForm__error${
    isErrorVisible ? " SearchForm__error_visible" : ""
  }`;

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
    window.localStorage.setItem(searchStorageKeys.query, evt.target.value);
    setIsErrorVisible(false);
  };

  const handleInvalid = (evt) => {
    evt.preventDefault();
    setIsErrorVisible(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (typeof onSearch === "function") {
      onSearch(searchValue);
    }
  };

  return (
    <form name="search-form" className="SearchForm" onSubmit={handleSubmit}>
      <label className="SearchForm__input-container">
        <input
          name="search"
          className="SearchForm__input"
          placeholder="Enter topic"
          value={searchValue}
          onChange={handleChange}
          {...{ "aria-label": "search" }}
          minLength="1"
          onInvalid={handleInvalid}
          required
        />
        <span className={errorLabelClass}>Please enter a keyword</span>
      </label>
      <Button
        type="submit"
        className="SearchForm__button"
        ariaLabel="search button"
      >
        <span className="SearchForm__button-label">Search</span>
      </Button>
    </form>
  );
}

export default SearchForm;
