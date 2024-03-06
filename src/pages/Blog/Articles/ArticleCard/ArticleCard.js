import React from "react";
import "./ArticleCard.scss";
import { Link } from "react-router-dom";

const ArticleCard = ({ id, title, image, urlName, content, tags, created_at }) => {
  const formatDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const formattedDate = formatDate(created_at);
  const props = { id, title, urlName, created_at: formattedDate, tags, image, content };

  return (
    <Link to={`/blog/${urlName}`} state={{ articleProps: props }}>
      <div className="CardArticle" key={id}>
        <div>
          <div className="article-images">
            <img className="article-image" src={image} alt="article" />
          </div>
          <h4>{formattedDate}</h4>
          <h1 className="article-title">{title}&nbsp;&nbsp;&nbsp;</h1>
          <div className="tags">
            {tags?.map((item) => (
              <h6 className="gradient-bg">{item}</h6>
            ))}
          </div>
        </div>

        <p>Read article</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
