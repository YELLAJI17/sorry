function showMessage(messageId) {
  const messages = document.querySelectorAll("p");
  messages.forEach((message) => {
    message.classList.add("hidden");
  });
  document.getElementById(messageId).classList.remove("hidden");
}

function showForgiveness() {
  const response = document.getElementById("response");
  response.classList.remove("hidden");
}

function redirectToWhatsApp() {
  const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your phone number
  const message = "Hey Akki, I really miss you and want to talk ❤️";
  const url = `https://wa.me/${+919652069484}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}
