import React, { useState } from "react";
import "./singleProduct.scss";
import { useLocation } from "react-router-dom";
import { addCart } from "../store/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  const { state } = useLocation();

  const { Cart } = useSelector((state) => state.Cart);

  const product = state.products;
  const dispatch = useDispatch();

  const [imgsrc, setImgSrc] = useState(product.images[0]);

  console.log(Cart);
  return (
    <>
      <main className="py-5 bg-whitesmoke">
        <div className="product-single">
          <div className="container">
            <div className="product-single-content bg-white grid">
              <div className="product-single-l">
                <div className="product-img">
                  <div className="product-img-zoom rounded">
                    <img src={imgsrc} alt="" className="img-cover" />
                  </div>
                  <div className="product-img-thumbs flex align-center my-2">
                    <div
                      className="thumb-item"
                      onClick={() => setImgSrc(product.images[1])}
                    >
                      <img
                        src={product.images[1]}
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div
                      className="thumb-item"
                      onClick={() => setImgSrc(product.images[2])}
                    >
                      <img
                        src={product.images[2]}
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div
                      className="thumb-item"
                      onClick={() => setImgSrc(product.images[3])}
                    >
                      <img
                        src={product.images[3]}
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div
                      className="thumb-item"
                      onClick={() => setImgSrc(product.images[4])}
                    >
                      <img
                        src={product.images[4]}
                        alt=""
                        className="img-cover"
                      />
                    </div>

                    {imgsrc != product.images[0] ? (
                      <div
                        className="thumb-items"
                        onClick={() => setImgSrc(product.images[0])}
                      >
                        <img
                          src={product.images[0]}
                          alt=""
                          className="img-cover"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="product-single-r">
                <div className="product-details font-manrope">
                  <div className="title fs-20 fw-5">{product.title}</div>
                  <div>
                    <p className="para fw-3 fs-15">{product.description}</p>
                  </div>
                  <div className="info flex align-center flex-wrap fs-14">
                    <div className="rating">
                      <span className="text-orange fw-5">Rating:</span>
                      <span className="mx-1">{product.rating}%</span>
                    </div>
                    <div className="vert-line"></div>
                    <div className="brand">
                      <span className="text-orange fw-5">Brand:</span>
                      <span className="mx-1">{product.brand}</span>
                    </div>
                    <div className="vert-line"></div>
                    <div className="brand">
                      <span className="text-orange fw-5">Category:</span>
                      <span className="mx-1 text-capitalize">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="price">
                    <div className="flex align-center">
                      <div className="old-price text-gray">
                        #{product.price}
                      </div>
                      <span className="fs-14 mx-2 text-dark">
                        Inclusive of all taxes
                      </span>
                    </div>

                    <div className="flex align-center my-1">
                      <div className="new-price fw-5 font-poppins fs-24 text-orange">
                        {product.price}
                      </div>
                      <div className="discount bg-orange fs-13 text-white fw-6 font-poppins">
                        {product.discountPercentage}% OFF
                      </div>
                    </div>
                  </div>

                  <div className="qty flex align-center my-4">
                    <div className="qty-text">Quantity: {product.stock}</div>
                    <div className="qty-change flex align-center mx-3">
                      <button
                        type="button"
                        className="qty-decrease flex align-center justify-center"
                        // onClick={() => decreaseQty()}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="qty-value flex align-center justify-center">
                        25
                      </div>
                      <button
                        type="button"
                        className="qty-increase flex align-center justify-center"
                        // onClick={() => increaseQty()}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>

                    <div className="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5">
                      out of stock
                    </div>
                  </div>

                  <div className="btns">
                    <button type="button" className="add-to-cart-btn btn">
                      <i className="fas fa-shopping-cart"></i>
                      <span
                        className="btn-text mx-2"
                        onClick={() =>
                          dispatch(addCart({ ...product, quantity: 1 }))
                        }
                      >
                        add to cart
                      </span>
                    </button>
                    <button type="button" className="buy-now btn mx-3">
                      <span className="btn-text">buy now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleProduct;
