import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/product.scss";

const Product = ({ products }) => {
  const Navigate = useNavigate();

  return (
    <>
      <div
        className="product-item"
        onClick={() => Navigate(`/products/detail`, { state: { products } })}
      >
        <div className="category">{products.category}</div>
        <div className="product-item-img">
          <img className="bg-cover" src={products.thumbnail} alt="laptop" />
        </div>
        <div className="product-item-info fs-14">
          <div className="brand">
            <span>Brand: </span>
            <span className="fw-7">{products.brand}</span>
          </div>
          <div className="title py-2">{products.title}</div>
          <div className="price flex align-center justify-center">
            <span className="old-price">{products.price}</span>
            <span className="new-price">{products.discountPercentage}</span>
            <span className="discount fw-6">
              {products.discountPercentage}% Off
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
