import React from "react";
import {
  MdOutlineGppGood,
  MdOutlineMoneyOff,
  MdPhoneCallback,
} from "react-icons/md";

const HomePage = () => {
  const homeItem = [
    {
      icon: <MdOutlineGppGood size={19} />,
      text: "Safe & Reliable Payments",
      id: 3,
    },
    {
      icon: <MdOutlineMoneyOff size={19} />,
      text: "Money Back Guarantee",
      id: 5,
    },

    {
      icon: <MdPhoneCallback size={19} />,
      text: "24/7 Money Call Centers",
      id: 8,
    },
  ];

  return (
    <>
      <div className=" bg-white flex justify-between shadow-md space-x-32 py-4 col-span-2 rounded">
        {homeItem.map((item) => (
          <>
            <div className="px-2" key={item.id}>
              <div className="flex space-x-3 items-center text-black">
                <span className=" mr-2 bg-appcolor-600 rounded-full text-sm font-bold">
                  {item.icon}
                </span>
                {item.text}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default HomePage;
