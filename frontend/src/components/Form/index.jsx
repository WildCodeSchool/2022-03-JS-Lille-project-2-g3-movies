import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardForm from "../CardForm";
import SForm from "./style";

function Form() {
  const [moviesData, setMoviesData] = useState([]);
  const [sortGoodBad, setSortGoodBad] = useState(null);

  const { textEntered } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${textEntered}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [textEntered]);

  return (
    <SForm>
      <div className="form-component">
        <div className="form-container">
          <div className="btn-sort-container">
            <button
              type="button"
              className="btn-sort goodToBad"
              onClick={() => setSortGoodBad("goodToBad")}
            >
              Top<span>➜</span>
            </button>
            <button
              type="button"
              className="btn-sort badToGood"
              onClick={() => setSortGoodBad("badToGood")}
            >
              Flop<span>➜</span>
            </button>
          </div>
        </div>
        <div className="result">
          {moviesData
            .slice(0, 12)
            .sort((a, b) => {
              if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
              }
              if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average;
              }
              return null;
            })
            .map((movie) => (
              <CardForm key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </SForm>
  );
}

export default Form;
