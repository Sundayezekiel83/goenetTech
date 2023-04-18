import React from "react";
import "./CartPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/slice/cartSlice";

import empty from "../component/asset/empty.png";

const CartPage = () => {
  const dispatch = useDispatch();

  const { Cart: carts } = useSelector((state) => state.Cart);

  return (
    <div className="cart shadow-lg">
      <div className="container">
        {carts.length < 1 ? (
          <div className="">
            <span className="grid place-items-center -left-[50%]">
              <img src={empty} className="w-[30%]" />
              <p className="text-base  -left-2 font-bold text-appcolor-600">
                Empty Cart Start Shopping now
              </p>
            </span>
          </div>
        ) : (
          <div className="cart-ctable">
            <div className="cart-chead bg-white">
              <div className="cart-ctr fw-6 font-manrope fs-15">
                <div className="cart-cth">
                  <span className="cart-ctxt">S.N.</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Product</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Unit Price</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Quantity</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Total Price</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Actions</span>
                </div>
              </div>
            </div>
            {carts.map((item) => (
              <div className="cart-cbody ">
                <div className="cart-ctr py-4">
                  <div className="cart-ctd">
                    <span className="cart-ctxt">1</span>
                  </div>

                  <div className="cart-ctd">
                    <span className="cart-ctxt">{item.title}</span>
                  </div>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">{item.price}</span>
                  </div>
                  <div className="cart-ctd">
                    <div className="qty-change flex align-center">
                      <button
                        type="button"
                        className="qty-decrease flex align-center justify-center"
                        // onClick={() =>
                        //   dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))
                        // }
                      >
                        {/* <i className="fas fa-minus"></i> */} +
                      </button>

                      <div className="qty-value flex align-center justify-center">
                        50
                      </div>

                      <button
                        type="button"
                        className="qty-increase flex align-center justify-center"
                        // onClick={() =>
                        //   dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))
                        // }
                      >
                        {/* <i className="fas fa-plus"></i> */} -
                      </button>
                    </div>
                  </div>

                  <div className="cart-ctd">
                    <span className="cart-ctxt text-orange fw-5">
                      {/* {formatPrice(cart?.totalPrice)} */} {item.totalPrice}
                    </span>
                  </div>

                  <div className="cart-ctd">
                    <button
                      type="button"
                      className="delete-btn text-dark"
                      //   onClick={() => dispatch(removeFromCart(cart?.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-cfoot flex align-start justify-between py-3 bg-white">
              <div className="cart-cfoot-l">
                <button
                  type="button"
                  className="clear-cart-btn text-danger fs-15 text-uppercase fw-4"
                  onClick={() => dispatch(clearCart())}
                >
                  <i className="fas fa-trash"></i>
                  <span className="mx-1">Clear Cart</span>
                </button>
              </div>

              <div className="cart-cfoot-r flex flex-column justify-end">
                <div className="total-txt flex align-center justify-end">
                  <div className="font-manrope fw-5">Total (2000) items </div>
                  <span className="text-orange fs-22 mx-2 fw-6">
                    {/* {formatPrice(totalAmount)} */}
                  </span>
                </div>

                <button
                  type="button"
                  className="checkout-btn bg-appcolor-500 bg-rounded bg-orange fs-16"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
