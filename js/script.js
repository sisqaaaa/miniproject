document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.getElementById("main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });

    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
      });
    });
  }

  const welcomeMessageElement = document.getElementById("welcome-message");
  const userName = "Siska Putrirani";

  if (welcomeMessageElement) {
    const originalText = welcomeMessageElement.textContent;

    const newText = originalText.replace("Siska", userName);
    welcomeMessageElement.textContent = newText;
  }

  const currentDateTimeElement = document.getElementById("current-datetime");
  if (currentDateTimeElement) {
    const now = new Date();
    currentDateTimeElement.textContent = now.toLocaleString();
  }

  const form = document.getElementById("message-form");
  const submittedDataElement = document.getElementById("submitted-data");
  const validationMessageElement =
    document.getElementById("validation-message");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = document.getElementById("name").value.trim();
      const emailInput = document.getElementById("email").value.trim();
      const phoneInput = document.getElementById("phone").value.trim();
      const messageInput = document.getElementById("message-text").value.trim();

      if (
        nameInput === "" ||
        emailInput === "" ||
        phoneInput === "" ||
        messageInput === ""
      ) {
        validationMessageElement.textContent =
          "ERROR: Semua bidang (Name, Email, Phone Number, dan Message) wajib diisi!";
        validationMessageElement.style.color = "red";
        return;
      }

      validationMessageElement.textContent = "Success! Data telah dikirim.";
      validationMessageElement.style.color = "green";

      const resultHTML = `
                <p><strong>Name:</strong> ${nameInput}</p>
                <p><strong>Email:</strong> ${emailInput}</p>
                <p><strong>Phone:</strong> ${phoneInput}</p>
                <p><strong>Message:</strong> ${messageInput}</p>
            `;
      submittedDataElement.innerHTML = resultHTML;
    });
  }
});
