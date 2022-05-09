import { useState } from "react";
import SQuestionSug from "./style";
import smileys from "../../assets/datasuggest";

export default function QuestionSug() {
  const [choiceLinks, setChoiceLinks] = useState(false);
  const handleChoiceLinks = () => {
    setChoiceLinks(!choiceLinks);
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
        </div>
      </div>
    </SQuestionSug>
  );
}
