import "./SavedNewsMain.css";

import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";

function SavedNewsMain(props) {
  const savedArticles =
    props.savedArticles.length > 0 ? props.savedArticles : [];

  return (
    <section className="SavedNewsMain">
      <div className="SavedNewsMain__container">
        <NewsCardList>
          {savedArticles.map((card, index) => (
            <NewsCard key={index} cardData={card} isLoggedIn onButtonClick={() => props.onCardButtonClick(card)} />
          ))}
        </NewsCardList>
      </div>
    </section>
  );
}

export default SavedNewsMain;
