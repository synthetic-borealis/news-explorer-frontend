import "./SavedNews.css";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews(props) {
  return (
    <main className="SavedNews">
      <SavedNewsHeader savedArticles={props.savedArticles} />
    </main>
  );
}

export default SavedNews;
