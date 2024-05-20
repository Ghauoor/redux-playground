import { configureStore } from "@reduxjs/toolkit";
// import messageReducer from "./slices/messageSlice";
// import noteReducer from "./slices/noteSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
