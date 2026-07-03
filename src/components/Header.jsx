function Header({ basketItemCount, setBasketOpen }) {
  return (
    <header className="header">
      <div className="logo">
        AFTER<span>10</span>
      </div>

      <nav>
        <a>Home</a>
        <a>Shop</a>
        <a>Delivery</a>
        <a>Contact</a>
        <button onClick={() => setBasketOpen(true)}>
          Basket ({basketItemCount})
        </button>
      </nav>
    </header>
  );
}

export default Header;