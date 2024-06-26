import { configureStore } from "@reduxjs/toolkit";
import { products } from "./slices/prodcuts";

const store = configureStore({
    reducer: {
        [products.reducerPath]: products.reducer,
        // other slices here...
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 },
            serializableCheck: { warnAfter: 128 },
        }).concat(
            products.middleware

            // other slices here...
        ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
