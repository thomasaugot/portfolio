import React, { useEffect, useState } from "react";
import "./Blog.scss";
import HeaderBlogMain from "../../components/HeaderBlog/HeaderBlogMain";
import ArticleCard from "./Articles/ArticleCard/ArticleCard";
import Searchbar from "../../components/Searchbar/Searchbar";
import FooterArticles from "../../components/Footer/FooterArticles";
import Loading from "../../components/Loading/Loading";
import { motion } from "framer-motion";

const BlogPage = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredArticles = articles?.filter((item) => {
    const searchTermLower = searchTerm.toLowerCase();
    const titleLower = item?.title?.toLowerCase();
    const tagsLower = item?.tags?.map((tag) => tag.toLowerCase());
    const isReadyForViewing = item.isReady;

    return (
      isReadyForViewing &&
      (titleLower.includes(searchTermLower) ||
        (tagsLower && tagsLower.some((tag) => tag.includes(searchTermLower))))
    );
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="BlogPage">
            <HeaderBlogMain />
            <div className="top-content">
              <motion.h1
                whileInView={{ x: 1, opacity: 1 }}
                initial={{ x: "-100%", opacity: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  delay: 0.4,
                  ease: "easeOut",
                }}
                className="blog-title gradient-underline-blog"
              >
                &lt; Exploring Javascript And Beyond /&gt;
              </motion.h1>
              <div className="blog-intro">
                <motion.p
                  whileInView={{ x: 1, opacity: 1 }}
                  initial={{ x: "-100%", opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 40,
                    delay: 0.6,
                    ease: "easeOut",
                  }}
                >
                  Welcome to my blog!
                </motion.p>
                <motion.p
                  whileInView={{ x: 1, opacity: 1 }}
                  initial={{ x: "-100%", opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 40,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                >
                  Like many before me, my little career as a full-stack web and mobile developer
                  gave me the opportunity to do a lot of research in order to complete both personal
                  and professional projects. Focusing mostly on Javascript and its frameworks such
                  as React or React Native, I hope to contribute by sharing some of the results of
                  this research and offer articles on various subjects related to development in
                  general.
                </motion.p>
                <motion.p
                  whileInView={{ x: 1, opacity: 1 }}
                  initial={{ x: "-100%", opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 40,
                    delay: 1.0,
                    ease: "easeOut",
                  }}
                >
                  Happy reading!
                </motion.p>
              </div>
            </div>
            <div className="search__bar__section">
              <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="articles">
              {filteredArticles?.map((articleItem) => (
                <motion.div
                  whileInView={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.7, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    delay: articleItem.delay,
                  }}
                >
                  <ArticleCard key={articleItem.id} {...articleItem} />
                </motion.div>
              ))}
            </div>
            <h3>Thanks for visiting!</h3>
          </div>
          <br />
          <br />
          <FooterArticles />
          <br />
        </>
      )}
    </>
  );
};

export default BlogPage;
