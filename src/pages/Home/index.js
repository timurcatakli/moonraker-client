import React from "react";
import { Link } from "react-router-dom";
import categories from "../../shared/categories";

const Home = props => {
  return categories.map(category => {
    return (
      <li key={category.slug}>
        <Link to={`/best-sellers/${category.slug}`}>{category.name}</Link>
      </li>
    );
  });
};

export default Home;
