module.exports = {
  functions: {
    async: require("./src/async"),
    browser: require("./src/browser"),
    dom: require("./src/dom"),
    format: require("./src/format"),
    logic: require("./src/logic"),
  },
  vendors: { google: require("./google/index") },
};
