import { useState } from "react";
import { Link } from "react-router-dom";
import SQuestionSug from "./style";
import smileys from "../../assets/datasuggest";

export default function QuestionSug() {
  const [querySent, setQuerySent] = useState("");
  const [selectedButton] = useState({
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
  const handleChoiceLinks = (evt, sq) => {
    evt.target.classList.toggle("selected");

    setQuerySent(`${querySent}${sq}`); // adding smiley.query at the end of the query
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
              <button
                key={smiley.key}
                type="button"
                onClick={(event) => {
                  handleChoiceLinks(event, smiley.query);
                }}
              >
                <img
                  src={smiley.picture}
                  alt={smiley.alt}
                  className={`Img ${
                    selectedButton[smiley.key] ? "selected" : ""
                  } `}
                />
              </button>
            ))}
        </section>
        <h3> What is your movie style ?</h3>
        <section className="smileyImg">
          {smileys
            .filter((smiley) => smiley.type.includes("dateRelease"))
            .map((smiley) => (
              <button
                key={smiley.key}
                type="button"
                onClick={(event) => {
                  handleChoiceLinks(
                    event,

                    smiley.query
                  );
                }}
                className="Img"
              >
                <img
                  src={smiley.picture}
                  alt={smiley.alt}
                  className={`Img ${
                    selectedButton[smiley.key] ? "selected" : ""
                  } `}
                />
              </button>
            ))}
        </section>
        <h3> What is your condition ?</h3>
        <section className="smileyImg">
          {smileys
            .filter((smiley) => smiley.type.includes("runtime"))
            .map((smiley) => (
              <button
                key={smiley.key}
                type="button"
                onClick={(event) => {
                  handleChoiceLinks(event, smiley.query);
                }}
                className="Img"
              >
                <img
                  src={smiley.picture}
                  alt={smiley.alt}
                  className={`Img ${
                    selectedButton[smiley.key] ? "selected" : ""
                  } `}
                />
              </button>
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
