import { useState } from "react";
import PropTypes from "prop-types";
import SQuestSugComp from "./style";

export default function QuestSugComp({ id, picture, alt }) {
  const [choiceLinks, setChoiceLinks] = useState(false);
  const handleChoiceLinks = () => {
    setChoiceLinks(!choiceLinks);
  };

  return (
    <SQuestSugComp>
      <div>
        <button
          key={id}
          type="button"
          onClick={handleChoiceLinks}
          className={`${choiceLinks ? "selected" : ""} `}
        >
          <img src={picture} alt={alt} />
        </button>
      </div>
    </SQuestSugComp>
  );
}

QuestSugComp.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  alt: PropTypes.string,
};
QuestSugComp.defaultProps = {
  id: PropTypes.string,
  picture: PropTypes.string,
  alt: PropTypes.string,
};
