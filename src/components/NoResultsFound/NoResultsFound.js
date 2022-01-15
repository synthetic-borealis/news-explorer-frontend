import "./NoResultsFound.css";

function NoResultsFound({ keyword = "" }) {
  const containerClassName = "NoResultsFound";
  const messageClassName = "NoResultsFound__title";
  const keywordClassName = "NoResultsFound__keyword";

  return (
    <div className={containerClassName}>
      <h3 className={messageClassName}>
        No results found for{" "}
        <span className={keywordClassName}>{keyword}</span>
      </h3>
    </div>
  );
}

export default NoResultsFound;
