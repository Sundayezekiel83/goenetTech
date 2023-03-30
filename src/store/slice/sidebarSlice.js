import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SidebarOn: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOn: (state) => {
      state.SidebarOn = !state.SidebarOn;
    },
  },
});

export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions;

export default sidebarSlice.reducer;
