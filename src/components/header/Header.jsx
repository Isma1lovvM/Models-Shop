import "./header.css";

import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import cartBtn from "../../assets/cartBtn.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="navBox">
          <nav className="navbar">
            <div className="container">
              <div className="containerTexts">
                <div className="logoElBox">
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className="bar"
                    aria-label="Open menu"
                  >
                    <FaBars />
                  </button>

                  <NavLink to="/">
                    <h1 className="logoText">
                      Khaem Modelverse<span className="gray">.</span>
                    </h1>
                  </NavLink>
                </div>

                <ul className={`navList ${isMenuOpen ? "menuActive" : ""}`}>
                  <div className="barListBox">
                    <h3>3legant</h3>
                    <button
                      className="closeMenuBtn"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <IoCloseOutline />
                    </button>
                  </div>

                  {[
                    { path: "/", name: "Home" },
                    { path: "/shop", name: "Shop" },
                    { path: "/contact", name: "Contact Us" },
                  ].map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "active" : "navLink"
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <ul className="navIconsList">
                  <RiSearchLine className="icon" aria-label="Search" />
                  <CgProfile className="icon" aria-label="Profile" />
                  <img
                    className="icon"
                    src={cartBtn}
                    alt="cart button"
                    aria-label="Cart button"
                  />
                </ul>

                {isMenuOpen && (
                  <div
                    className="overlay"
                    onClick={() => setIsMenuOpen(false)}
                  ></div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
