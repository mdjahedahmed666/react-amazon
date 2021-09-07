/* eslint-disable react/jsx-no-undef */
import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key, price } = props.product;
  const reviewItemStyle = {
    borderBottom: "1px solid blue",
    textAlign: "center",
  };
  return (
    <div style={reviewItemStyle} className="review-item">
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>
        <small>Price:${price}</small>
      </p>
      <button onClick={() => props.removeProduct(key)} className="addToCartBtn">
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
