import React from "react";
import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css";

export const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>{post.createBy}</p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag, index) => (
          <p key={tag}>
            <span key={tag}>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};
