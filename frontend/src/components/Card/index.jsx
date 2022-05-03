import PropTypes from "prop-types";
import SCard from "./style";

export default function Card({ data: { posterPath } }) {
  return (
    <SCard>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt="" />
    </SCard>
  );
}

Card.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
