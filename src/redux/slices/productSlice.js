import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("productFetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },

  reducers: {
    // loadProducts: (state, action) => {
    //   state.products = action.payload;
    // },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "Success";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;
