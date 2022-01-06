import "./NewsCard.css";

import { monthNames } from "../../utils/constants";

function NewsCard(props) {
  const cardImage = `url(${props.cardData.urlToImage})`;
  const cardDate = new Date(props.cardData.publishedAt);
  const dateString = `${monthNames[cardDate.getMonth()]} ${cardDate.getDate()}, ${cardDate.getFullYear()}`;

  return (
    <article className="NewsCard">
      <div
        className="NewsCard__image"
        style={{ backgroundImage: cardImage }}
        {...{ "aria-label": `${props.cardData.title}` }}
      />
      <div className="NewsCard__container">
        <p className="NewsCard__date">{dateString}</p>
        <h3 className="NewsCard__title">{props.cardData.title}</h3>
      </div>
      <a href={props.cardData.url} className="NewsCard__link" target="_blank">{props.cardData.title}</a>
    </article>
  );
}

export default NewsCard;
