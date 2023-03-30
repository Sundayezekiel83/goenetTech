import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchAllProducts } from "../../Services/CategoryServices";

const initialState = {
  loading: false,
  error: null,
  response: null,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productSliceAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(productSliceAction.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
    builder.addCase(productSliceAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const productSliceAction = createAsyncThunk(
  "productSliceAction",
  async (thunkApi) => {
    return FetchAllProducts()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return thunkApi.rejectWithValue(err.message);
      });
  }
);

export default productSlice.reducer;
