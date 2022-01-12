import "./SavedNews.css";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsMain from "../SavedNewsMain/SavedNewsMain";

function SavedNews({ savedArticles, onCardButtonClick }) {
  const sectionClassName = "SavedNews";

  return (
    <main className={sectionClassName}>
      <SavedNewsHeader savedArticles={savedArticles} />
      <SavedNewsMain
        savedArticles={savedArticles}
        onCardButtonClick={onCardButtonClick}
      />
    </main>
  );
}

export default SavedNews;
