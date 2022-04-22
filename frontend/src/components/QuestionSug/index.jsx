import SQuestionSug from "./style";

export default function QuestionSug() {
  return (
    <SQuestionSug>
      <div>
        <h1> Suggestion </h1>
        <h2> Which film do you recommend me ?</h2>
        <h3> Whats your vibes ?</h3>
        <section className="smileyImg">
          <img src="src/assets/angry.png" alt="smiley angry" />
          <img src="src/assets/sad.png" alt="smiley sad" />
          <img src="src/assets/smiley.png" alt="smiley happy" />
          <img src="src/assets/thinking.png" alt="smiley thinking" />
        </section>

        <h3> Whats your movie style ?</h3>
        <section className="smileyImg">
          <img src="src/assets/old.png" alt="80's" />
          <img src="src/assets/young.png" alt="2000's" />
          <img src="src/assets/baby.png" alt="actual" />
        </section>

        <h3>Quel est ton état ? </h3>
        <section className="smileyImg">
          <img src="src/assets/low-energy.png" alt="under 1h30" />
          <img src="src/assets/energy.png" alt="plus 1h30" />
        </section>
      </div>
    </SQuestionSug>
  );
}
