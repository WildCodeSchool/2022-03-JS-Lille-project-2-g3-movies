import imgCrime from "./crime.jpg";
import imgAction from "./action.jpg";
import imgComedy from "./comedy.jpg";
import imgDocumentary from "./documentary.jpg";
import imgDrama from "./drama.jpg";
import imgFamily from "./family.jpg";
import imgFantasy from "./fantasy.jpg";
import imgHorror from "./horror.jpg";
import imgRomance from "./romance.jpg";
import imgSciFi from "./sciFi.jpg";
import imgWestern from "./western.jpg";

export default [
  {
    key: "action",
    picture: imgAction,
    alt: "Link to action movies",
    request: "with_genres=28",
  },
  {
    key: "comedy",
    picture: imgComedy,
    alt: "Link to comedy movies",
    request: "with_genres=35",
  },
  {
    key: "crime",
    picture: imgCrime,
    alt: "Link to crime movies",
    request: "with_genres=80",
  },
  {
    key: "documentary",
    picture: imgDocumentary,
    alt: "Link to documentary movies",
    request: "with_genres=99",
  },
  {
    key: "drama",
    picture: imgDrama,
    alt: "Link to drama movies",
    request: "with_genres=18",
  },
  {
    key: "family",
    picture: imgFamily,
    alt: "Link to family movies",
    request: "with_genres=10751",
  },
  {
    key: "fantasy",
    picture: imgFantasy,
    alt: "Link to fantasy movies",
    request: "with_genres=14",
  },
  {
    key: "horror",
    picture: imgHorror,
    alt: "Link to horror movies",
    request: "with_genres=27",
  },
  {
    key: "romance",
    picture: imgRomance,
    alt: "Link to romance movies",
    request: "with_genres=10749",
  },
  {
    key: "sciFi",
    picture: imgSciFi,
    alt: "Link to Sci-Fi movies",
    request: "with_genres=878",
  },
  {
    key: "western",
    picture: imgWestern,
    alt: "Link to western movies",
    request: "with_genres=37",
  },
];
