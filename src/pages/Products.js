import React from "react";
import { useGetProductsQuery } from "../services/products-api";
export default function Products() {
  const { data = [], isLoading, isSuccess } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>There are no products</div>;
  if (isSuccess) return <h2>is successfull</h2>;

  return (
    <div>
      <div>Number of categories fetched: {data.length}</div>

      {data.map((product) => {
        return (
          <>
            <p> {product.description}</p>
            <h3> {product.name}</h3>
          </>
        );
      })}
    </div>
  );
}
