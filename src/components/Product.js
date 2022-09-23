import React from "react";
import "../styles/shop.css";

const Product = (props) => {
  return (
    <div className="items">
      <img className="item-image" src={props.item.img} alt="Grey Nike" />
      <p className="item-name">{props.item.title}</p>
      <p className="item-price">${props.item.price}</p>
      <button
        className="add-item-btn"
        onClick={(event) => {
          props.handleAddToCartBtn();
          props.viewSelectedItems();
          props.calculateTotalAmount();
        }}
      >
        {props.item.buttonText}
      </button>
    </div>
  );
};

export default Product;
