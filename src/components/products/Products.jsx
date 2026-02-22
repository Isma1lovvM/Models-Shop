import "./products.css";

import { useState, useEffect } from "react";
import { getProducts } from "../../api/cardsApi";
import ProductItem from "../ProductItem/ProductItem"; // to‘g‘ri yo‘lni tekshir

function Products({ visibleCount, onShowMore }) {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const data = await getProducts();
        setProductsData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  const visibleProducts = productsData.slice(0, visibleCount);
  const canShowMore = onShowMore && visibleCount < productsData.length;

  return (
    <div className="container">
      <div className={`swiperBox ${canShowMore ? "" : "mb"}`}>
        {visibleProducts.map((product, index) => (
          <ProductItem
            key={product.id}
            title={product.name}
            price={product.price}
            id={product.id}
            image={product.image}
            index={index}
          />
        ))}
        {canShowMore && (
          <button className="shopPageBtn" onClick={onShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Products;
