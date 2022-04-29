import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SResultsCategory from "./style";
import Card from "../Card";
import genres from "../../assets/data";

export default function ResultsCategory() {
  const [moviesData, setMoviesData] = useState([]);
  const { category } = useParams();
  // function searching for the good request associated with the category in data.jsx
  const request = (cat) => {
    return genres.find((genre) => genre.key === cat).request;
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=923a42c07dc9afdc9a05b46fb2fd558b&${request(
          category
        )}`
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
