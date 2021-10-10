const { sheets: client } = require("../client");

module.exports = async ({ spreadsheetId, range, majorDimension }) => {
  const sheets = await client();
  const query = {
    spreadsheetId,
    range,
    majorDimension,
  };

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(query, async (err, res) => {
      if (err) return reject(err);
      resolve(res.data.values);
    });
  });
};
