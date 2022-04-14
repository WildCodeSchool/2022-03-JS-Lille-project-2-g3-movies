import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CarrousselNews from "./components/CarrousselNews";
import Suggestion from "./pages/Suggestion";
import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <div className="rollover">
        <Header />
          <CarrousselNews />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suggestion" element={<Suggestion />} />
        </Routes>
        <Footer />
      </div>
    </SGlobal>
  );
}
export default App;
