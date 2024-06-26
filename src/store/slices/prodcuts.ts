import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services";
import { Dispatch } from "redux";

export const products = createApi({
    tagTypes: ["products"],
    reducerPath: "getcategories",
    baseQuery: axiosBaseQuery,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: `/products`,
                method: "GET",
            }),
            providesTags: ["products"],
        }),
    }),
});

export const invalidateTagsAfterLogin = (dispatch: Dispatch) => {
    dispatch(products.util.invalidateTags(["products"]));
    // add more tags if you have more rtk query
};

export const { useGetProductsQuery } = products;
