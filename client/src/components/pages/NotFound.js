import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center", padding: 80 }}>
    <div style={{ marginBottom: 50, fontSize: 24 }}>
      Oops, There's nothing here!
    </div>
    <Link to="/">
      <button className="btn btn-secondary" type="dashed" size="large" icon="plus-circle-o">
        Back to Home
      </button>
    </Link>
  </div>
);

export default NotFound;
