import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../../shared/Components/";
import { fetchCategoryTree } from "../../shared/helpers";
import Category from "./Category";
import allCategories from "../../shared/categories";

const CategoryWrapper = props => {
  const params = useParams();
  const categoryTree = fetchCategoryTree(params, allCategories);

  if (!categoryTree) return <NotFound />;
  return <Category tree={categoryTree} />;
};

export default CategoryWrapper;
