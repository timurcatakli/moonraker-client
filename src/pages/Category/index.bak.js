import React from "react";
import { useParams } from "react-router-dom";
import { ROOT_CATEGORIES } from "../../shared/constants";
import { NotFound } from "../../shared/Components/";
import Category from "./Category";

const CategoryWrapper = props => {
  const params = useParams();
  const currentCategory = ROOT_CATEGORIES.find(
    category => category.id === params.slug
  );
  const existsCurrentCategory = !(currentCategory === undefined);
  if (!existsCurrentCategory) return <NotFound />;
  const { id, link, name } = currentCategory;
  return <Category id={id} name={name} link={link} />;
};

export default CategoryWrapper;
