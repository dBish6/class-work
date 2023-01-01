// *Custom Hooks*
import useDocumentTitle from "../hooks/useDocumentTitle";

// *Feature*
import AdminFeature from "../features/admin";

const Administration = (props) => {
  useDocumentTitle(`${props.title}`);

  return (
    <>
      <AdminFeature />
    </>
  );
};

export default Administration;
