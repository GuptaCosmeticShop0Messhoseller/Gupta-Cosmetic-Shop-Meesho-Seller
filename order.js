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

  alert("✅ Order Placed Successfully");
}
