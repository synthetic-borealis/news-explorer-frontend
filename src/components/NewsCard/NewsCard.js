import "./NewsCard.css";

import React from "react";
import { useLocation } from "react-router";
import NewsCardButton from "../NewsCardButton/NewsCardButton";
import Tooltip from "../Tooltip/Tooltip";
import TagBubble from "../TagBubble/TagBubble";

import { monthNames, routePaths } from "../../utils/constants";

function NewsCard({ isLoggedIn, cardData, onButtonClick }) {
  const [isSaved, setIsSaved] = React.useState(false); // TODO remove this line when News API functionality is implemented
  const location = useLocation();
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  const cardImage = `url(${cardData.urlToImage})`;
  const cardDate = new Date(cardData.publishedAt);
  const dateString = `${
    monthNames[cardDate.getMonth()]
  } ${cardDate.getDate()}, ${cardDate.getFullYear()}`;

  const tooltipCaption =
    location.pathname === routePaths.home
      ? isLoggedIn
        ? "Add to saved"
        : "Sign in to save articles"
      : "Remove from saved";

  const cardClassName = "NewsCard";
  const imageClassName = "NewsCard__image";
  const containerClassName = "NewsCard__container";
  const dateClassName = "NewsCard__date";
  const titleClassName = "NewsCard__title";
  const contentClassName = "NewsCard__content";
  const sourceClassName = "NewsCard__source";
  const linkClassName = "NewsCard__link";

  const tooltipClasses = `NewsCard__tooltip${
    isTooltipVisible ? " NewsCard__tooltip_visible" : ""
  }`;

  const tagBubbleClasses = "NewsCard__tag-bubble";
  const tagBubbleCaption = cardData.keyword ? cardData.keyword : "";

  const handleButtonMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleButtonMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const handleButtonClick = () => {
    setIsSaved(!isSaved); // TODO remove this line when News API functionality is implemented (?)
    onButtonClick();
  };

  return (
    <article className={cardClassName}>
      <div
        className={imageClassName}
        style={{ backgroundImage: cardImage }}
        {...{ "aria-label": `${cardData.title}` }}
      />
      <div className={containerClassName}>
        <p className={dateClassName}>{dateString}</p>
        <h3 className={titleClassName}>{cardData.title}</h3>
        <p className={contentClassName}>{cardData.content.split("[")[0]}</p>
        <p className={sourceClassName}>{cardData.source.name}</p>
      </div>
      <a
        href={cardData.url}
        className={linkClassName}
        target="_blank"
        rel="noreferrer"
      >
        {cardData.title}
      </a>
      <NewsCardButton
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        onClick={handleButtonClick}
        isSaved={isSaved}
      />
      <Tooltip className={tooltipClasses} caption={tooltipCaption} />
      {location.pathname === routePaths.savedNews ? (
        <TagBubble className={tagBubbleClasses} caption={tagBubbleCaption} />
      ) : (
        ""
      )}
    </article>
  );
}

export default NewsCard;
