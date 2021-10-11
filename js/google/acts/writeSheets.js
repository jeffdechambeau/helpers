const { sheets: client } = require("../client");

module.exports = async ({ spreadsheetId, values, range, majorDimension }) => {
  const sheets = await client();

  const query = {
    spreadsheetId,
    resource: {
      data: [
        {
          range,
          values: values.map((v) => [v]),
          majorDimension,
        },
      ],
      valueInputOption: "USER_ENTERED",
    },
  };

  await sheets.spreadsheets.values.batchUpdate(query);
};
