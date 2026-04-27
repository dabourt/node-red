module.exports = {
  uiPort: process.env.PORT || 1880,
  uiHost: "0.0.0.0",
  userDir: process.env.NODE_RED_USER_DIR || "./runtime",
  flowFile: "flows.json",
  flowFilePretty: true
};