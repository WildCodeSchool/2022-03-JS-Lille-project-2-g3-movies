import { useState } from "react";
import { Link } from "react-router-dom";
import SQuestionSug from "./style";
import smileys from "../../assets/datasuggest";

export default function QuestionSug() {
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
    const allTags = Object.keys(formData); // object.keys gets all keys of an object and puts it into an array
    const validTags = allTags.filter((keyForm) => formData[keyForm] === true);
    const subQueries = validTags.map((tag) => {
      const smiley = smileys.find((smi) => smi.key === tag);
      const subQuery = smiley.query;
      return subQuery;
    });
    const query = subQueries.join("&");
    setQuerySent(`/suggestion/results?${query}`);
    return querySent;
  };

  return (
    <SQuestionSug>
      <div>
        <h1> Suggestion </h1>
        <h2> Which film do you recommend me ?</h2>
        <h3> Whats your vibes ?</h3>
        <section className="smileyImg">
          {smileys
            .filter((smiley) => smiley.type.includes("vibe"))
            .map((smiley) => (
              <input
                name={smiley.key}
                type="image"
                src={smiley.picture}
                alt={smiley.alt}
                onClick={(event) => {
                  handleChoiceLinks(event);
                }}
              />
            ))}
        </section>
        <h3> What is your movie style ?</h3>
        <section className="smileyImg">
          {smileys
            .filter((smiley) => smiley.type.includes("dateRelease"))
            .map((smiley) => (
              <input
                name={smiley.key}
                type="image"
                src={smiley.picture}
                alt={smiley.alt}
                onClick={(event) => {
                  handleChoiceLinks(event);
                }}
              />
            ))}
        </section>
        <h3> What is your condition ?</h3>
        <section className="smileyImg">
          {smileys
            .filter((smiley) => smiley.type.includes("runtime"))
            .map((smiley) => (
              <input
                name={smiley.key}
                type="image"
                src={smiley.picture}
                alt={smiley.alt}
                onClick={(event) => {
                  handleChoiceLinks(event);
                }}
              />
            ))}
        </section>
      </div>
      <div className="buttonResults">
        <Link to={makeQuestSubmit}>
          <button type="button" className="button">
            Show your result
          </button>
        </Link>
      </div>
    </SQuestionSug>
  );
}
