import React, { useState } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import SCardForm from "./style";
import liket from "../../assets/liket.png";
import love from "../../assets/love.png";

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
        <Link to={`/detail/${movie.id}`}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "./img/poster.jpg"
            }
            alt="affiche film"
          />
        </Link>

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
          <img className="favorite" src={isActive ? love : liket} alt="" />
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
