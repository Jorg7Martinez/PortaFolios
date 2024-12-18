import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen" style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "72px", color: "#004e89" }}>404</h1>
      <p style={{ fontSize: "24px", color: "#555" }}>
        Oops! La página que buscas no existe.
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#007bff",
          fontSize: "20px",
          marginTop: "20px",
          display: "inline-block",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default PageNotFound;
