function Header({
  basketItemCount,
  setBasketOpen,
  setPage,
  deliveryArea,
  openDeliveryModal,
}) {
  return (
    <header className="header">

      <div className="logo" onClick={() => setPage("home")}>
        AFTER<span>10</span>
      </div>

      <nav className="main-nav">
        <a onClick={() => setPage("home")}>Home</a>
        <a onClick={() => setPage("home")}>Shop</a>
        <a onClick={() => setPage("checkout")}>Checkout</a>
        <a onClick={() => setPage("admin")}>Admin</a>
      </nav>

      <div className="header-right">

        <div
          className="delivery-location"
          onClick={openDeliveryModal}
        >
          📍 <strong>{deliveryArea || "Check Area"}</strong>
        </div>

        <button
          className="basket-btn"
          onClick={() => setBasketOpen(true)}
        >
          🛒 {basketItemCount}
        </button>

      </div>

    </header>
  );
}
export default Header;