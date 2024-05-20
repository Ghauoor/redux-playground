import { configureStore } from "@reduxjs/toolkit";
// import messageReducer from "./slices/messageSlice";
// import noteReducer from "./slices/noteSlice";
import productReducer from "./slices/productSlice";

export default configureStore({
  reducer: {
    productReducer,
  },
});
