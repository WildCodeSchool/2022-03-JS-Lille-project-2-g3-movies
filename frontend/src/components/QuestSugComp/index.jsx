import { useState } from "react";
import PropTypes from "prop-types";
import SQuestSugComp from "./style";

export default function QuestSugComp({ picture, alt }) {
  const [choiceLinks, setChoiceLinks] = useState(false);
  const handleChoiceLinks = () => {
    setChoiceLinks(!choiceLinks);
  };

  return (
    <SQuestSugComp>
      <div>
        <button
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
  picture: PropTypes.string,
  alt: PropTypes.string,
};
QuestSugComp.defaultProps = {
  picture: PropTypes.string,
  alt: PropTypes.string,
};
