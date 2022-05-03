import { Routes, Route } from "react-router-dom";
import ResultsCategory from "@components/ResultsCategory";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuestionSug from "./components/QuestionSug";
import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggestion" element={<QuestionSug />} />
        <Route path="/results/:category" element={<ResultsCategory />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}
export default App;
