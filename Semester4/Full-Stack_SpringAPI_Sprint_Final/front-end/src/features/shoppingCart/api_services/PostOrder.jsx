import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// *Redux Action Imports*
import { ON_SUBMIT_ORDER } from "../redux/cartSlice";

// *Selector Imports*
import { selectCurrentUser } from "../../authentication/redux/selectors";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../../../constants";

// Adds a new sword to the database.
const PostOrder = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();

  const POST = async (cartItems, subtotal, taxRate, grandTotal) => {
    // Checks both URLs to see if they have a response.
    const requests = [
      axios({
        method: "POST",
        url: `${AWS_EBS_URL}/api/create-order`,
        data: {
          cartItems: cartItems,
          order_subtotal: subtotal,
          order_total: grandTotal,
          tax_rate: taxRate,
          username: currentUser,
        },
      }),
      axios({
        method: "POST",
        url: `${LOCAL_URL}/api/create-order`,
        data: {
          cartItems: cartItems,
          order_subtotal: subtotal,
          order_total: grandTotal,
          tax_rate: taxRate,
          username: currentUser,
        },
      }),
    ];
    let success = false;
    try {
      const res = await Promise.any(requests);
      if (res && res.status === 200) {
        dispatch(ON_SUBMIT_ORDER());
        navigate("/cart/order");
        success = true;
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
    if (success) {
      console.warn(
        "One server was unable to get the order data, but was able to find a working server."
      );
    }
  };
  return POST;
};

export default PostOrder;
