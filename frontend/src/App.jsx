import TypeCarroussel from "@components/TypeCarroussel";
import Suggerator from "@components/Suggerator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarrousselNews from "./components/CarrousselNews";

import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <Header />
      <CarrousselNews />
      <TypeCarroussel />
      <Suggerator />
      <Footer />
    </SGlobal>
  );
}

export default App;
