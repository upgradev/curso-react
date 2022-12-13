import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesUrl = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}/top_rated?api_key=${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes</h2>
      <div className="movies_container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};
