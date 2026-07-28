import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKZKrCxiIzthZKkXrkAY46mTZNJDw4CJ0",
  authDomain: "gupta-cosmetic-shop-and-messho.firebaseapp.com",
  databaseURL: "https://gupta-cosmetic-shop-and-messho-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gupta-cosmetic-shop-and-messho",
  storageBucket: "gupta-cosmetic-shop-and-messho.firebasestorage.app",
  messagingSenderId: "1063721196033",
  appId: "1:1063721196033:web:d7b1b9d0ea1a5e28c27e00"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.saveOrderToFirebase = async function(order) {
  try {
    await push(ref(db, "orders"), {
      ...order,
      status: "Pending",
      createdAt: new Date().toISOString()
    });

    alert("✅ Order Saved");
  } catch (e) {
    alert(e.message);
  }
};

window.saveProduct = async function(product) {
  try {
    const productRef = push(ref(db, "products"));
    await set(productRef, product);

  } catch (e) {
    alert(e.message);
  }
};
window.loadProducts = async function () {

  const container = document.getElementById("productContainer");

  if (!container) return;

  container.innerHTML = "";

  const snapshot = await get(ref(db, "products"));

  if (!snapshot.exists()) {
    container.innerHTML = "<h3>No Products Found</h3>";
    return;
  }

  snapshot.forEach((item) => {

    const product = item.val();

    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p><del>₹${product.mrp}</del></p>
        <button class="shop-btn">Buy Now</button>
      </div>
    `;

  });

}
