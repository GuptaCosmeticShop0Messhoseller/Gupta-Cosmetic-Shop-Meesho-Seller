import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

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

const container = document.getElementById("productContainer");

async function loadProducts() {
  const snapshot = await get(ref(db, "products"));

  if (!snapshot.exists()) return;

  snapshot.forEach((item) => {
    const p = item.val();

    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" style="width:180px">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p><del>₹${p.mrp}</del></p>
      </div>
    `;
  });
}

loadProducts();
