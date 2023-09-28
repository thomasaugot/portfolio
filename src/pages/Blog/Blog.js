/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import "./Blog.scss";
import Loading from "../../components/Loading/Loading";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import supabase from "../../api/supabase";
import HeaderBlogMain from "../../components/HeaderBlog/HeaderBlogMain";
import Card_WhichBaaSToChooseIn2023 from "./Articles/which-baas-to-choose-in-2023/Card_WhichBaaSToChooseIn2023";
import FooterArticles from "../../components/Footer/FooterArticles";
// import Searchbar from "../../components/Searchbar/Searchbar";

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [setIsVisible] = useState(false);
  const { inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });
  const [articles, setArticles] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
    // Hide the loading component after 3 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [inView, setIsVisible]);

  const { t } = useTranslation();

  const renderArticles = async () => {
    try {
      const { data, error } = await supabase.from("articles").select("*");

      if (error) {
        throw new Error(error.message);
      } else {
        setArticles(data);
      }
    } catch (error) {
      console.error("Failed to retrieve users by ID:", error.message);
    }
  };

  useEffect(() => {
    renderArticles();
  }, []);

  // const filteredArticles = articles.filter((item) => {
  //   return item?.title?.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
            {/* <div className="search__bar__section">
              <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div> */}
            <div className="articles">
              {/* eslint-disable-next-line react/jsx-pascal-case */}
              <Card_WhichBaaSToChooseIn2023 {...articles[0]} />
            </div>
            <h3>Thanks for visiting!</h3>
          </div>
          <br />
          <FooterArticles />
        </>
      )}
    </>
  );
};

export default BlogPage;
