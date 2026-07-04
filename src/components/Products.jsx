function Products({ products, addToBasket }) {
  return (
    <section className="products">
      <p className="small">POPULAR TONIGHT</p>
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-icon">{product.icon}</div>
            <p className="product-category">{product.category}</p>
            <h3>{product.name}</h3>
            <p className="product-price">£{product.price.toFixed(2)}</p>

            <button onClick={() => addToBasket(product)}>
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;