import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => {
    return {
      loginUser: builder.mutation({
        // POST request to /login
        query: (data) => ({
          url: `login`,
          method: "POST",
          body: data,
        }),
      }),
      registerUser: builder.mutation({
        // POST request to /login
        query: (data) => ({
          url: `register`,
          method: "POST",
          body: data,
        }),
      }),
      getCategories: builder.query({
        query: () => "/categories",
      }),
      getProducts: builder.query({
        query: () => "/products",
      }),
      getUsers: builder.query({
        query: () => "/users",
      }),

      postCategories: builder.mutation({
        query: (data) => ({
          url: `categories`,
          method: "POST",
          body: data,
        }),
      }),
      postProducts: builder.mutation({
        query: (data) => ({
          url: `products`,
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  usePostCategoriesMutation,
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetUsersQuery,
} = productsApiSlice;
