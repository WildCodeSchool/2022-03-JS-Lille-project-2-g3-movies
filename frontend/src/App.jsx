import TypeCarroussel from "./components/TypeCarroussel";
import Suggerator from "./components/Suggerator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarrousselNews from "./components/CarrousselNews";

import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <CarrousselNews />
      <div className="rollover">
        <Header />
        <TypeCarroussel />
        <Suggerator />
        <Footer />
      </div>
    </SGlobal>
  );
}

export default App;
