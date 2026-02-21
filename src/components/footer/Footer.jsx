import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  const footerLinks = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footerTop">
            <div className="footerLogos">
              <NavLink to="/" className="black">
                <h1 className="footerLogo">
                  3legant<span className="gray">.</span>
                </h1>
              </NavLink>
              <span>Gift & Decoration Store</span>
            </div>

            <ul className="footerList">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "activee" : "navLink"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footerBottom">
            <div className="footerBottomLeft">
              <p className="spann">© 2025 3legant. All rights reserved</p>
              <p to="/privacy-policy">Privacy Policy</p>
              <p to="/terms">Terms of Use</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
