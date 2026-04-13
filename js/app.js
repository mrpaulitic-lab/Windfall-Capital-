async function startCheckout() {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email");
    return;
  }

  // TEMP TEST (before backend)
  alert("Button works. Backend not connected yet.");
}
