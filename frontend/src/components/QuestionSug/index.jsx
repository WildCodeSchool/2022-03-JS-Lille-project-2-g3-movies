import { useState } from "react";
import { Link } from "react-router-dom";
import SQuestionSug from "./style";
import smileys from "../../assets/datasuggest";

export default function QuestionSug() {
  const [active, setActive] = useState(true);
  const [querySent, setQuerySent] = useState("");
  const [formData, setFormData] = useState({
    sad: false,
    happy: false,
    thinking: false,
    angry: false,
    old: false,
    young: false,
    baby: false,
    lowEnergy: false,
    energy: false,
  });

  const handleChoiceLinks = (evt) => {
    evt.target.classList.toggle("selected");
    const key = evt.target.name;
    setFormData({ ...formData, [key]: !formData[key] });
  };

  const makeQuestSubmit = () => {
    const allTags = Object.keys(formData); // Object.keys() gets all keys of an object and puts it into an array
    const validTags = allTags.filter((keyForm) => formData[keyForm] === true);
    const subQueries = validTags.map((tag) => {
      const smiley = smileys.find((smi) => smi.key === tag);
      const subQuery = smiley.query;
      return subQuery;
    });
    const query = subQueries.join("&");
    setQuerySent(query);
    setActive(!active);
  };

  return (
    <SQuestionSug>
      <div>
        <div className={`Img ${choiceLinks ? "borderSolid" : ""} `}>
          <h1> Suggestion </h1>
          <h2> Which film do you recommend me ?</h2>
          <h3> What is your vibes ?</h3>
          <section className="smileyImg">
            {smileys
              .filter((smiley) => smiley.type.includes("vibe"))
              .map((smiley) => (
                <button
                  type="button"
                  className="Img"
                  onClick={handleChoiceLinks}
                >
                  <img src={smiley.picture} alt={smiley.alt} />
                </button>
              ))}
          </section>
          <h3> How are you feeling ?</h3>
          <section className="smileyImg">
            {smileys
              .filter((smiley) => smiley.type.includes("dateRelease"))
              .map((smiley) => (
                <button
                  type="button"
                  className="Img"
                  onClick={handleChoiceLinks}
                >
                  <img src={smiley.picture} alt={smiley.alt} />
                </button>
              ))}
          </section>
          <h3> What is your condition ?</h3>
          <section className="smileyImg">
            {smileys
              .filter((smiley) => smiley.type.includes("runtime"))
              .map((smiley) => (
                <button
                  type="button"
                  className="Img"
                  onClick={handleChoiceLinks}
                >
                  <img src={smiley.picture} alt={smiley.alt} />
                </button>
              ))}
          </section>
        </div>
        <div className="buttonResults">
          <button type="button" className="button">
            Show your result
          </button>
        </Link>
      </div>
    </SQuestionSug>
  );
}
