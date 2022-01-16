import "./SavedNewsMain.css";

import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";

function SavedNewsMain({ savedArticles, isLoggedIn, onDeleteClick }) {
  const sectionClassName = "SavedNewsMain";
  const containerClassName = "SavedNewsMain__container";

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <NewsCardList>
          {savedArticles.map((card) => (
            <NewsCard
              key={card._id}
              cardData={card}
              isLoggedIn={isLoggedIn}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </NewsCardList>
      </div>
    </section>
  );
}

export default SavedNewsMain;
