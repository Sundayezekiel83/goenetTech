import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./component/Header/Header";
import Header2 from "./component/Header/Header2";
import HomeSlider from "./component/HomeSlider/HomeSlider";
import SideBar from "./component/SideBar/SideBar";
import HomePage from "./Pages/HomePage";
import HomeProduct from "./Pages/HomeProduct";
import SingleProduct from "./Pages/SingleProduct";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <Header />
      <Header2 />
      <Routes>
        <Route path="/" element={<HomeProduct />} />
        <Route path="/products/detail" element={<SingleProduct />} />
        <Route path="/product/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
