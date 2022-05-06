import { Routes, Route } from "react-router-dom";
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
        <Route path="/weeklyupcoming" element={<ResultsWeekly />} />
        <Route path="/searchresult/:textEntered" element={<Form />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
      <Footer />
    </SGlobal>
  );
}
export default App;
