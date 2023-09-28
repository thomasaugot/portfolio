import { Link } from "react-router-dom";
import "./Card_WhichBaaSToChooseIn2023.scss";

const Card_WhichBaaSToChooseIn2023 = ({ id, title, urlName, created_at }) => {
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
  const props = { id, title, urlName, created_at: formattedDate };

  return (
    <Link to={`/blog/${urlName}`} state={{ articleProps: props }}>
      <div className={`CardBaas`} key={id}>
        <div className="article-images">
          <img className="article-image" src={require("./code.jpg")} alt="article" />
        </div>
        <h4>{formattedDate}</h4>
        <h1 className="article-title">{title}&nbsp;&nbsp;&nbsp;</h1>
        <p>Read article</p>
      </div>
    </Link>
  );
};

export default Card_WhichBaaSToChooseIn2023;
