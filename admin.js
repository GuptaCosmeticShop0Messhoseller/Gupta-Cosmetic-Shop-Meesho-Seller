// ===== Admin Login =====

// Apna email aur password yahan badal dena

function adminLogin() {
const ADMIN_EMAIL = "anshraj33668@gmail.com";
const ADMIN_PASSWORD = "Ansh@2006";
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
