import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, push, set, get } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
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
    alert("✅ Order Saved Successfully");
  } catch (error) {
    alert("❌ " + error.message);
  }
};
import {
  get,
  set,
  push,
  ref
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

window.saveProduct = async function(product){

  const productRef = push(ref(db,"products"));

  await set(productRef,product);

  alert("✅ Product Added");

}
