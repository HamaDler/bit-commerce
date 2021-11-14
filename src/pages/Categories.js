import React from "react";
import {
  useGetCategoriesQuery,
  usePostCategoriesMutation,
} from "../services/products-api";
export default function Categories() {
  const { data = [], isFetching, endpointName } = useGetCategoriesQuery();

  const { postCategories, isPending } = usePostCategoriesMutation();

  return (
    <div>
      Categories Page, End point name: {endpointName}
      <div>Number of categories fetched: {data.length}</div>
      {data.map((category) => {
        return (
          <>
            <p> {category.description}</p>
            <h3> {category.name}</h3>
          </>
        );
      })}
    </div>
  );
}
