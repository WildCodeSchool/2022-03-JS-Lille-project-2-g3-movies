import PropTypes from "prop-types";
import STeamItem from "./style";

export default function TeamItem({ name, picture, title, link }) {
  return (
    <STeamItem>
      <div className="item">
        <a href={link}>
          <h3>{name}</h3>
          <img src={picture} alt="linkedin portrait" />
        </a>
        <p>{title}</p>
      </div>
    </STeamItem>
  );
}
TeamItem.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

TeamItem.defaultProps = {
  name: "",
  picture: "",
  title: "",
  link: "",
};
