// *Feature*
import LoginFeature from "../../features/authentication/LoginIndex";

// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Login = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);

  return (
    <>
      <LoginFeature />
    </>
  );
};

export default Login;
