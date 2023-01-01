// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *Component Imports*
import TopHeader from "../../components/TopHeader";

// *Design Imports*
import "./errors.css";

const Error500 = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);

  return (
    <main>
      <TopHeader />
      <div className="errorContainer">
        <p>
          <span>Error 500:</span> Unknown server error occurred.
        </p>
      </div>
    </main>
  );
};

export default Error500;
