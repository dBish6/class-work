// *Component Imports*
import TopSpan from "./components/register/TopSpan";
import RegisterForm from "./components/register/RegisterForm";
import RegisterWelcome from "./components/register/RegisterWelcome";

// *Design Imports*
import "./register.css";

const RegisterIndex = () => {
  return (
    <main className="regGridContainer">
      <div className="leftSide">
        <TopSpan />
        <RegisterForm />
      </div>
      <div className="rightSide">
        <RegisterWelcome />
      </div>
    </main>
  );
};

export default RegisterIndex;
