import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton, Space } from "antd";
import { getProductById } from "../../api/cardsApi";
import "./singlePage.css";

function SinglePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      try {
        const product = await getProductById(id);
        if (product) {
          setData(product);
          if (Array.isArray(product.image) && product.image.length > 0) {
            setMainImg(product.image[0]);
          } else if (typeof product.image === "string") {
            setMainImg(product.image);
          }
        }
      } catch (err) {
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  return (
    <main>
      <div className="container">
        <div className="productCenter">
          {/* Left: Image */}
          <div className="leftContainer">
            <div className="productLeft">
              {loading ? (
                <Skeleton.Image style={{ width: 600, height: 450 }} active />
              ) : (
                <img
                  className="productLeftImg"
                  src={mainImg}
                  alt={data?.name || "Product image"}
                />
              )}
            </div>
          </div>

          {/* Right: Product details */}
          <div className="productRightContainer">
            <div className="productRight">
              {loading ? (
                <Space direction="vertical" size={12}>
                  <Skeleton.Input style={{ width: "70%" }} active />
                  <Skeleton.Input style={{ width: 600, height: 150 }} active />
                  <Skeleton.Input style={{ width: "50%" }} active />
                  <Skeleton.Input style={{ width: "50%" }} active />
                </Space>
              ) : (
                <>
                  <h2>{data?.name}</h2>
                  <p className="descD">{data?.description}</p>
                  <p className="pt">{data?.age} age</p>
                  <span>
                    <p className="wn">${data?.price}</p>
                    {data?.oldPrice && <p className="nw">${data.oldPrice}</p>}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SinglePage;
