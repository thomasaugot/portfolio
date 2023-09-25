import React from "react";
import "./ArticleCard.scss";
import { Link } from "react-router-dom";

const ArticleCard = ({ id, title, images, body, style, urlName }) => {
  const props = { id, title, images, body, style, urlName };

  return (
    <Link to={`/blog/${urlName}`} state={{ articleProps: props }}>
      <div className={`Article-card ${style}`} key={id}>
        <div className="article-images">
          {images.map((image, index) => (
            <img key={index} className="article-image" src={image} alt="article" />
          ))}
        </div>
        <h1 className="article-title">{title}&nbsp;&nbsp;&nbsp;</h1>
        <p>Read article</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
