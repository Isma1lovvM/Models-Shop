import "./header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import cartBtn from "../../assets/wishlist.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/contact", name: "Contact Us" },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="containerTexts">
          {/* Logo */}
          <div className="logoElBox">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <h1 className="logoText">
                Khaem Modelverse<span className="gray">.</span>
              </h1>
            </NavLink>
          </div>

          {/* Desktop links */}
          <ul className={`navList ${isMenuOpen ? "menuActive" : ""}`}>
            <div className="barListBox">
              <h3>Menu</h3>
              <button
                className="closeMenuBtn"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <IoCloseOutline />
              </button>
            </div>

            {navLinks.map(({ path, name }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active" : "navLink"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <ul className="navIconsList">
            <RiSearchLine className="icon" aria-label="Search" />
            <CgProfile className="icon" aria-label="Profile" />
            <img
              className="icon"
              src={cartBtn}
              alt="cart button"
              aria-label="Cart button"
            />
            <button
              className="bar"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
  );
}

export default Header;
