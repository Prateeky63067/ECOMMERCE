import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
     <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
