import { useState } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import Basket from "../components/Basket";
import { products } from "../data/products";
import { categories } from "../data/categories";

function Home({ goToCheckout }) {
  const [basketItems, setBasketItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [basketOpen, setBasketOpen] = useState(false);

  const addToBasket = (product) => {
    const existing = basketItems.find((item) => item.id === product.id);

    if (existing) {
      setBasketItems(
        basketItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromBasket = (id) => {
    setBasketItems(basketItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setBasketItems(
      basketItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setBasketItems(
      basketItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  const basketCount = basketItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Hero />

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Products products={filteredProducts} addToBasket={addToBasket} />

      {basketCount > 0 && !basketOpen && (
        <button
          className="mini-basket-button"
          onClick={() => setBasketOpen(true)}
        >
          🛒 Basket ({basketCount})
        </button>
      )}

      {basketOpen && (
        <div className="basket-overlay" onClick={() => setBasketOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Basket
            
              basketItems={basketItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromBasket={removeFromBasket}
              clearBasket={clearBasket}
              closeBasket={() => setBasketOpen(false)}
              goToCheckout={goToCheckout}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;