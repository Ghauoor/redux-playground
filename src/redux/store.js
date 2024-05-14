import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import noteReducer from "./slices/noteSlice";

export default configureStore({
  reducer: {
    messageReducer,
    noteReducer,
  },
});
