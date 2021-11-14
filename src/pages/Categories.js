import React from "react";
import {
  useGetCategoriesQuery,
  usePostCategoriesMutation,
} from "../services/products-api";
export default function Categories() {
  const { data = [], error, isLoading } = useGetCategoriesQuery();

  const { postCategories, isPending } = usePostCategoriesMutation();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Missing post!</div>;

  return (
    <div>
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
