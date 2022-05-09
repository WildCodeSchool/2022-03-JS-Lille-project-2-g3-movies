import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SSugResult from "./style";
import CardForm from "../CardForm";

export default function SugResult() {
  const [searchParams] = useSearchParams();
  const [moviesData, setMoviesData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const request = searchParams.toString();
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=923a42c07dc9afdc9a05b46fb2fd558b&page=${count}&${request}`
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
    <SSugResult>
      <h2>Our suggestion for you</h2>
      <div className="list">
        {moviesData.map((movie) => (
          <CardForm key={movie.id} movie={movie} />
        ))}
      </div>
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
    </SSugResult>
  );
}
