// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *Component Imports*
import TopHeader from "../../components/TopHeader";

// *Design Imports*
import "./errors.css";

const Error404 = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);

  return (
    <main>
      <TopHeader />
      <div className="errorContainer">
        <p>
          <span>Error 404:</span> Page not found.
        </p>
      </div>
    </main>
  );
};

export default Error404;
