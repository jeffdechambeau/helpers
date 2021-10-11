const parseURL = require("./parseURL");

const urls = [
  "https://blah.net",
  "https://blah.net?active",
  "https://blah.net?key=value",
  "https://blah.net?utm_campaign=hello&verified&cats=dogs",
];

for (const input of urls) {
  const result = parseURL(input);
  console.log({ input, result });
}
