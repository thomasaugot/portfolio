import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Use useParams to get the articleUrl
import "./ArticleContent.scss";
import HeaderBlogContent from "../../../../components/HeaderBlog/HeaderBlogContent";
import DOMPurify from "dompurify";
import FooterArticles from "../../../../components/Footer/FooterArticles";
import LikesBlog from "../../../../components/LikesBlog/LikesBlog";
import supabase from "../../../../api/supabase";
import Loading from "../../../../components/Loading/Loading";

const ArticleContent = () => {
  const { articleUrl } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticleContent = async () => {
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("urlName", articleUrl);

        if (error) {
          throw new Error(error.message);
        } else if (data && data.length > 0) {
          setArticle(data[0]);
        }
      } catch (error) {
        console.error("Failed to retrieve article content:", error.message);
      }
    };

    fetchArticleContent();
  }, [articleUrl]);

  return (
    <div className="Content">
      <HeaderBlogContent />
      {article ? (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }} />
      ) : (
        <Loading />
      )}
      {article && <LikesBlog articleId={article.id} />}
      <FooterArticles />
      <br />
      <br />
    </div>
  );
};

export default ArticleContent;
