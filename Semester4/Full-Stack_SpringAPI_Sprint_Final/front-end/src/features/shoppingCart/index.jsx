import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// *Component Imports*
import Product from "./components/Product";
import CheckoutBox from "./components/CheckoutBox";

// *Design Imports*
import ArrowBack from "@material-ui/icons/ArrowBackRounded";
import "./shoppingCart.css";

// *Selectors Imports*
import {
  selectProducts,
  selectSubtotal,
  selectTaxRate,
  selectTotalPrice,
} from "./redux/selectors";

const ShoppingCartFeature = () => {
  const products = useSelector(selectProducts);
  const subtotal = useSelector(selectSubtotal);
  const taxRate = useSelector(selectTaxRate);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <>
      {products.length === 0 ? (
        <div className="noItemsContainer">
          <div>
            <h2>Currently no Items in Cart.</h2>
            <Link to="/home">
              <ArrowBack />
              <p>Continue Shopping</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cartGridContainer">
          <div>
            <Product cartItems={products} />
          </div>
          <div className="checkoutContainer">
            <CheckoutBox
              cartItems={products}
              subtotal={subtotal}
              taxRate={taxRate}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartFeature;
