import CustomerLookup from "../components/CustomerLookup";

function Checkout({ openDeliveryModal }) {
  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      <CustomerLookup openDeliveryModal={openDeliveryModal} />

      <section className="checkout-card">
        <h2>New customer</h2>
        <p>Enter your details if this is your first order with AFTER10.</p>

        <input placeholder="Full name" />
        <input placeholder="Mobile number" />
        <input placeholder="Address" />
        <input placeholder="Postcode" />

        <button className="gold-btn">Continue to order summary</button>
      </section>
    </main>
  );
}

export default Checkout;