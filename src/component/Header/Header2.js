import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { categorySliceAction } from "../../store/slice/categorySlice";
import { setSidebarOn } from "../../store/slice/sidebarSlice";

const Header2 = () => {
  const { SidebarOn } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();

  return (
    <>
      <section className="bg-white  shadow-md h-20">
        <div className="flex space-x-10 mt-5 mx-auto justify-center">
          <div className="text-[1.6rem] text-appcolor-500 flex items-center gap-4">
            <AiOutlineMenu
              className="invisible"
              onClick={() => dispatch(setSidebarOn())}
            />{" "}
            GeoNet
          </div>

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
          <div className="flex">
            <var>
              <AiOutlineShoppingCart size={40} />
            </var>
            <sup>
              <span className="bg-appcolor-600  text-white rounded-full text-sm p-1">
                2
              </span>
            </sup>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header2;
