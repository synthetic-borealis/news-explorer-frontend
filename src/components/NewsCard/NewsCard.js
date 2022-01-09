import "./NewsCard.css";

import React from "react";
import { useLocation } from "react-router";
import NewsCardButton from "../NewsCardButton/NewsCardButton";
import Tooltip from "../Tooltip/Tooltip";

import { monthNames, routePaths } from "../../utils/constants";

function NewsCard(props) {
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  const cardImage = `url(${props.cardData.urlToImage})`;
  const cardDate = new Date(props.cardData.publishedAt);
  const dateString = `${monthNames[cardDate.getMonth()]} ${cardDate.getDate()}, ${cardDate.getFullYear()}`;
  const tooltipCaption = "Sign in to save articles";
  const tooltipClasses = `NewsCard__tooltip${isTooltipVisible ? " NewsCard__tooltip_visible" : ""}`;

  const handleButtonMouseEnter = (evt) => {
    setIsTooltipVisible(true);
  };

  const handleButtonMouseLeave = (evt) => {
    setIsTooltipVisible(false);
  };

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
        <p className="NewsCard__content">{props.cardData.content.split("[")[0]}</p>
        <p className="NewsCard__source">{props.cardData.source.name}</p>
      </div>
      <a href={props.cardData.url} className="NewsCard__link" target="_blank">{props.cardData.title}</a>
      <NewsCardButton onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave} />
      <Tooltip extraClasses={tooltipClasses} caption={tooltipCaption} />
    </article>
  );
}

export default NewsCard;
