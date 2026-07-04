import { useState } from "react";
import { customers } from "../data/customers";

function CustomerLookup() {
  const [mobile, setMobile] = useState("");
  const [customer, setCustomer] = useState(null);

  const findCustomer = () => {
    const found = customers.find(c => c.mobile === mobile);

    if (found) {
      setCustomer(found);
    } else {
      setCustomer(null);
    }
  };

  return (
    <section className="customer-lookup">

      <h2>Returning Customer</h2>

      <input
        placeholder="Enter your mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && findCustomer()}
      />

      <button onClick={findCustomer}>
        Continue
      </button>

      {customer && (
        <div className="customer-card">
          <h3>Welcome back {customer.firstName} 👋</h3>

          <p>{customer.address}</p>

          <p>{customer.postcode}</p>

          <button>Deliver to this address</button>

          <button>Use different address</button>
        </div>
      )}

    </section>
  );
}

export default CustomerLookup;