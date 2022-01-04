import './SearchForm.css';

import Button from '../Button/Button';

function SearchForm(props) {
  return (
    <form name="search-form" className="SearchForm" action="#">
      <input name="search" className="SearchForm__input" placeholder="Enter topic" />
      <Button type="submit" extraClasses="SearchForm__button">Search</Button>
      {/* <button type="submit" className="SearchForm__button" onClick={(e) => e.preventDefault()}>Search</button> */}
    </form>
  );
}

export default SearchForm;
