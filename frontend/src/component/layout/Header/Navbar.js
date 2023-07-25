import React,{useState} from "react";
import "./Navbar.css";
import cartIcon from "@iconify/icons-bx/cart";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand" to="/">
          <img className="imglogo" src="./logoB.jpg" alt="" />
        </Link>
        <button
          className="navbar-toggler btn-sm mr-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show" to="/about">
                About
              </Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show" to="/login">
                Log In
              </Link>
            </li>
            <li className="nav-item">
            <Link className="btn btn-link" data-toggle="collapse" data-target=".navbar-collapse.show"  to="/cart">
                    <Icon
                      icon={cartIcon}
                      color="green"
                      width="35"
                      height="35"
                      hFlip={true}
                    />
                    {/* <span className="badge badge-danger">3</span> */}
                  </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex" onSubmit={searchSubmitHandler}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              data-toggle="collapse" data-target=".navbar-collapse.show"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
