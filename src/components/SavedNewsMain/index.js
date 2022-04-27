import "./SavedNewsMain.css";

import NewsCardList from "../NewsCardList";
import NewsCard from "../NewsCard";

function SavedNewsMain({ savedArticles, onDeleteClick }) {
  return (
    <section className="SavedNewsMain">
      <div className="SavedNewsMain__container">
        <NewsCardList>
          {savedArticles.map((card) => (
            <NewsCard
              key={card._id}
              cardData={card}
              isLoggedIn={true}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </NewsCardList>
      </div>
    </section>
  );
}

export default SavedNewsMain;
