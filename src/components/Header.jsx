function Header({ basketItemCount, setBasketOpen, openDeliveryModal }) {
  return (
    <header className="header">

      <div className="logo">
        AFTER<span>10</span>
      </div>

      <nav className="main-nav">
        <a href="#">Home</a>
        <a href="#">Shop</a>
      </nav>

      <div className="header-right">

        <button className="delivery-location" onClick={openDeliveryModal}>
  📍 Check Delivery Area
</button>

        <button
          className="basket-btn"
          onClick={() => setBasketOpen(true)}
        >
          🛒 Basket ({basketItemCount})
        </button>

      </div>

    </header>
  );
}

export default Header;