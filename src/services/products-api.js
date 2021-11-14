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
  endpoints(builder) {
    return {
      getCategories: builder.query({
        query: () => "categories",
      }),
      postCategories: builder.mutation({
        query: (data) => ({
          url: `categories`,
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery, usePostCategoriesMutation } =
  productsApiSlice;
