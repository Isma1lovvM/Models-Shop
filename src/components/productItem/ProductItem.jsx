import "./productItem.css";

import like from "../../assets/like.svg";
import { NavLink } from "react-router-dom";

function ProductItem({ id, image, price, title, index }) {
  return (
    <>
      <div className="swiperBoxCart" data-aos="flip-left">
        <NavLink style={{ width: "100%" }} to={`/singlePage/${id}`}>
          <div className="swiperCart">
            <div className="flex">
              <img className="like" src={like} alt="" />
            </div>

            <img className="hehe" src={image[0]} alt="" />
            <button className="hoverBtn">Add to Cart</button>
          </div>
          <div className="swiperText">
            <h3 className="title">{title}</h3>
            <p className="swiperSpan">
              <span className="title">{price}</span>
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default ProductItem;
