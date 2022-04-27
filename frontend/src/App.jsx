import { Routes, Route } from "react-router-dom";
import ResultsCategory from "@components/ResultsCategory";
import SuggestionResultPage from "@pages/SuggestionResultPage";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Suggestion from "./pages/Suggestion";
import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/results/:category" element={<ResultsCategory />} />
        <Route path="/suggestion/results" element={<SuggestionResultPage />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}
export default App;
