import "./SavedNewsMain.css";

import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";

function SavedNewsMain({ savedArticles, isLoggedIn, onCardButtonClick }) {
  const sectionClassName = "SavedNewsMain";
  const containerClassName = "SavedNewsMain__container";

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <NewsCardList>
          {savedArticles.map((card, index) => (
            <NewsCard
              key={index}
              cardData={card}
              isLoggedIn={isLoggedIn}
              onButtonClick={() => onCardButtonClick(card)}
            />
          ))}
        </NewsCardList>
      </div>
    </section>
  );
}

export default SavedNewsMain;
