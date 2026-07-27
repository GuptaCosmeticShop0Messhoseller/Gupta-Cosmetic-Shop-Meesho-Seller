function sendOrder() {

  const order = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    quantity: document.getElementById("qty").value,
    product: "Green Stone Bangles"
  };

  if (
    !order.name ||
    !order.phone ||
    !order.address ||
    !order.quantity
  ) {
    alert("Please fill all details.");
    return;
  }

  // Firebase me save karega
  saveOrderToFirebase(order);

  // WhatsApp message
  const msg =
    `Name: ${order.name}%0A` +
    `Phone: ${order.phone}%0A` +
    `Address: ${order.address}%0A` +
    `Product: ${order.product}%0A` +
    `Quantity: ${order.quantity}`;

  window.open(
    "https://wa.me/917654176410?text=" + msg,
    "_blank"
  );
}
