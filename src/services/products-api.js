import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  // when we attach this to our redux store, where are we keeping the data in the reducers
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
    // if the endpoint requires auth, you need to add header with your API key
    /* prepareHeaders(headers){ 
      headers.set('x-api-key', your-api-key)  
      return headers;
    } */
  }),
  // try to define the expected endpoints upfront as part of the structure

  /* you only use queries for requests that retrieve data.
   For anything that alters data on the server or will possibly
    invalidate the cache, you should use a Mutation.*/
  endpoints: (builder) => {
    return {
      loginUser: builder.mutation({
        // POST request to /login
        query: (
          data = { name: "johndoe@example.com", password: "secretword" }
        ) => ({
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
} = productsApiSlice;
