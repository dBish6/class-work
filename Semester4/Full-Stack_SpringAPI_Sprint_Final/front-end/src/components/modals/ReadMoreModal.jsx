import { useState, useEffect } from "react";

// *Design Imports*
import ReadMoreIcon from "@material-ui/icons/MoreRounded";
import "./modals.css";

const ReadMoreModal = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [show]);

  return (
    <>
      <ReadMoreIcon onClick={() => setShow(true)} />
      {show && (
        <>
          <div className="darkBG" onClick={() => setShow(false)} />
          <div className="centered">
            <div className="readMoreModal">
              <div className="modalHeader">
                <h3>Full Description</h3>
              </div>
              <button className="closeBtn" onClick={() => setShow(false)}>
                Close
              </button>
              <div className="descriptionContainer">
                <p>{props.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ReadMoreModal;
