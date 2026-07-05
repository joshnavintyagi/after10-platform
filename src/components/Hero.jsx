function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          FAST • LOCAL • RELIABLE
        </p>

        <h1>
          Groceries & Essentials
          <span> Delivered to your door.</span>
        </h1>

        <p className="hero-text">
          Fresh groceries, drinks, snacks and everyday essentials delivered across your local area in minutes.
        </p>

        <div className="hero-buttons">
          <button className="gold-btn">
            Shop Now →
          </button>

          <button className="outline-btn">
            Check Delivery Area
          </button>
        </div>

        <div className="hero-features">
          <span>⚡ Fast Delivery</span>
          <span>🛒 Everyday Essentials</span>
          <span>📍 Local Service</span>
        </div>

      </div>

      <div className="hero-right">

        <img
          src="/hero-groceries.png"
          alt="Groceries"
          className="hero-image"
        />

      </div>

    </section>
  );
}

export default Hero;