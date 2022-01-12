import React from "react";
import "./SearchForm.css";

import Button from "../Button/Button";

function SearchForm() {
  const [searchValue, setSearchValue] = React.useState("");
  const formClassName = "SearchForm";
  const inputClassName = "SearchForm__input";
  const buttonClassName = "SearchForm__button";
  const buttonLabelClass = "SearchForm__button-label";

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <form name="search-form" className={formClassName} action="#">
      <input
        name="search"
        className={inputClassName}
        placeholder="Enter topic"
        value={searchValue}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className={buttonClassName}
        onClick={(e) => e.preventDefault()}
        ariaLabel="search button"
      >
        <span className={buttonLabelClass}>Search</span>
      </Button>
    </form>
  );
}

export default SearchForm;
