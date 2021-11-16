import React from "react";
import {
  useGetProductsQuery,
  useGetUsersQuery,
} from "../services/products-api";
export default function Products() {
  // const { data = [], isLoading, isSuccess } = useGetProductsQuery();

  const { data = [], isLoading, isSuccess, error } = useGetUsersQuery();

  return (
    <div>
      <div>Number of categories fetched: {data.length}</div>

      {JSON.stringify(data)}
    </div>
  );
}
