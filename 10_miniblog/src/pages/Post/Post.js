import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

import styles from "./Post.module.css";

export const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando Post</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3> Este post tara sobre </h3>
          <div className={styles.tags}>
          {post.tagsArray.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}
          </div>
        </>
      )}
    </div>
  );
};
