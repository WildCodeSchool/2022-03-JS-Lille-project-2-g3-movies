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
          <h3> Whats your vibes ?</h3>
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
          <h3> Whats your movie style ?</h3>
          <section className="smileyImg">
            <button type="button" className="Img" onClick={handleChoiceLinks}>
              <img src="src/assets/old.png" alt="80's" />
            </button>
            <button type="button" className="Img" onClick={handleChoiceLinks}>
              <img src="src/assets/young.png" alt="2000's" />
            </button>
            <button type="button" className="Img" onClick={handleChoiceLinks}>
              <img src="src/assets/baby.png" alt="actual" />
            </button>
          </section>
          <h3>Whats your condition?</h3>
          <section className="smileyImg">
            <button type="button" className="Img" onClick={handleChoiceLinks}>
              <img src="src/assets/low-energy.png" alt="under 1h30" />
            </button>
            <button type="button" className="Img" onClick={handleChoiceLinks}>
              <img className="" src="src/assets/energy.png" alt="plus 1h30" />
            </button>
          </section>
        </div>
        <button type="button" className="button">
          Show your result
        </button>
      </div>
    </SQuestionSug>
  );
}
