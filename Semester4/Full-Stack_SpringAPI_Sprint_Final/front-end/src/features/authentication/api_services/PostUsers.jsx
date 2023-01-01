import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import bcrypt from "bcryptjs";

// *Redux Action Imports*
import { USER_SESSION, SET_CURRENT_USER } from "../redux/userSlice";

// *API Services Imports*
import GetUsers from "./GetUsers";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../../../constants";

// This file holds all the POST operations for the user; register, login, logout.
const PostUsers = () => {
  const [users] = GetUsers();
  const [userConflictErr, setUserConflictErr] = useState(false);
  const [userNotFoundErr, setUserNotFoundErr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postRegister = async (username, email, password, phone) => {
    // Checks both URLs to see if they have a response.
    const requests = [
      axios({
        method: "POST",
        url: `${AWS_EBS_URL}/api/register`,
        data: {
          username: username,
          email: email,
          password: password,
          phone: phone,
        },
        validateStatus: (status) => {
          return status === 200 || status === 409; // Resolve if the status code is 409; let 404 responses as well as 200.
        },
      }),
      axios({
        method: "POST",
        url: `${LOCAL_URL}/api/register`,
        data: {
          username: username,
          email: email,
          password: password,
          phone: phone,
        },
        validateStatus: (status) => {
          return status === 200 || status === 409;
        },
      }),
    ];
    let success = false;
    try {
      const res = await Promise.any(requests);
      setUserConflictErr(false);

      if (res.status === 409) {
        setUserConflictErr(true);
      } else if (res.status === 200) {
        setUserConflictErr(false);
        navigate("/login");
        success = true;
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
    if (success) {
      console.warn(
        "One server was unable to get register data, but was able to find a working server."
      );
    }
  };

  const postLogin = async (username, password) => {
    const requests = [
      axios({
        method: "POST",
        url: `${AWS_EBS_URL}/api/login`,
        data: {
          username: username,
          password: password,
        },
      }),
      axios({
        method: "POST",
        url: `${LOCAL_URL}/api/login`,
        data: {
          username: username,
          password: password,
        },
      }),
    ];
    let success = false;
    try {
      const response = await Promise.any(requests);
      setUserNotFoundErr(false);

      if (response && response.status === 200) {
        users.length === 0 && setUserNotFoundErr(true);
        users.length &&
          users.forEach((user) => {
            // Compares the hash password from the back-end, which is where the password is hashed.
            bcrypt.compare(password, user.password, (err, res) => {
              if (err) console.error(err);
              if (res) {
                // Compares usernames.
                if (user.username === username) {
                  setUserNotFoundErr(false);
                  dispatch(USER_SESSION(true));
                  dispatch(SET_CURRENT_USER(user.username));
                  navigate("/home");
                  success = true;
                } else {
                  setUserNotFoundErr(true);
                }
              } else {
                // Didn't find correct password.
                setUserNotFoundErr(true);
              }
            });
          });
      }
      console.log(response);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
    if (success) {
      console.warn(
        "One server was unable to get the login data, but was able to find a working server."
      );
    }
  };

  const postLogout = async (e) => {
    e.preventDefault();
    const requests = [
      axios({
        method: "POST",
        url: `${AWS_EBS_URL}/api/logout`,
      }),
      axios({
        method: "POST",
        url: `${LOCAL_URL}/api/logout`,
      }),
    ];
    try {
      const res = await Promise.any(requests);

      if (res && res.status === 200) {
        dispatch(USER_SESSION(false));
        dispatch(SET_CURRENT_USER(""));
        alert("Session timed out.");
        navigate("/home");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  return {
    postRegister,
    userConflictErr,
    postLogin,
    userNotFoundErr,
    postLogout,
  };
};

export default PostUsers;
