import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Search from "./component/Product/Search.js"
import Products from './component/Product/Products.js'
import LoginSignUp from "./component/User/LoginSignUp";

function App() {
  return (
    <>
    <Router>
     <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:keyword' element={<Products/>}/>
      <Route path='/login' element={<LoginSignUp/>}/>
      {/* <Route path='/search' element={<Search/>}/> */}
      
      
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
