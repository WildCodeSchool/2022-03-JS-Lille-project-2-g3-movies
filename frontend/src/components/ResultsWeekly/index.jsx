import { useEffect, useState } from "react";
import axios from "axios";
import CardForm from "../CardForm";
import SResultsWeekly from "./style";

export default function ResultsWeekly() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=923a42c07dc9afdc9a05b46fb2fd558b&language=en-US`
      )
      .then(({ data }) => {
        const newResults = data.results.map((res) => ({
          ...res,
          posterPath: res.poster_path,
        }));
        setMoviesData(newResults);
      });
  }, []);
  return (
    moviesData.length > 0 && ( // fixed autoplay malfunction
      <SResultsWeekly>
        {moviesData.map((movie) => (
          <CardForm key={movie.id} data={movie} />
        ))}
      </SResultsWeekly>
    )
  );
}
