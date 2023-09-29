/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import "./Blog.scss";
import Loading from "../../components/Loading/Loading";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import supabase from "../../api/supabase";
import HeaderBlogMain from "../../components/HeaderBlog/HeaderBlogMain";
import Card_WhichBaaSToChooseIn2023 from "./Articles/which-baas-to-choose-in-2023/Card_WhichBaaSToChooseIn2023";
import FooterArticles from "../../components/Footer/FooterArticles";
import Card_PublishNewVersionAppStore from "./Articles/publish-new-version-apple/Card_PublishNewVersionAppStore";
import Searchbar from "../../components/Searchbar/Searchbar";

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [setIsVisible] = useState(false);
  const { inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView, setIsVisible]);

  const { t } = useTranslation();

  const renderArticles = async () => {
    try {
      const { data, error } = await supabase.from("articles").select("*");

      if (error) {
        throw new Error(error.message);
      } else {
        setArticles(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Failed to retrieve users by ID:", error.message);
    }
  };

  useEffect(() => {
    renderArticles();
  }, []);

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
        {isLoading ? (
          <Loading />
        ) : (
          <div className="articles">
            {articles.map((article, index) => {
              if (!searchTerm || article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                if (article.title.toLowerCase().includes(searchTerm)) {
                  return <Card_WhichBaaSToChooseIn2023 key={index} {...article} />;
                } else if (article.title.toLowerCase().includes(searchTerm)) {
                  return <Card_PublishNewVersionAppStore key={index} {...article} />;
                }
              }
              return null;
            })}
          </div>
        )}
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
