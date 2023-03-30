import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import productSlice from "./slice/productSlice";
import sidebarSlice from "./slice/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    category: categorySlice,
    product: productSlice,
  },
});

export default store;
