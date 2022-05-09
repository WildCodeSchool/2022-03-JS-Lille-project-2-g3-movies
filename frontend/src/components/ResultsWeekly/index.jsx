import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SResultsWeekly from "./style";
import Card from "../Card";

export default function ResultsWeekly() {
  const [moviesData, setMoviesData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=923a42c07dc9afdc9a05b46fb2fd558b&page=${count}`
      )
      .then(({ data }) => {
        const newResults = data.results.map((res) => ({
          ...res,
          posterPath: res.poster_path,
        }));
        setMoviesData(newResults);
      });
  }, [count]);
  return (
    moviesData.length > 0 && ( // fixed autoplay malfunction
      <SResultsWeekly>
        {moviesData.map((movie) => (
          <Link to={`/detail/${movie.id}`}>
            <Card key={movie.id} data={movie} />
          </Link>
        ))}
        <div className="switch">
          <button
            type="button"
            className="switchButton"
            onClick={() => {
              if (count > 1) setCount(count - 1);
            }}
          >
            Preview
          </button>
          <button
            type="button"
            className="switchButton"
            onClick={() => setCount(count + 1)}
          >
            Next
          </button>
        </div>
      </SResultsWeekly>
    )
  );
}
