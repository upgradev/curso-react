import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const searchUrl = process.env.REACT_APP_SEARCH;
const apiKey = process.env.REACT_APP_API_KEY;

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?api_key=${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryUrl);
  }, [movies]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query_text"> {query} </span>
      </h2>
      <div className="movies_container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};
