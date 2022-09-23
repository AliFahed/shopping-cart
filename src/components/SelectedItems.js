import React from "react";
import "../styles/viewItems.css";

const SelectedItems = (props) => {
  return (
    <div className="items-wrapper">
      <img
        src={props.item.img}
        alt="selected item"
        className="selected-item-image"
      />
      <div className="item-details">
        <p className="selected-item-title">{props.item.title}</p>
        <p className="selected-item-price">{props.item.price}</p>
      </div>
    </div>
  );
};

export default SelectedItems;
