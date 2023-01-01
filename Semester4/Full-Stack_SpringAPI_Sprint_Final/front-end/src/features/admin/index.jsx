import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// *API Services Imports*
import FetchAllSwords from "../../api_services/FetchAllSwords";

// *Component Imports*
import Table from "./components/Table";

const AdminFeature = () => {
  const [product, loadingProduct] = FetchAllSwords();
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem("admin")) {
      navigate("/home");
      setTimeout(() => {
        alert("You are not an Admin user.");
      }, 1000);
    }
  }, [navigate]);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        margin: "1rem",
        overflowX: "hidden",
      }}
    >
      {loadingProduct ? (
        <p style={{ fontSize: "68px" }}>Loading...</p>
      ) : (
        <>
          <Link to="/home">Back</Link>
          <h1>Admin</h1>
          <Table product={product} isLoading={loadingProduct} />
        </>
      )}
    </div>
  );
};

export default AdminFeature;
