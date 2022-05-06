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
        <section
          className="banner"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${moviesData.backdrop_path})`,
          }}
        >
          <div className="info">
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/w300${moviesData.poster_path}`}
              alt=""
            />
            <div className="infotxt">
              <h1>{moviesData.title}</h1>
              <h3>
                {moviesData.genres.map((genre) => (
                  <span>{genre.name}</span>
                ))}
              </h3>
              <h2 className="synopsis">Synopsis</h2>
              <p className="synopsis">{moviesData.overview}</p>
            </div>
          </div>
          <div className="infosupp">
            <p>Average : {moviesData.vote_average} / 10</p>
            <p>Runtime : {moviesData.runtime} min</p>
            <p>Release date : {moviesData.release_date}</p>
          </div>
        </section>
      )}
    </SFilmDetails>
  );
}
