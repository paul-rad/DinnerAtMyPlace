(() => {
  const address = [112, 97, 117, 108, 64, 100, 105, 110, 110, 101, 114, 97, 116, 109, 121, 112, 108, 97, 99, 101, 46, 99, 111, 109]
    .map((code) => String.fromCharCode(code))
    .join("");

  document.querySelectorAll("[data-contact]").forEach((button) => {
    button.addEventListener("click", () => {
      const subject = button.dataset.subject || "Hello from dinneratmyplace.com";
      window.location.href = `mailto:${address}?subject=${encodeURIComponent(subject)}`;
    });
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
