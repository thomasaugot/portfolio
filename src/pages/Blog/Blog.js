import React, { useState, useEffect } from "react";
import "./Blog.scss";
import Loading from "../../components/Loading/Loading";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import BGAnimation from "../../components/FooterBG/FooterBG";
import supabase from "../../api/supabase";
import ArticleCard from "./Articles/ArticleCard/ArticleCard";
import Searchbar from "../../components/Searchbar/Searchbar";

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
    // Hide the loading component after 3 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [inView]);

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

  const filteredArticles = articles.filter((item) => {
    return item?.title?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="BlogPage">
            <Link to="/" className="back-link">
              <IoMdArrowRoundBack />
              &nbsp;&nbsp;
              {t("Back to the main page")}
            </Link>
            <div className="search__bar__section">
              <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="articles">
              {filteredArticles?.map((item) => (
                <ArticleCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className="Footer" ref={ref}>
            {isVisible && (
              <Fade>
                <div style={{ textAlign: "center" }}>
                  <BGAnimation />
                </div>
                <p style={{ textAlign: "center", color: "white" }}>
                  2023 © <a href="https://www.linkedin.com/in/thomas-augot/"> Thomas Augot</a>.
                </p>
                <br></br>
              </Fade>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default BlogPage;
