import { useDispatch } from "react-redux";

// *Design Imports*
import noImage from "../../../assets/images/no-image.webp";
import { AddCircle, RemoveCircle, Delete } from "@material-ui/icons";

// *Redux Action Imports*
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../redux/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cartContainer">
        <div className="titles">
          <h3 className="productTitle">Product</h3>
          <h3 className="lengthTitle">Length</h3>
          <h3 className="massTitle">Mass</h3>
          <h3>Name</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
        </div>
        {props.cartItems.map((sword) => {
          return (
            <div className="cartItem" key={sword.sword_id}>
              <div className="cartImageContainer">
                {!sword.image_url.includes("https") ? (
                  <img src={noImage} alt="no-image.webp" />
                ) : (
                  <img src={sword.image_url} alt="image_url" />
                )}
              </div>
              <h4 className="length">{sword.length}in</h4>
              <h4 className="mass">{sword.mass} lbs</h4>
              <h4>{sword.name}</h4>
              <div className="quantityContainer">
                <RemoveCircle
                  onClick={() => dispatch(DECREASE_QUANTITY(sword))}
                />
                <p>{sword.quantity}</p>
                <AddCircle onClick={() => dispatch(INCREASE_QUANTITY(sword))} />
              </div>
              <h4>${sword.price}</h4>
              <div className="trashIcon">
                <Delete onClick={() => dispatch(REMOVE_FROM_CART(sword))} />
                <small>Delete</small>
              </div>
            </div>
          );
        })}
        <hr />
        <button className="clearBtn" onClick={() => dispatch(CLEAR_CART())}>
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Product;
