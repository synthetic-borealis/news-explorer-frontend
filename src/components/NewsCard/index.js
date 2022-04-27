import "./NewsCard.css";

import React from "react";
import { useLocation } from "react-router";
import NewsCardButton from "../NewsCardButton";
import Tooltip from "../Tooltip";
import TagBubble from "../TagBubble";

import { monthNames, routePaths } from "../../utils/constants";

function NewsCard({ isLoggedIn, cardData, keyword, onSaveClick, onDeleteClick, isSaved = false }) {
  const location = useLocation();
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

  const articleSource = typeof cardData.source === "string" ? cardData.source : cardData.source.name;
  const articleText = typeof cardData.text === "string" ? cardData.text : cardData.content.split("[")[0];
  const articleLink = typeof cardData.link === "string" ? cardData.link : cardData.url;
  const articleImage = typeof cardData.image === "string" ? cardData.image : cardData.urlToImage;
  const cardImage = `url("${articleImage}")`;
  const cardDate = new Date(cardData.date ? cardData.date : cardData.publishedAt);
  const dateString = `${
    monthNames[cardDate.getMonth()]
  } ${cardDate.getDate()}, ${cardDate.getFullYear()}`;

  const tooltipCaption =
    location.pathname === routePaths.home
      ? isLoggedIn
        ? "Add to saved"
        : "Sign in to save articles"
      : "Remove from saved";

  const tooltipClasses = `NewsCard__tooltip${
    isTooltipVisible ? " NewsCard__tooltip_visible" : ""
  }`;

  const tagBubbleClasses = "NewsCard__tag-bubble";
  const tagBubbleCaption = cardData.keyword ? cardData.keyword : keyword;

  const handleButtonMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleButtonMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const handleCardSave = () => {
    if (isLoggedIn) {
      const articleData = {
        keyword: keyword,
        title: cardData.title,
        text: articleText,
        date: cardData.publishedAt,
        source: cardData.source.name,
        link: cardData.url,
        image: articleImage,
      };

      onSaveClick(articleData);
    }
  }

  const handleCardDelete = () => {
    if (isLoggedIn) {
      onDeleteClick(cardData);
    }
  }

  const handleButtonClick = () => {
    if (location.pathname === routePaths.home) {
      if (isSaved) {
        handleCardDelete();
      } else {
        handleCardSave();
      }
    } else if (location.pathname === routePaths.savedNews) {
      handleCardDelete();
    }
  };

  return (
    <article className="NewsCard">
      <div
        className="NewsCard__image"
        style={{ backgroundImage: cardImage }}
        {...{ "aria-label": `${cardData.title}` }}
      />
      <div className="NewsCard__container">
        <p className="NewsCard__date">{dateString}</p>
        <h3 className="NewsCard__title">{cardData.title}</h3>
        <p className="NewsCard__content">{articleText}</p>
        <p className="NewsCard__source">{articleSource}</p>
      </div>
      <a
        href={articleLink}
        className="NewsCard__link"
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
