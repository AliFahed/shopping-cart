import React from "react";
import "../styles/shop.css";
import { productsData } from "../productsData";
import Product from "../components/Product";
import ShoppingBag from "../images/shopping-bag.jpg";
import "../styles/viewItems.css";
import SelectedItems from "../components/SelectedItems";

const Shop = () => {
  const [addItem, setAddItem] = React.useState(0);

  const handleAddToCartBtn = () => {
    setAddItem((prevItem) => prevItem + 1);
  };

  const viewItemsContainer = () => {
    const hideContainer = document.querySelector(
      ".hide-shopping-cart-container"
    );

    hideContainer.classList.add("view-shopping-cart-container");
    hideContainer.classList.remove("hide-shopping-cart-container");
  };

  const hideItemsContainer = () => {
    const viewContainer = document.querySelector(
      ".view-shopping-cart-container"
    );

    viewContainer.classList.add("hide-shopping-cart-container");
    viewContainer.classList.remove("view-shopping-cart-container");
  };

  const [selectedItem, setSelectedItem] = React.useState([]);

  const viewSelectedItems = (item) => {
    selectedItem.push(item);
  };

  const shoppingCart = selectedItem.map((item) => {
    return <SelectedItems key={item.id} item={item} />;
  });

  const [totalAmount, setTotalAmount] = React.useState(0);

  const calculateTotalAmount = (item) => {
    setTotalAmount((prevAmount) => prevAmount + item.price);
  };

  const products = productsData.map((item) => {
    return (
      <Product
        key={item.id}
        item={item}
        handleAddToCartBtn={handleAddToCartBtn}
        calculateTotalAmount={() => calculateTotalAmount(item)}
        viewSelectedItems={() => viewSelectedItems(item)}
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
            onClick={viewItemsContainer}
          />
          <div className="items-count">{addItem}</div>
        </div>

        <div className="hide-shopping-cart-container">
          <div className="items-container">
            <div className="wrapper">
              <h2 className="title">Your Shopping Cart</h2>
              <div className="selected-items-container">
                {selectedItem.length === 0 ? (
                  <p className="empty-cart-text">No items yet.</p>
                ) : (
                  shoppingCart
                )}
              </div>
              <div className="items-details-container">
                <p className="items-number">
                  No. of Items: {selectedItem.length}
                </p>
                <p className="total-amount">Total amount: ${totalAmount}</p>
              </div>
              <div className="buttons-container">
                <button className="back-btn" onClick={hideItemsContainer}>
                  Back to Shopping
                </button>
                <button className="proceed-btn">Proceed to Payment</button>
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
