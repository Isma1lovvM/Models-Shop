import { useEffect, useState } from "react";
import "./singlePage.css";
import { useParams } from "react-router-dom";
import { Skeleton, Space } from "antd";
import { getProductById } from "../../api/cardsApi"; // to'g'ri yo'lni tekshir

function SinglePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      const product = await getProductById(id);
      if (product) {
        setData(product);
        setMainImg(product.image[0]); // image array bo'lsa
      }
      setLoading(false);
    }
    loadProduct();
  }, [id]);

  return (
    <section className="section">
      <div className="container">
        <div className="productContainer">
          <div className="productCenter">
            {/* Left image */}
            <div className="leftContainer">
              <div className="productLeft">
                {loading ? (
                  <Skeleton.Image style={{ width: 400, height: 450 }} active />
                ) : (
                  <img
                    className="productLeftImg"
                    src={mainImg}
                    alt="Main product"
                  />
                )}
              </div>
            </div>

            {/* Right content */}
            <div className="productRightContainer">
              <div className="productRight">
                {loading ? (
                  <Space direction="vertical" size={12}>
                    <Skeleton.Input style={{ width: 300 }} active />
                    <Skeleton.Input style={{ width: 550 }} active />
                    <Skeleton.Input style={{ width: 250 }} active />
                    <Skeleton.Input style={{ width: 250 }} active />
                  </Space>
                ) : (
                  <>
                    <h2>{data?.name}</h2>
                    <p className="descD">{data?.description}</p>
                    <p className="pt">{data?.age} age</p>
                    <span>
                      <p className="wn">{data?.price}</p>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
