import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../features/quotes/quoteSlice";

export default configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
