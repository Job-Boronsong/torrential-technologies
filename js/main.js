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

  const demoProduct = document.getElementById("demoProduct");
  const invoiceProduct = document.getElementById("invoiceProduct");

  // Open modal buttons
  document.querySelectorAll(".open-contact").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (!modal) return;

      const formType = btn.dataset.form || "demo";
      const product = btn.dataset.product || "";

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");

      // Toggle forms
      demoForm.classList.toggle("hidden", formType !== "demo");
      invoiceForm.classList.toggle("hidden", formType !== "invoice");

      // Auto-select product
      if (formType === "demo" && demoProduct) {
        demoProduct.value = product;
      }

      if (formType === "invoice" && invoiceProduct) {
        invoiceProduct.value = product;
      }
    });
  });

  // Close modal
  closeBtn?.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  });

  /* ================= ANTI-SPAM SUBMIT LOCK ================= */
  function lockSubmit(formId, buttonId) {
    const form = document.getElementById(formId);
    const btn = document.getElementById(buttonId);

    if (!form || !btn) return;

    form.addEventListener("submit", () => {
      btn.disabled = true;
      btn.textContent = "Sending...";
      btn.style.opacity = "0.7";
    });
  }

  lockSubmit("demo-form", "demoSubmitBtn");
  lockSubmit("invoice-form", "invoiceSubmitBtn");

});
