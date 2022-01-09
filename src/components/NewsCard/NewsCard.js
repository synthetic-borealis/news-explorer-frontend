import "./NewsCard.css";

import React from "react";
import { useLocation } from "react-router";
import NewsCardButton from "../NewsCardButton/NewsCardButton";
import Tooltip from "../Tooltip/Tooltip";

import { monthNames, routePaths } from "../../utils/constants";

function NewsCard(props) {
  const [isSaved, setIsSaved] = React.useState(false); // TODO remove this line when News API functionality is implemented
  const location = useLocation();
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  const cardImage = `url(${props.cardData.urlToImage})`;
  const cardDate = new Date(props.cardData.publishedAt);
  const dateString = `${
    monthNames[cardDate.getMonth()]
  } ${cardDate.getDate()}, ${cardDate.getFullYear()}`;

  const tooltipCaption =
    location.pathname === routePaths.home
      ? props.isLoggedIn
        ? "Add to saved"
        : "Sign in to save articles"
      : "Remove from saved";

  const tooltipClasses = `NewsCard__tooltip${
    isTooltipVisible ? " NewsCard__tooltip_visible" : ""
  }`;

  const handleButtonMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleButtonMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const handleButtonClick = () => {
    setIsSaved(!isSaved); // TODO remove this line when News API functionality is implemented (?)
    props.onButtonClick();
  }

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
        <p className="NewsCard__content">
          {props.cardData.content.split("[")[0]}
        </p>
        <p className="NewsCard__source">{props.cardData.source.name}</p>
      </div>
      <a href={props.cardData.url} className="NewsCard__link" target="_blank">
        {props.cardData.title}
      </a>
      <NewsCardButton
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        onClick={handleButtonClick}
        isSaved={isSaved}
      />
      <Tooltip extraClasses={tooltipClasses} caption={tooltipCaption} />
    </article>
  );
}

export default NewsCard;
