import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// *API Services Imports*
import PostOrder from "../api_services/PostOrder";

// *Design Imports*
import ArrowBack from "@material-ui/icons/ArrowBackRounded";

// *Selector Imports*
import { selectCurrentUserSession } from "../../authentication/redux/selectors";

const CheckoutBox = (props) => {
  const userSession = useSelector(selectCurrentUserSession);
  const navigate = useNavigate();

  const POST = PostOrder();

  const ifNotLoggedIn = () => {
    navigate("/home");
    setTimeout(() => {
      alert("You must create a account before placing an order.");
    }, 1000);
  };

  return (
    <div className="checkoutBox">
      <h3>
        <span>Subtotal:</span> {props.subtotal}
      </h3>
      <h3>
        <span>Tax Rate:</span> 8.0%
      </h3>
      <h3>
        <span>Total:</span> {props.totalPrice}
      </h3>
      <button
        onClick={() =>
          !userSession
            ? ifNotLoggedIn()
            : POST(
                props.cartItems,
                props.subtotal,
                props.taxRate,
                props.totalPrice
              )
        }
      >
        Checkout
      </button>
      <Link to="/home">
        <ArrowBack />
        <p>Continue Shopping</p>
      </Link>
    </div>
  );
};

export default CheckoutBox;
