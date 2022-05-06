import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SFilmDetails from "./style";

export default function FilmDetails() {
  const [moviesData, setMoviesData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=923a42c07dc9afdc9a05b46fb2fd558b&`
      )
      .then(({ data }) => {
        setMoviesData(data);
      });
  }, []);

  return (
    <SFilmDetails>
      {moviesData.genres && (
        <>
          <p>{moviesData.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesData.poster_path}`}
            alt="poster of the film"
          />
          <p>{moviesData.genres.map((genre) => genre.name).join(", ")}</p>
          <p>{moviesData.overview}</p>
          <p>Runtime : {moviesData.runtime} min</p>
          <p>Average : {moviesData.vote_average} / 10</p>
          <p>Release date : {moviesData.release_date}</p>
        </>
      )}
    </SFilmDetails>
  );
}
