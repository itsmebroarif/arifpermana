function sendMessage() {
  // Ambil nilai dari input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Tolong isi form terlebih dahulu ya!.");
    return;
  }
  const whatsappMessage = `Halo, nama saya ${name}.\nAlamat email saya ${email}.\nSubjek: ${subject}\nPesan: ${message}`;


  const whatsappUrl = `https://wa.me/6285817048266?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");
  document.getElementById("contactForm").reset();
}
