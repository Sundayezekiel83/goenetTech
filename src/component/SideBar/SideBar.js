import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categorySliceAction } from "../../store/slice/categorySlice";
import { setSidebarOn } from "../../store/slice/sidebarSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(categorySliceAction());
  }, [dispatch]);

  const item = [
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Women Cloth",
      id: 1,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Men's Fashion",
      id: 2,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Phone and Telecommunications",
      id: 3,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Compute Office and Security",
      id: 4,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Consumer Electronics",
      id: 5,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Jewelry and watches",
      id: 6,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Bag and Shoes",
      id: 7,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Pant and Bra",
      id: 8,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Electronics",
      id: 9,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Televisions",
      id: 10,
    },
    {
      icons: <AiOutlineShoppingCart size={20} className="text-gray-300" />,
      name: "Wears",
      id: 11,
    },
  ];
  // console.log("r", response);

  return (
    <>
      <div className="bg-white shadow-md rounded-md min-w-[250px] h-[435px] mt-10 overflow-auto">
        <div className="flex flex-col gap-4 p-3 ">
          <span
            className="inline-flex text-sm bg-white
         "
          >
            <AiOutlineMenu size={20} className="font-bold" /> &emsp;
            <span className="font-bold text-[0.95rem] ">Categories</span>
          </span>

          {response?.map((i, idx) => (
            <>
              <span
                key={idx}
                className="inline-flex text-sm w-full  
               hover:bg-white hover:shadow-sm hover:shadow-appcolor-600 
                hover:w-[100%] hover:py-2 hover:px-2 hover:cursor-pointer hover:text-appcolor-600 hover:translate-x-2
                   "
              >
                {i.icons} &emsp;{" "}
                <span className="uppercase">{i.replace("-", " ")}</span>
              </span>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
