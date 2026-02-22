import { useState } from "react";
import "./shop.css";
import Products from "../../components/products/Products";

function Shop({ defaultVisible = 12 }) {
  const [visibleCount, setVisibleCount] = useState(defaultVisible);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <>
      <div className="container">
        <div className="shopBox">
          <h2 className="shopPage">Shop Page</h2>
          <p className="miniShopPage">
            Browse our collection and choose the model you truly love.
          </p>
        </div>
        <Products visibleCount={visibleCount} onShowMore={handleShowMore} />
      </div>
    </>
  );
}

export default Shop;
