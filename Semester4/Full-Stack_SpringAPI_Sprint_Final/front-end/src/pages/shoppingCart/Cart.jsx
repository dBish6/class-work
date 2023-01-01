// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *Feature*
import ShoppingCartFeature from "../../features/shoppingCart";

const Cart = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);

  return (
    <>
      <ShoppingCartFeature />
    </>
  );
};

export default Cart;
