export const updateCart = (state) => {
  //calculate items price
  state.itemsPrice = Number(
    state.cartItems
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2)
  );

  //calculate shipping price($20 under $100, free over $100)
  state.shippingPrice =
    state.itemsPrice >= 100 ? 0 : state.itemsPrice === 0 ? 0 : 20;

  //calculate tax(13%) price
  state.taxPrice = Number((0.15 * state.itemsPrice).toFixed(2));

  //calculate total price
  state.totalPrice = Number(
    (state.itemsPrice + state.shippingPrice + state.taxPrice).toFixed(2)
  );

  localStorage.setItem("cart", JSON.stringify(state));
};
