document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Reveal-on-scroll: fade/rise section heads and cards into view once,
  // as they cross the viewport. No-op entirely if reduced motion is set.
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = document.querySelectorAll(".section-head, .card, .ledger .stat, .quote-block blockquote, .member");
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if (!prefersReduced && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // slight stagger within a batch so grids don't pop all at once
          setTimeout(function () { entry.target.classList.add("in-view"); }, i * 60);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in-view"); });
  }

  // Donate page: amount buttons just highlight + fill the custom field.
  var amountButtons = document.querySelectorAll(".amount-row button[data-amount]");
  var customField = document.getElementById("custom-amount");
  amountButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      amountButtons.forEach(function (b) { b.style.background = ""; b.style.color = ""; });
      btn.style.background = "var(--pine)";
      btn.style.color = "var(--bone)";
      if (customField) customField.value = btn.dataset.amount;
    });
  });
});
