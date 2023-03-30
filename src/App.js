import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./component/Header/Header";
import Header2 from "./component/Header/Header2";
import HomeSlider from "./component/HomeSlider/HomeSlider";
import SideBar from "./component/SideBar/SideBar";
import HomePage from "./Pages/HomePage";
import HomeProduct from "./Pages/HomeProduct";

function App() {
  return (
    <>
      <Header />
      <Header2 />

      <main className="flex gap-5 px-10 max-h-fit">
        <SideBar />
        <div className="mt-10">
          <HomePage />
          <HomeSlider />
        </div>
      </main>
      <Routes>
        <Route path="/" element={<HomeProduct />} />
      </Routes>
    </>
  );
}

export default App;
