// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *Component Imports*
import TopHeader from "../../components/TopHeader";

// *Design Imports*
import "./errors.css";

const Error401 = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);

  return (
    <main>
      <TopHeader />
      <div className="errorContainer">
        <p>
          <span>Error 401:</span> You're not authorized to be here.
        </p>
      </div>
    </main>
  );
};

export default Error401;
