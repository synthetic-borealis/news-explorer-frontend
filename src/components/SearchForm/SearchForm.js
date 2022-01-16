import React from "react";
import "./SearchForm.css";

import Button from "../Button/Button";

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = React.useState("");
  const [isErrorVisible, setIsErrorVisible] = React.useState(false);
  const formClassName = "SearchForm";
  const inputContainerClass = "SearchForm__input-container";
  const inputClassName = "SearchForm__input";
  const errorLabelClass = `SearchForm__error${isErrorVisible ? " SearchForm__error_visible" : ""}`;
  const buttonClassName = "SearchForm__button";
  const buttonLabelClass = "SearchForm__button-label";

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
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
    <form name="search-form" className={formClassName} onSubmit={handleSubmit}>
      <label className={inputContainerClass}>
        <input
          name="search"
          className={inputClassName}
          placeholder="Enter topic"
          value={searchValue}
          onChange={handleChange}
          {...({"aria-label": "search"})}
          minLength="1"
          onInvalid={handleInvalid}
          required
        />
        <span className={errorLabelClass}>Please enter a keyword</span>
      </label>
      <Button
        type="submit"
        className={buttonClassName}
        // onClick={(e) => e.preventDefault()}
        ariaLabel="search button"
      >
        <span className={buttonLabelClass}>Search</span>
      </Button>
    </form>
  );
}

export default SearchForm;
