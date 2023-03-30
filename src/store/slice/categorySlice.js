import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchCategory } from "../../Services/CategoryServices";

const initialState = {
  loading: false,
  error: null,
  response: null,
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categorySliceAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(categorySliceAction.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
    builder.addCase(categorySliceAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const categorySliceAction = createAsyncThunk(
  "categorySliceAction",
  async (thunkApi) => {
    return FetchCategory()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return thunkApi.rejectWithValue(err.message);
      });
  }
);

export default categorySlice.reducer;
