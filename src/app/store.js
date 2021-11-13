import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "../services/products-api";
import { setupListeners } from "@reduxjs/toolkit/query";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
