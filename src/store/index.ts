import { usersApi } from "@/slices/usersApi";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
