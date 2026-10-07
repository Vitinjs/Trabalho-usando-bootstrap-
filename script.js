"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const topButton = document.getElementById("topButton");
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  if (topButton) topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  if (form && feedback) form.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.classList.remove("d-none");
    form.reset();
  });
});
