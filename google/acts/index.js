module.exports = {
  read: { docs: require("./readDocs"), sheets: require("./readSheets") },
  write: { sheets: require("./writeSheets") },
  check: { modified: require("./lastModified") },
};
