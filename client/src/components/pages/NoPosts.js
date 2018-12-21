import React from "react";
import { Link } from "react-router-dom";

const NoPosts = () => (
  <div style={{ textAlign: "center", padding: 80 }}>
    <div style={{ marginBottom: 50, fontSize: 24 }}>There's nothing here!</div>
    <Link to="/new">
      <button className="btn btn-primary" type="dashed" size="large" icon="plus-circle-o">
        Add a Post
      </button>
    </Link>
  </div>
);

export default NoPosts;
