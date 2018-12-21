import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../../utils/helpers";

const Breadcrumb = ({ category }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {category && category.includes("Post") ? (
          category
        ) : (
          <Link to={`/${category}`}>{category && capitalize(category)}</Link>
        )}
      </li>
    </ol>
  </nav>
);

export default Breadcrumb;
