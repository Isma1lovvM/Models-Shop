import "./cardsModels.css";
import Products from "../../components/products/Products";

import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function CardsModels() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="topBox">
            <h2 className="topText">Models</h2>

            <button className="topBtn">
              <NavLink to={"/shop"}>
                More Models <FaArrowRight />
              </NavLink>
            </button>
          </div>

          <Products visibleCount={12} />
        </div>
      </section>
    </>
  );
}

export default CardsModels;
