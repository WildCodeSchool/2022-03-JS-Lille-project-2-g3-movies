import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Suggestion from "./pages/Suggestion";
import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggestion" element={<Suggestion />} />
      </Routes>
      <Header />
      <Footer />
    </SGlobal>
  );
}
export default App;
