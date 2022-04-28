import { useEffect, useState } from "react";
import axios from "axios";
import SResultsCategory from "./style";
import Card from "../Card";

export default function ResultsCategory() {
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
      <SResultsCategory>
        {moviesData.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </SResultsCategory>
    )
  );
}
