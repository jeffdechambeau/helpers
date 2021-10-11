const { sheets: client } = require("../client");

module.exports = async ({ spreadsheetId, values, range, majorDimension }) => {
  const sheets = await client();

  values = [...values.map((v) => [v])];

  const query = {
    spreadsheetId,
    resource: {
      data: [
        {
          range, // Update a column
          values,
          majorDimension,
        },
      ],
      valueInputOption: "USER_ENTERED",
    },
  };

  const update = await sheets.spreadsheets.values.batchUpdate(query);
};
