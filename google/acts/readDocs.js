const { docs: client } = require("../client");

module.exports = async ({ documentId }) => {
  const google = await client();

  return new Promise((resolve, reject) => {
    google.documents.get({ documentId }, {}, async (err, res) => {
      if (err) return reject(err);
      const data = res.data;
      resolve(data);
    });
  });
};
