import React from "react";
import "../styles/shop.css";
import { productsData } from "../productsData";
import Product from "../components/Product";
import ShoppingBag from "../images/shopping-bag.jpg";

const Shop = () => {
  const [addItem, setAddItem] = React.useState(0);

  const handleAddToCartBtn = () => {
    setAddItem((prevItem) => prevItem + 1);
  };

  const products = productsData.map((item) => {
    return (
      <Product
        key={item.id}
        item={item}
        handleAddToCartBtn={handleAddToCartBtn}
      />
    );
  });

  return (
    <div>
      <main className="main">
        <div className="shopping-cart-container">
          <img className="shopping-cart" src={ShoppingBag} alt="shopping bag" />
          <div className="items-count">{addItem}</div>
        </div>
        <section className="products">{products}</section>
      </main>
    </div>
  );
};

export default Shop;
