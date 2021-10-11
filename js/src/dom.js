const scrollTo = (selector) => {
  const el = document.querySelector(selector);
  window.scrollTo({ top: el.offsetTop + 40, behavior: "smooth" });
};

module.exports = { scrollTo };
