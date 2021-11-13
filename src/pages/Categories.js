import React from "react";
import { useGetCategoriesQuery } from "../services/products-api";
export default function Categories() {
  const { data = [], isFetching } = useGetCategoriesQuery();

  return (
    <div>
      Categories Page
      <div>Number of categories fetched: {data.length}</div>
      {data.map((category) => {
        return (
          <>
            <h3> {category.name}</h3>
            <p> {category.description}</p>
          </>
        );
      })}
    </div>
  );
}
