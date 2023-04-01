import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DetailProducts } from "../../Services/CategoryServices";

const initialState = {
  loading: false,
  error: null,
  response: null,
};

const detailProduct = createSlice({
  name: "detailProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(detailProductAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(detailProductAction.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
    builder.addCase(detailProductAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const detailProductAction = createAsyncThunk(
  "detailProductAction",
  async (payload, thunkApi) => {
    return DetailProducts(payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return thunkApi.rejectWithValue(err.message);
      });
  }
);

export default detailProduct.reducer;
