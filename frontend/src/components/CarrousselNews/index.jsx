import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

function CarrousselNews() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=923a42c07dc9afdc9a05b46fb2fd558b&language=en-US`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, []);

  return (
    moviesData.length > 0 && ( // fixed autoplay malfunction
      <Carousel
        autoPlay
        interval={3000}
        transitionTime={1000}
        showThumbs={false}
        swipable
        infiniteLoop
        showStatus={false}
      >
        {moviesData.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        ))}
      </Carousel>
    )
  );
}

export default CarrousselNews;
