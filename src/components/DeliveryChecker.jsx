import { useState } from "react";
import { deliveryZones } from "../data/deliveryZones";

function DeliveryChecker() {
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");

  const checkPostcode = () => {
    const area = postcode.trim().toUpperCase().split(" ")[0];

    if (!area) {
      setMessage("Please enter your postcode.");
      return;
    }

    if (deliveryZones[area]) {
      setMessage(`Delivery available • £${deliveryZones[area].fee.toFixed(2)}`);
    } else {
      setMessage(
  "We don’t currently deliver to this area as standard, but please leave us a message. If a driver is available, we’ll try our best to help. Your request also helps us decide where to expand next."
);
    }
  };

  return (
    <section className="delivery-checker">
      <div>
        <p className="hero-small">DELIVERY AREA</p>
        <h2>Check your postcode</h2>
        <p>Enter your postcode to check availability and delivery charge.</p>
      </div>

      <div className="postcode-form">
        <input
          value={postcode}
          onChange={(e) => setPostcode(e.target.value.toUpperCase())}
          onKeyDown={(e) => {
            if (e.key === "Enter") checkPostcode();
          }}
          placeholder="Enter postcode e.g. EH1"
        />

        <button onClick={checkPostcode}>Check</button>

        {message && <p className="delivery-result">{message}</p>}
      </div>
    </section>
  );
}

export default DeliveryChecker;