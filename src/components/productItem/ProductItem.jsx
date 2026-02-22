import "./productItem.css";

import like from "../../assets/like.svg";
import { NavLink } from "react-router-dom";

function ProductItem({ id, image, price, title, index }) {
  const animations = [
    "flip-left",
    "flip-left",
    "flip-right",
    "flip-right",
    "fade-right",
    "fade-right",
    "fade-left",
    "fade-left",
    "fade-up-right",
    "fade-up-right",
    "fade-up-left",
    "fade-up-left",
  ];
  const chosenAnimation = animations[index % animations.length];

  return (
    <>
      <div className="swiperBoxCart" data-aos={chosenAnimation}>
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
