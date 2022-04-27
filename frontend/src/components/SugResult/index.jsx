import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SSugResult from "./style";

export default function SugResult() {
  const { URLValue } = useParams();
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=923a42c07dc9afdc9a05b46fb2fd558b&language=en-US`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, []);
  return (
    <SSugResult>
      <h2>Our suggestion for you</h2>
      <p>your choice is {URLValue}</p>

      {moviesData
        .filter((movie) => {
          const releaseDateOk = Date.parse(movie.release_date);
          return releaseDateOk > Date.parse("1990-01-01");
        })
        .map((movie) => (
          <p>{` Titre : ${movie.original_title},  released ${movie.release_date}`}</p>
        ))}
    </SSugResult>
  );
}
