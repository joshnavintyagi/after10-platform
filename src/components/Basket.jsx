function Basket({
  basketItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromBasket,
  clearBasket,
  closeBasket,
}) {
  const subtotal = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const adjustment = subtotal > 0 && subtotal < 10 ? 10 - subtotal : 0;
  const total = subtotal + adjustment;

  return (
    <aside className="basket-box">
<button className="basket-close" onClick={closeBasket}>×</button>
      <h2>Your Basket</h2>
      <p>{basketItems.reduce((total, item) => total + item.quantity, 0)} items</p>

      {basketItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <>
          <div className="basket-items">
            {basketItems.map((item, index) => (
              <div className="basket-row" key={item.id}>
                <span>{index + 1}. {item.icon} {item.name}</span>

                <div className="basket-qty">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <strong>{item.quantity}</strong>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <strong>£{(item.price * item.quantity).toFixed(2)}</strong>

                <button onClick={() => removeFromBasket(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="basket-total">
            <span>Subtotal</span>
            <strong>£{subtotal.toFixed(2)}</strong>
          </div>

          {adjustment > 0 && (
            <p className="minimum-note">
              Add £{adjustment.toFixed(2)} more or the order will be rounded up to £10.
            </p>
          )}

          {adjustment > 0 && (
            <div className="basket-total">
              <span>Minimum Adjustment</span>
              <strong>£{adjustment.toFixed(2)}</strong>
            </div>
          )}

          <div className="basket-total final-total">
            <span>Total</span>
            <strong>£{total.toFixed(2)}</strong>
          </div>

          <button className="clear-basket" onClick={clearBasket}>
            Clear Basket
          </button>
        </>
      )}
    </aside>
  );
}

export default Basket;