/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import supabase from "../../api/supabase";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./LikesBlog.scss";

const LikesBlog = ({ articleId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const fetchLikes = async () => {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("likes")
        .eq("id", articleId)
        .single();

      if (error) {
        console.error("Error fetching article likes:", error);
        return;
      }

      setLikes(data.likes);
    } catch (error) {
      console.error("Error fetching article likes:", error);
    }
  };

  const handleLikeClick = async () => {
    try {
      let updatedLikes = likes;
      if (liked) {
        updatedLikes -= 1;
      } else {
        updatedLikes += 1;
      }

      const { data, error } = await supabase
        .from("articles")
        .update({ likes: updatedLikes })
        .eq("id", articleId)
        .single();

      if (error) {
        console.error("Error updating article likes:", error);
        return;
      }

      setLikes(updatedLikes);
      setLiked(!liked);
    } catch (error) {
      console.error("Error updating article likes:", error);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, [articleId, fetchLikes]);

  return (
    <div className="likes">
      <span>Liked this article?</span>
      <button onClick={handleLikeClick}>
        {liked ? <AiFillHeart size={35} color={"red"} /> : <AiOutlineHeart size={35} />}
      </button>
      <span> {likes}</span>
    </div>
  );
};

export default LikesBlog;
