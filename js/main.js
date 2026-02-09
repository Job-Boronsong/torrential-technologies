document.addEventListener("DOMContentLoaded", () => {

  /* ================= MOBILE NAV ================= */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  /* ================= CONTACT MODAL ================= */
  const modal = document.getElementById("contactModal");
  const closeBtn = document.getElementById("closeContact");
  const demoForm = document.getElementById("demo-form");
  const invoiceForm = document.getElementById("invoice-form");

  // Open modal buttons
  document.querySelectorAll(".open-contact").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (!modal) return;

      const type = btn.dataset.form || "demo";

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");

      if (demoForm && invoiceForm) {
        demoForm.classList.toggle("hidden", type !== "demo");
        invoiceForm.classList.toggle("hidden", type !== "invoice");
      }
    });
  });

  // Close modal
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    });
  }

  // Click outside modal
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }

});
