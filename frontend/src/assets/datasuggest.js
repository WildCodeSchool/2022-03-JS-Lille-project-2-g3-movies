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
    query: "with_genres=35&with_genres=28& with_genres=16",
  },
  {
    key: "happy",
    type: "vibe",
    picture: imgHappy,
    alt: "smiley happy",
    query: "with_genres=10749&with_genres=16& with_genres=35",
  },
  {
    key: "thinking",
    type: "vibe",
    picture: imgThinking,
    alt: "smiley thinking",
    query: "with_genres=99&with_genres=36& with_genres=10752",
  },
  {
    key: "angry",
    type: "vibe",
    picture: imgAngry,
    alt: "smiley angry",
    query: "with_genres=80&with_genres=27& with_genres=9648&with_genres=53",
  },
  {
    key: "old",
    type: "dateRelease",
    picture: imgOld,
    alt: "old",
    query: "release_date.lte=1990-01-01",
  },
  {
    key: "young",
    type: "dateRelease",
    picture: imgYoung,
    alt: "young",
    query: "release_date.lte=2010-01-01&release_date.gte=1990-01-01",
  },
  {
    key: "baby",
    type: "dateRelease",
    picture: imgBaby,
    alt: "baby",
    query: "release_date.gte=2010-01-01&release_date=2010-01-01",
  },
  {
    key: "lowEnergy",
    type: "runtime",
    picture: imgLowEnergy,
    alt: "Energy low",
    query: "with_runtime.lte=90&sort_by=primary_release_date.desc7",
  },
  {
    key: "energy",
    type: "runtime",
    picture: imgEnergy,
    alt: "Energy",
    query: "with_runtime.gte=90&sort_by=primary_release_date.desc",
  },
];
