import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import beauticianSlice from "./beauticianSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    beautician: beauticianSlice,
  },
});

export default store;
