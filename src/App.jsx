import { useState } from "react";
import "./App.css";

import DeliveryModal from "./components/DeliveryModal";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";

function App() {
  const savedPostcode =
  localStorage.getItem("deliveryPostcode");
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <header className="header">
        <div className="logo" onClick={() => setPage("home")}>
          AFTER<span>10</span>
        </div>

        <nav>
          <a onClick={() => setPage("home")}>Home</a>
          <a onClick={() => setPage("home")}>Shop</a>
          <button
            className="delivery-location"
            onClick={() => setDeliveryModalOpen(true)}
          >
            {savedPostcode
  ? `📍 ${savedPostcode}`
  : "📍 Check Delivery Area"}
          </button>
          <a onClick={() => setPage("checkout")}>Checkout</a>
          <a onClick={() => setPage("admin")}>Admin</a>
        </nav>
      </header>

      {page === "home" && <Home goToCheckout={() => setPage("checkout")} />}
      {page === "checkout" && (
  <Checkout openDeliveryModal={() => setDeliveryModalOpen(true)} />
)}
      {page === "admin" && <Admin />}

      <DeliveryModal
        open={deliveryModalOpen}
        onClose={() => setDeliveryModalOpen(false)}
      />
    </div>
  );
}

export default App;