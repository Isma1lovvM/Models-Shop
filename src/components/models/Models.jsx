import "./models.css";

import cardImg from "../../assets/model.png";
import card2Img from "../../assets/modelR.jpg";
import card3Img from "../../assets/odam.png";

function Models() {
  return (
    <>
      <div className="container">
        <div className="imgsBox">
          <div data-aos={"flip-left"} className="cart1">
            <div className="btns">
              <h3>Jenny Lopez</h3>
            </div>
            <img className="big" src={cardImg} alt="" />
          </div>

          <div className="twiceImgsBox">
            <div
              data-aos={"zoom-in-left"}
              data-aos-duration="1200"
              className="cart2"
            >
              <div className="btns2">
                <h3>Emma Harlow</h3>
              </div>
              <img className="imgg" src={card2Img} alt="" />
            </div>

            <div data-aos={"zoom-in-left"} className="cart2">
              <div className="btns3">
                <h3>Mateo Stive</h3>
              </div>
              <img className="imgg2" src={card3Img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Models;
