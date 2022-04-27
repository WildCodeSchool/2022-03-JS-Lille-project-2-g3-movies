import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SSugResult from "./style";

export default function SugResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const request = searchParams.toString();

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=923a42c07dc9afdc9a05b46fb2fd558b&${request}`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, []);

  return (
    <SSugResult>
      <h2>Our suggestion for you</h2>

      {moviesData.map((movie) => (
        <p>{` Titre : ${movie.original_title},  released ${movie.release_date}`}</p>
      ))}
    </SSugResult>
  );
}
