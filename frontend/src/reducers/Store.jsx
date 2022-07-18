import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/User";

export default configureStore({
  reducer: {
    user,
  },
});