import imgSad from "./sad.png";
import imgHappy from "./happy.png";
import imgThinking from "./thinking.png";
import imgAngry from "./angry.png";
import imgOld from "./old.png";
import imgYoung from "./young.png";
import imgBaby from "./baby.png";
import imgLowEnergy from "./lowEnergy.png";
import imgEnergy from "./energy.png";

export default [
  {
    key: "sad",
    type: "vibe",
    picture: imgSad,
    alt: "smiley sad",
  },
  {
    key: "happy",
    type: "vibe",
    picture: imgHappy,
    alt: "smiley happy",
  },
  {
    key: "thinking",
    type: "vibe",
    picture: imgThinking,
    alt: "smiley thinking",
  },
  {
    key: "angry",
    type: "vibe",
    picture: imgAngry,
    alt: "smiley angry",
  },
  {
    key: "old",
    type: "dateRelease",
    picture: imgOld,
    alt: "old",
  },
  {
    key: "young",
    type: "dateRelease",
    picture: imgYoung,
    alt: "young",
  },
  {
    key: "baby",
    type: "dateRelease",
    picture: imgBaby,
    alt: "baby",
  },
  {
    key: "lowEnergy",
    type: "runtime",
    picture: imgLowEnergy,
    alt: "Energy low",
  },
  {
    key: "energy",
    type: "runtime",
    picture: imgEnergy,
    alt: "Energy",
  },
];
