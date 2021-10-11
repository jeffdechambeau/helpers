const { drive: client } = require("../client");

module.exports = async ({ documentId }) => {
  const drive = await client();

  return new Promise(async (resolve, reject) => {
    const fileId = documentId;
    const response = await drive.files.get({
      fileId,
      fields: "modifiedTime",
    });
    resolve(response.data.modifiedTime);
  });
};
