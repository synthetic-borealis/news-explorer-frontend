import "./SavedNews.css";

import React from "react";

import SavedNewsHeader from "../../components/SavedNewsHeader/SavedNewsHeader"
import SavedNewsMain from "../../components/SavedNewsMain/SavedNewsMain";

function SavedNews({ savedArticles, onCardDeleteClick }) {
  const sectionClassName = "SavedNews";

  return (
    <main className={sectionClassName}>
      <SavedNewsHeader savedArticles={savedArticles} />
      <SavedNewsMain
        savedArticles={savedArticles}
        onDeleteClick={onCardDeleteClick}
      />
    </main>
  );
}

export default SavedNews;
