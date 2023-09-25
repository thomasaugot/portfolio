import React from "react";
import { useLocation } from "react-router-dom";
import "./ArticleContent.scss";

const ArticleContent = () => {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { id, title, images, body, style, urlName } = location.state.articleProps;

  return (
    <div className="Article-content">
      <h1 className="article-title">{title}</h1>
      <div className="article-images">
        {images.map((image, index) => (
          <img key={index} className="article-image" src={image} alt="article" />
        ))}
      </div>
      <p className="article-body">{body}</p>
    </div>
  );
};

export default ArticleContent;
