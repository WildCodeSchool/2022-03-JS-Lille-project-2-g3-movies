import { useParams } from "react-router-dom";
import SResultsCategory from "./style";

export default function ResultsCategory() {
  const { category } = useParams();
  return (
    <SResultsCategory>
      <h2>Results</h2>
      <p>your choise is {category}</p>
    </SResultsCategory>
  );
}
