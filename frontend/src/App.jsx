import { Routes, Route } from "react-router-dom";
import SugResult from "@components/SugResult";
import ResultsWeekly from "@components/ResultsWeekly";
import ResultsCategory from "./components/ResultsCategory";
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
        <Route path="/suggestion/results" element={<SugResult />} />
        <Route path="/weeklyupcoming" element={<ResultsWeekly />} />

      </Routes>
      <Footer />
    </SGlobal>
  );
}
export default App;
