import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import Slide from "../Slide";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

function CarrousselNews() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=923a42c07dc9afdc9a05b46fb2fd558b`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, []);

  return (
    <Carousel>
      {moviesData.map((movie) => (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />
      ))}
    </Carousel>
  );
}

export default CarrousselNews;
