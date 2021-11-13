import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  // when we attach this to our redux store, where are we keeping the data in the reducers
  reducerPath: "api",
  // how are we fetching the data, RTK Query comes with its own builtin fetch wrapper called fetchBaseQuery (no need to use axios)
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
    };
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery } = productsApiSlice;
