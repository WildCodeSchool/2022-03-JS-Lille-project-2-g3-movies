import { Routes, Route } from "react-router-dom";
import ResultsWeekly from "@components/ResultsWeekly";

import SearchPage from "./pages/SearchPage";

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
        <Route path="/weeklyupcoming" element={<ResultsWeekly />} />
        <Route path="/searchresult" element={<SearchPage />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}
export default App;
