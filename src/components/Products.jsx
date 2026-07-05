function Products({ products, addToBasket }) {
  return (
    <section className="products">

      <div className="section-heading">
        <p className="small-title">POPULAR TONIGHT</p>
        <h2>Featured Products</h2>
      </div>

      <div className="product-grid">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <div className="product-image">
              {product.icon}
            </div>

            <div className="product-category">
              {product.category}
            </div>

            <h3>{product.name}</h3>

            <div className="product-bottom">

              <div className="product-price">
                £{product.price.toFixed(2)}
              </div>

              <button
                className="add-btn"
                onClick={() => addToBasket(product)}
              >
                Add
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;