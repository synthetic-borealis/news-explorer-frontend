import "./SavedNewsMain.css";

import NewsCardList from "../NewsCardList";
import NewsCard from "../NewsCard";

function SavedNewsMain({ savedArticles, onDeleteClick }) {
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
