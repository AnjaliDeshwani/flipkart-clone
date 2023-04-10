import React from "react";

export const ProductCard = ({ product }) => {
  const { img, brandName, size, price, discountedPrice } = product;
  return (
    <div className="flex flex-col w-48 shadow-xl">
      <img src={img} alt="tshirt" />
      <div className="border-b-2 border-gray-300"></div>
      <span className="brand-name">{brandName}</span>
      <span>Casual Regular Sleeves</span>
      <div className="flex gap-2">
        <span className="discounted-price">₹{discountedPrice}</span>
        <span className="original-price line-through">₹{price}</span>
      </div>
      <span>
        Size:
        {size.map((size) => (
          <span>{size},</span>
        ))}
      </span>
    </div>
  );
};
