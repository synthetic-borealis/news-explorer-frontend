import './SearchForm.css';

function SearchForm(props) {
  return (
    <form name="search-form" className="SearchForm" action="#">
      <input name="search" className="SearchForm__input" placeholder="Enter topic" />
      <button type="submit" className="SearchForm__button" onClick={(e) => e.preventDefault()}>Search</button>
    </form>
  );
}

export default SearchForm;
