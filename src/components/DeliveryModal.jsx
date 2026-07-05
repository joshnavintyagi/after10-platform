import { useState } from "react";
import { deliveryZones } from "../data/deliveryZones";
import { saveExpansionRequest } from "../services/expansionRequests";

function DeliveryModal({ open, onClose }) {
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestName, setRequestName] = useState("");
  const [requestMobile, setRequestMobile] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [requestSent, setRequestSent] = useState(false);

  if (!open) return null;

  const checkDelivery = () => {
    const area = postcode.trim().toUpperCase().split(" ")[0];

    if (!area) {
      setMessage("Please enter your postcode.");
      setShowRequestForm(false);
      return;
    }

    if (deliveryZones[area]) {
      localStorage.setItem("deliveryPostcode", area);

      setMessage(
        `✅ Delivery available in ${area}. Charge: £${deliveryZones[area].fee.toFixed(2)}`
      );

      setShowRequestForm(false);

      setTimeout(() => {
        onClose();
      }, 1200);
    } else {
      setMessage(
        "We don’t currently deliver to this area as standard, but if a driver is available, we’ll try our best to help."
      );
      setShowRequestForm(true);
    }
  };

  const sendRequest = () => {
    saveExpansionRequest({
      postcode,
      name: requestName,
      mobile: requestMobile,
      message: requestMessage,
    });

    setRequestSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="delivery-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <h2>Check Delivery Area</h2>
        <p>Enter your postcode to see if we deliver to your area.</p>

        <input
          type="text"
          placeholder="e.g. EH1 1AA"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value.toUpperCase())}
          onKeyDown={(e) => {
            if (e.key === "Enter") checkDelivery();
          }}
        />

        <button className="gold-btn" onClick={checkDelivery}>
          Check Delivery
        </button>

        {message && <p className="delivery-result">{message}</p>}

        {showRequestForm && (
          <div className="out-area-form">
            <h3>Leave us a message</h3>

            <input
              placeholder="Your name"
              value={requestName}
              onChange={(e) => setRequestName(e.target.value)}
            />

            <input
              placeholder="Mobile number"
              value={requestMobile}
              onChange={(e) => setRequestMobile(e.target.value)}
            />

            <textarea
              placeholder="Message e.g. I need delivery tonight if a driver is available"
              value={requestMessage}
              onChange={(e) => setRequestMessage(e.target.value)}
            />

            <button className="gold-btn" onClick={sendRequest}>
              Send Request
            </button>

            {requestSent && (
              <p className="delivery-result">
                ✅ Request sent. We’ll review driver availability and your area has been recorded.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DeliveryModal;