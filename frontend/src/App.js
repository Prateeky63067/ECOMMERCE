import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
     <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
