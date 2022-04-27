import "./NoResultsFound.css";

function NoResultsFound({ keyword = "" }) {
  return (
    <div className="NoResultsFound">
      <h3 className="NoResultsFound__title">
        No results found for{" "}
        <span className="NoResultsFound__keyword">{keyword}</span>
      </h3>
    </div>
  );
}

export default NoResultsFound;
