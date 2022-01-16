import "./SavedNews.css";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsMain from "../SavedNewsMain/SavedNewsMain";

function SavedNews({ savedArticles, onCardDeleteClick, isLoggedIn }) {
  const sectionClassName = "SavedNews";

  return (
    <main className={sectionClassName}>
      <SavedNewsHeader savedArticles={savedArticles} />
      <SavedNewsMain
        savedArticles={savedArticles}
        onDeleteClick={onCardDeleteClick}
        isLoggedIn={isLoggedIn}
      />
    </main>
  );
}

export default SavedNews;
