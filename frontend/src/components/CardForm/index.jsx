import React from "react";
import propTypes from "prop-types";
import { useState } from "react/cjs/react.development";
import SCardForm from "./style";

function CardForm({ movie }) {
  const addStorage = () => {
    const storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      localStorage.setItem("movies", storedData);
    }
  };

  const deleteStorage = () => {
    const storedData = window.localStorage.movies.split(",");
    const newData = storedData
      .filter((id) => Number(id) !== movie.id)
      .join(",");

    localStorage.setItem("movies", newData);
  };

  const [isActive, setIsActive] = useState(false);
  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <SCardForm>
      <div className="card">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "./img/poster.jpg"
          }
          alt="affiche film"
        />
        <button
          type="button"
          className="btn"
          onClick={() => {
            if (isActive === false) {
              addStorage();
            } else {
              deleteStorage();
            }
            handleIsActive();
          }}
        >
          <img
            className="favorite"
            src={isActive ? "src/assets/love.png" : "src/assets/liket.png"}
            alt=""
          />
        </button>
      </div>
    </SCardForm>
  );
}

CardForm.propTypes = {
  movie: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  poster_path: propTypes.string.isRequired,
};
export default CardForm;
