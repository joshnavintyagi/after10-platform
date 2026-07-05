import { useState } from "react";
import { customers } from "../data/customers";

function CustomerLookup({ openDeliveryModal }) {
  const [mobile, setMobile] = useState("");
  const [customer, setCustomer] = useState(null);
  const [searched, setSearched] = useState(false);

  const findCustomer = () => {
    const cleanedMobile = mobile.trim();
    const found = customers.find((c) => c.mobile === cleanedMobile);

    setCustomer(found || null);
    setSearched(true);
  };

  return (
    <section className="customer-lookup">
      <p className="hero-small">FAST CHECKOUT</p>
      <h2>Already ordered with AFTER10?</h2>
      <p>Enter your mobile number and we’ll find your saved delivery details.</p>

      <div className="customer-lookup-row">
        <input
          placeholder="Mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && findCustomer()}
        />

        <button className="gold-btn" onClick={findCustomer}>
          Continue
        </button>
      </div>

      {customer && (
        <div className="customer-card">
          <h3>Welcome back, {customer.firstName} 👋</h3>

          <div className="saved-address">
            <strong>{customer.address}</strong>
            <span>{customer.postcode}</span>
            <small>{customer.instructions}</small>
          </div>

          <div className="customer-actions">
            <button className="gold-btn">Deliver here</button>
            <button className="outline-btn" onClick={openDeliveryModal}>
  Use different address
</button>
          </div>
        </div>
      )}

      {searched && !customer && (
        <p className="delivery-result">
          No saved customer found. Please continue as a new customer below.
        </p>
      )}
    </section>
  );
}

export default CustomerLookup;