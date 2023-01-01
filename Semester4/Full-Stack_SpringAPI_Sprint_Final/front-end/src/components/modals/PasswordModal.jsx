import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./modals.css";

const PasswordModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef("");

  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [show]);

  const handleSubmit = () => {
    if (inputRef.current.value === process.env.REACT_APP_ADMIN_PASSWORD) {
      window.sessionStorage.setItem("admin", true);
      navigate("/admin");
    }
  };

  return (
    <>
      <button className="adminBtn" onClick={() => setShow(true)}>
        Administration
      </button>
      {show && (
        <>
          <div className="darkBG" onClick={() => setShow(false)} />
          <div className="centered">
            <div className="passwordModal">
              <div className="modalHeader">
                <h3>Required Access</h3>
              </div>
              <button className="closeBtn" onClick={() => setShow(false)}>
                Close
              </button>
              {!sessionStorage.getItem("admin") === true ? (
                <form onSubmit={() => handleSubmit()}>
                  <input
                    name="password"
                    type="text"
                    autoComplete="off"
                    placeholder=" "
                    ref={inputRef}
                  />
                  <label htmlFor="password">Admin Password</label>
                  <div className="btnContainer">
                    <button type="submit">Confirm</button>
                  </div>
                </form>
              ) : (
                <div className="ifAdmin">
                  <p>You are already sign in as an Admin!</p>
                  <div className="btnContainer">
                    <button onClick={() => navigate("/admin")}>Proceed</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PasswordModal;
