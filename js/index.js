module.exports = {
  functions: {
    async: require("./src/async"),
    browser: {
      parseURL: require("./src/browser/parseURL"),
      scrollTo: require("./src/browser/dom").scrollTo,
    },
    dom: require("./src/dom"),
    format: require("./src/format"),
    logic: require("./src/logic"),
  },
  vendors: { google: require("./google/index") },
};
