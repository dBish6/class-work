import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// *API Services Imports*
import PostUsers from "../../api_services/PostUsers";

// *Design Imports*
import {
  VisibilityTwoTone,
  VisibilityOffTwoTone,
  ContactSupportTwoTone,
} from "@material-ui/icons";
import blackRavenLogo from "../../../../assets/images/blackRavenLogo-DesignEvo.png";

const LoginForm = () => {
  const [visible, toggleVisibility] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { postLogin, userNotFoundErr } = PostUsers();

  return (
    <div className="loginFormContainer">
      <Link className="imgContainer" to="/home">
        <img src={blackRavenLogo} alt="blackRavenLogo-DesignEvo.png" />
      </Link>
      {/* TODO: Make blur mask. */}
      <div id="mask" />
      <form
        className="loginForm"
        onSubmit={handleSubmit(() =>
          postLogin(watch("username"), watch("password"))
        )}
      >
        <h1>Log in</h1>
        <p className="welcomeText">Welcome back to Raven Blacksmith Co.</p>
        {userNotFoundErr ? (
          <small className="userNotFoundErr">
            Username or password is incorrect.
          </small>
        ) : undefined}
        <input
          {...register("username", {
            required: "Username is required.",
            maxLength: 20,
          })}
          name="username"
          id="usernameInput"
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor="username" id="LogUsernameLabel">
          Username
        </label>
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ message }) => (
            <small className="inputError">{message}</small>
          )}
        />

        <p className="forgotPasswordText">Forgot your password?</p>
        {visible ? (
          <VisibilityOffTwoTone
            className="visibilityIcon"
            onClick={() => toggleVisibility(false)}
          />
        ) : (
          <VisibilityTwoTone
            className="visibilityIcon"
            onClick={() => toggleVisibility(true)}
          />
        )}
        <input
          {...register("password", {
            required: "Password is required.",
          })}
          name="password"
          id="passwordInput"
          type={visible ? "text" : "password"}
          placeholder=" "
        />
        <label htmlFor="password" id="LogPasswordLabel">
          Password
        </label>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <small className="inputError">{message}</small>
          )}
        />
        <button type="submit">Log In</button>

        <div className="contactSupport">
          <Link to="/home/support">Support</Link>
          <ContactSupportTwoTone />
        </div>
        <p className="noAccount">
          Don't have a account? <Link to="/register">Sign Up</Link>
        </p>
        <p className="otherDetails">
          <Link>Terms</Link> | <Link>Privacy</Link> | <Link>Security</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
