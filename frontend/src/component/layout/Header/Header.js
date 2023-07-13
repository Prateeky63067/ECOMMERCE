import React,{useState} from "react";
import "./Header.css";
import { Icon } from "@iconify/react";
import cartIcon from "@iconify/icons-bx/cart";
import searchIcon from "@iconify/icons-bx/search";
import userIcon from "@iconify/icons-bxs/user";
import { Link } from "react-router-dom";
import Search from "../../Product/Search";
import { useHistory } from "react-router-dom";
const Header = () => {
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
    <>
      <div >
        <div className="overlay  " />

        <nav
          className="navbar navbar-expand-md navbar-light bg-light main-menu"
          style={{ boxShadow: "none", paddingBottom: 0 }}
        >
          <div className="container ">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-link d-block d-md-none"
            >
              <i className="bx bx-menu icon-single" />
            </button>
            <Link className="navbar-brand" to="/">
              <img className="imglogo" src="./shubhlogo.png" alt="" />
            </Link>
            <ul className="navbar-nav ml-auto d-block d-md-none">
              <li className="nav-item">
                <Link className="btn btn-link" to="#">
                  <i class="fa-solid fa-cart-shopping"></i>{" "}
                  <span className="badge badge-danger">3</span>
                </Link>
              </li>
            </ul>
            <div className="collapse navbar-collapse">
         

             <form className="form-inline my-2 my-lg-0 mx-auto d-flex" onSubmit={searchSubmitHandler}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for products..."
                  aria-label="Search"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <input className="Searchbtn" type="submit" value="Search" />
              </form>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="btn btn-link" to="/cart">
                    <Icon
                      icon={cartIcon}
                      color="green"
                      width="35"
                      height="35"
                      hFlip={true}
                    />
                    <span className="badge badge-danger">3</span>
                  </Link>
                </li>
                <li className="nav-item ml-md-3">
                  <Link className="btn btn-primary" to="/login">
                    <Icon
                      icon={userIcon}
                      color="white"
                      width="24"
                      height="24"
                      hFlip={true}
                    />{" "}
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="  navbar navbar-expand-md navbar-light bg-light sub-menu">
          <div className="container ">
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link className="nav-link" to="/">
                    Home 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Support
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="#">Delivery Information</Link>
              <Link className="dropdown-item" href="#">Privacy Policy</Link>
              <Link className="dropdown-item" href="#">Terms &amp; Conditions</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Contact</Link>
          </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className="search-bar d-block d-md-none">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form className="form-inline mb-3 mx-auto">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search for products..."
                    aria-label="Search"
                  />
                  <button className="btn btn-success" type="submit">
                    <i className="bx bx-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <nav id="sidebar">
          <div className="sidebar-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-10 pl-0">
                  <Link className="btn btn-primary" href="#">
                    <i className="bx bxs-user-circle mr-1" /> Log In
                  </Link>
                </div>
                <div className="col-2 text-left">
                  <button
                    type="button"
                    id="sidebarCollapseX"
                    className="btn btn-link"
                  >
                    <i className="bx bx-x icon-single" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-unstyled components links">
            <li className="active">
              <Link href="#">
                <i className="bx bx-home mr-3" /> Home
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="bx bx-carousel mr-3" /> Products
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="bx bx-book-open mr-3" /> Schools
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="bx bx-crown mr-3" /> Publishers
              </Link>
            </li>
            <li>
              <Link
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="bx bx-help-circle mr-3" />
                Support
              </Link>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <Link href="#">Delivery Information</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">
                <i className="bx bx-phone mr-3" /> Contact
              </Link>
            </li>
          </ul>
          <h6 className="text-uppercase mb-1">Categories</h6>
          <ul className="list-unstyled components mb-3">
            <li>
              <Link href="#">Category 1</Link>
            </li>
            <li>
              <Link href="#">Category 1</Link>
            </li>
            <li>
              <Link href="#">Category 1</Link>
            </li>
            <li>
              <Link href="#">Category 1</Link>
            </li>
            <li>
              <Link href="#">Category 1</Link>
            </li>
            <li>
              <Link href="#">Category 1</Link>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <Link href="#" target="_blank" title>
                <i className="bx bxl-facebook-square" />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" title>
                <i className="bx bxl-twitter" />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" title>
                <i className="bx bxl-linkedin" />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" title>
                <i className="bx bxl-instagram" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <i class="fa-solid fa-cart-shopping"></i>
    </>
  );
};

export default Header;
