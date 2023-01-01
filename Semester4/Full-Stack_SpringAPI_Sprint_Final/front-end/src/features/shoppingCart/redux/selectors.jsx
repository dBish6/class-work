// Allows us to select a state from the store.
export const selectProducts = (store) => store.cart.products;
// export const selectSubtotal = (store) => store.cart.subTotal;
export const selectSubtotal = (store) => {
  let subtotal = 0;
  store.cart.products.forEach((item) => {
    subtotal += item.price * item.quantity;
  });
  return Math.round(subtotal * 100) / 100;
};
export const selectTaxRate = (store) => store.cart.taxRate;
// export const selectTotalPrice = (store) => store.cart.totalPrice;
export const selectTotalPrice = (store) => {
  let subtotal = selectSubtotal(store);
  return Math.round(subtotal * (1 + store.cart.taxRate) * 100) / 100;
};
