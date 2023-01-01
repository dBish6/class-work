import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// *Custom Hooks*
import useDocumentTitle from "../../../hooks/useDocumentTitle";

// *Component Imports*
import CreateForm from "../components/CreateForm";

const Create = (props) => {
  useDocumentTitle(`${props.title}`);
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
    <>
      <div style={{ marginTop: "1rem", marginLeft: "1rem", fontSize: "21px" }}>
        <Link to="/admin">Back</Link>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div>
          <CreateForm />
        </div>
      </div>
    </>
  );
};

export default Create;
