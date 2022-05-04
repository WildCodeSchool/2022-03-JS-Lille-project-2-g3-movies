import { useState } from "react";
import { Link } from "react-router-dom";
import SQuestionSug from "./style";
import smileys from "../../assets/datasuggest";

export default function QuestionSug() {
  const [querySent] = useState("");
  const [formData, setFormData] = useState({
    selectedInput: true,
    key: "",
  });

  const handleChoiceLinks = (evt) => {
    evt.target.classList.toggle("selected");
    const key = evt.target.name;
    const { value } = evt.target;
    setFormData({ ...formData, [key]: value });
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
                checked={formData.selectedInput}
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
                checked={formData.selectedInput}
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
                checked={formData.selectedInput}
              />
            ))}
        </section>
      </div>
      <div className="buttonResults">
        <Link to={`/suggestion/results?${querySent}`}>
          <button type="button" className="button">
            Show your result
          </button>
        </Link>
      </div>
    </SQuestionSug>
  );
}
