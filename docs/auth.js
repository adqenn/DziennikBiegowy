import { supabase } from './supabase.js';

// -------------------------------------------
// LOGOWANIE
// -------------------------------------------
const form = document.getElementById("login-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Błąd logowania: " + error.message);
      return;
    }

    // Po poprawnym logowaniu przechodzimy do dashboard
    window.location.href = "dashboard.html";
  });
}

// ------------------------------------------------------
// WYLOGOWANIE
// ------------------------------------------------------
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}

// udostępniamy funkcję globalnie
window.logout = logout;
