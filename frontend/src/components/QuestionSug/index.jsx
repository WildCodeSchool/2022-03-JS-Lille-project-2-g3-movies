import QuestSugComp from "@components/QuestSugComp";
import SQuestionSug from "./style";
import smileys from "../../assets/datasuggest";

function QuestionSug() {
  return (
    <SQuestionSug>
      <div>
        <h1> Suggestion </h1>
        <h2> Which film do you recommend me ?</h2>
        <h3> Whats your vibe ?</h3>
        <section className="smileyImg">
          {smileys
            .filter((smiley) => smiley.type.includes("vibe"))
            .map((smiley) => (
              <QuestSugComp
                key={smiley.key}
                picture={smiley.picture}
                alt={smiley.alt}
              />
            ))}
        </section>
        <h3> Whats your favorite period ?</h3>
        <section className="smileyImg">
          {smileys
            .filter((smiley) => smiley.type.includes("dateRelease"))
            .map((smiley) => (
              <QuestSugComp picture={smiley.picture} alt={smiley.alt} />
            ))}
        </section>
        <h3> Whats your energy ?</h3>
        <section className="smileyImg">
          {smileys
            .filter((smiley) => smiley.type.includes("runtime"))
            .map((smiley) => (
              <QuestSugComp
                picture={smiley.picture}
                alt={smiley.alt}
                query={smiley.query}
              />
            ))}
        </section>
      </div>
      <div className="buttonResults">
        <button type="button" className="button">
          Show your result
        </button>
      </div>
    </SQuestionSug>
  );
}

export default QuestionSug;
