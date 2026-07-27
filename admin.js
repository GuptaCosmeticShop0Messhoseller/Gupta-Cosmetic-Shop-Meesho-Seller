// ===== Admin Login =====

// Apna email aur password yahan badal dena
const ADMIN_EMAIL = "youradmin@gmail.com";
const ADMIN_PASSWORD = "12345678";

function adminLogin() {

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {

    localStorage.setItem("adminLogin", "true");

    alert("✅ Login Successful");

    window.location.href = "dashboard.html";

  } else {

    alert("❌ Wrong Email or Password");

  }
}
