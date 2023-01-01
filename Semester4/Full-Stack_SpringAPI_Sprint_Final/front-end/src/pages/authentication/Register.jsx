// *Feature*
import RegisterFeature from "../../features/authentication/RegisterIndex";

// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Register = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);

  return (
    <>
      <RegisterFeature />
    </>
  );
};

export default Register;
