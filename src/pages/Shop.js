import React from "react";
import "../styles/shop.css";
import { productsData } from "../productsData";
import Product from "../components/Product";
import ShoppingBag from "../images/shopping-bag.jpg";
import "../styles/viewItems.css";

const Shop = () => {
  const [addItem, setAddItem] = React.useState(0);

  // below function is passed to Product.js Component
  const handleAddToCartBtn = () => {
    setAddItem((prevItem) => prevItem + 1);
  };

  const viewItems = () => {
    const hideContainer = document.querySelector(
      ".hide-shopping-cart-container"
    );

    hideContainer.classList.add("view-shopping-cart-container");
    hideContainer.classList.remove("hide-shopping-cart-container");
  };

  const hideItems = () => {
    const viewContainer = document.querySelector(
      ".view-shopping-cart-container"
    );

    viewContainer.classList.add("hide-shopping-cart-container");
    viewContainer.classList.remove("view-shopping-cart-container");
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
          <img
            className="shopping-cart"
            src={ShoppingBag}
            alt="shopping bag"
            onClick={viewItems}
          />
          <div className="items-count">{addItem}</div>
        </div>

        <div className="hide-shopping-cart-container">
          <div className="items-container">
            <div className="wrapper">
              <h2 className="title">Your Shopping Cart</h2>
              <div className="selected-items-container">
                here should have any item when press add to cart btn
              </div>
              <div className="items-details-container">
                <p className="items-number">No. of Items: {addItem}</p>
                <p className="total-amount">Total amount: $100</p>
              </div>
              <div className="buttons-container">
                <button className="back-btn" onClick={hideItems}>
                  Back to Shopping
                </button>
                <button className="proceed-btn">Procedd to Payment</button>
              </div>
            </div>
          </div>
        </div>

        <section className="products">{products}</section>
      </main>
    </div>
  );
};

export default Shop;
