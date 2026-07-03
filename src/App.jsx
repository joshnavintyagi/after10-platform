import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";

function App() {
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
          <a onClick={() => setPage("checkout")}>Checkout</a>
          <a onClick={() => setPage("admin")}>Admin</a>
        </nav>
      </header>

      {page === "home" && <Home />}
      {page === "checkout" && <Checkout />}
      {page === "admin" && <Admin />}
    </div>
  );
}

export default App;