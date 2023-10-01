import React, { useState, useEffect } from "react";
import "./Blog.scss";
import HeaderBlogMain from "../../components/HeaderBlog/HeaderBlogMain";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import ArticleCard from "./Articles/ArticleCard/ArticleCard";
import Searchbar from "../../components/Searchbar/Searchbar";
import FooterArticles from "../../components/Footer/FooterArticles";

const BlogPage = ({ articles }) => {
  const [setIsVisible] = useState(false);
  const { inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView, setIsVisible]);

  const { t } = useTranslation();

  const filteredArticles = articles?.filter((item) => {
    return item?.title?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log("Filtered articles:", filteredArticles);

  return (
    <>
      <div className="BlogPage">
        <HeaderBlogMain />
        <div className="top-content">
          <h1 className="blog-title gradient-underline-blog">React & Roll: Tom's dev blog</h1>
          <div className="blog-intro">
            <p>
              {t(
                "Like many before me, my short career as a full-stack web and mobile developer gave me the opportunity to do a lot of research in order to complete both personal and professional projects. I therefore decided to share some of the results of this research and offer articles aimed at documenting on various subjects related to development in general. Happy reading!"
              )}
            </p>
            <p>
              {t(
                "NB: All articles are written in English to satisfy as many people as possible :)"
              )}
            </p>
          </div>
        </div>
        <div className="search__bar__section">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="articles">
          {filteredArticles?.map((articleItem) => (
            <ArticleCard key={articleItem.id} {...articleItem} />
          ))}
        </div>
        <h3>Thanks for visiting!</h3>
      </div>
      <br />
      <br />
      <FooterArticles />
      <br />
    </>
  );
};

export default BlogPage;
