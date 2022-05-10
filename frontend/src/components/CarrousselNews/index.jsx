import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import SCarousel from "./style";

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
      <SCarousel>
        <Carousel
          autoPlay
          interval={2800}
          transitionTime={1000}
          showThumbs={false}
          swipable
          infiniteLoop
          showStatus={false}
        >
          {moviesData.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="poster movie"
            />
          ))}
        </Carousel>
      </SCarousel>
    )
  );
}
export default CarrousselNews;
