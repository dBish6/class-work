import { Link } from "react-router-dom";

// *Custom Hooks*
import useDocumentTitle from "../../../hooks/useDocumentTitle";

// *Design Imports*
import ArrowBack from "@material-ui/icons/ArrowBackRounded";
import "../shoppingCart.css";

const OrderReceived = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);

  return (
    <main className="orderContainer">
      <div>
        <h2>Thank you for your order!</h2>
        <p className="arriveTxt">
          You're order with arrive in about... <span>NEVER!</span>
        </p>
        <Link to="/home">
          <ArrowBack />
          <p>Go to Home</p>
        </Link>
      </div>
    </main>
  );
};

export default OrderReceived;
