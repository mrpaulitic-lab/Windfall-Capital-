async function startCheckout() {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Enter email");
    return;
  }

  try {
    const res = await fetch("/.netlify/functions/saveLead", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Email saved!");
    } else {
      alert("Error saving email");
      console.log(data);
    }

  } catch (err) {
    alert("Something broke");
    console.error(err);
  }
}
