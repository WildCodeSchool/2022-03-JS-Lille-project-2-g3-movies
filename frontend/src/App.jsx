import { Routes, Route } from "react-router-dom";
import SugResult from "./components/SugResult";
import FilmDetails from "./components/FilmDetails";
import UserList from "./components/UserList";
import ResultsWeekly from "./components/ResultsWeekly";
import ResultsCategory from "./components/ResultsCategory";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Suggestion from "./pages/Suggestion";
import SGlobal from "./style";
import Form from "./components/Form";

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
        <Route path="/searchresult/:textEntered" element={<Form />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/detail/:id" element={<FilmDetails />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}
export default App;
