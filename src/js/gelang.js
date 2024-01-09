// JavaScript to toggle mobile menu visibility
document.getElementById("burger-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Javascript checkout menu
function handleButtonClick() {
  const konfirmasi = confirm("Anda yakin ingin memesan item ini?");
  if (konfirmasi) {
    window.open(
      "https://api.whatsapp.com/send?phone=+6281335358531&text=Hai%20admin%20BarangRampasan%2C%20saya%20mau%20pesan%20Gelang%2C%20apakah%20barangnya%20ready%3F",
      "_blank"
    );
  }
}

const button = document.getElementById("tombolCheckout");
const button2 = document.getElementById("tombolCheckout2");
const button3 = document.getElementById("tombolCheckout3");

button.addEventListener("click", handleButtonClick);
button2.addEventListener("click", handleButtonClick);
button3.addEventListener("click", handleButtonClick);
