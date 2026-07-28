function logout() {
  localStorage.removeItem("adminLogin");
  window.location.href = "admin.html";
}

function addProduct() {

  const product = {
    name: document.getElementById("productName").value,
    price: document.getElementById("productPrice").value,
    mrp: document.getElementById("productMrp").value,
    category: document.getElementById("productCategory").value,
    image: document.getElementById("productImage").value
  };

  if (
    !product.name ||
    !product.price ||
    !product.mrp ||
    !product.category ||
    !product.image
  ) {
    alert("Please fill all fields");
    return;
  }

window.saveProduct(product);

}
