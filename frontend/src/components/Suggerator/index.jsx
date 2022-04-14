import { Link } from "react-router-dom";
import SSuggerator from "./style";

export default function Suggerator() {
  return (
    <SSuggerator>
      <h2>Suggest me some movies</h2>
      <p>You need ideas ? </p>
      <Link to="/suggestion">
        <p className="button"> Suggerator</p>
      </Link>
    </SSuggerator>
  );
}
