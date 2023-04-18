import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header2 = () => {
  const { SidebarOn } = useSelector((state) => state.sidebar);
  const { Cart: carts } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const Navigate = useNavigate();

  return (
    <>
      <section className="bg-white  shadow-md h-20 items-center">
        <div className="flex space-x-10 mt-5 mx-auto items-center justify-center">
          <Link to="/">
            <div className="text-[1.6rem] text-appcolor-500 flex items-center">
              {" "}
              <AiOutlineMenu className="invisible" /> GeoNet
            </div>
          </Link>

          <form>
            <div className="flex mt-2">
              <div className="relative w-full">
                <input
                  type="search"
                  className="w-[43rem] block p-2.5  z-20 text-sm   bg-white rounded border-appcolor-600 border focus:ring-appcolor-600  focus:border-appcolor-500 "
                  placeholder="Search for Category"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-appcolor-600 rounded-r-lg border border-appcolor-600 hover:bg-appcolor-600 focus:ring-4 focus:outline-none"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>

          <div className="flex" onClick={() => Navigate("/product/cart")}>
            <var>
              <AiOutlineShoppingCart size={40} />
            </var>
            <sup>
              <span className="bg-appcolor-600  text-white rounded-full text-sm p-1">
                {carts.length}
              </span>
            </sup>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header2;
