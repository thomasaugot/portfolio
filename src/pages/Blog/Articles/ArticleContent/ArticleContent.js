/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ArticleContent.scss";
import HeaderBlogContent from "../../../../components/HeaderBlog/HeaderBlogContent";
import DOMPurify from "dompurify";
import FooterArticles from "../../../../components/Footer/FooterArticles";
import LikesBlog from "../../../../components/LikesBlog/LikesBlog";

const ArticleContent = () => {
  const location = useLocation();
  const { articleProps } = location.state;

  return (
    <div className="Content">
      <HeaderBlogContent />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleProps.content) }} />
      <LikesBlog articleId={articleProps.id} />
      <FooterArticles />
      <br />
      <br />
    </div>
  );
};

export default ArticleContent;
