import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostDetail } from "../../components/PostDetail";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import styles from "./Home.module.css";

export const Home = () => {
  const [query, setQuery] = useState("");
  // const [posts, setPosts] = useState([]);
  const { documents: posts, loading } = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };
  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando....</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to={"/posts/create"} className="btn">
              Criar Primeiro Post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
