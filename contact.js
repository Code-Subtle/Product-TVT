document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `New message from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Change this to your email:
    window.location.href = `mailto:vinaypparit@gmail.com?subject=${subject}&body=${body}`;
  });
