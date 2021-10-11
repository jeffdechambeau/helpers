const credentials = require("./credentials.json"); // this must exist
const token = require("./token.json"); // this too

const { google } = require("googleapis");

const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

oAuth2Client.setCredentials(token);

module.exports = {
  gmail: () => google.gmail({ version: "v1", auth: oAuth2Client }),
  sheets: () => google.sheets({ version: "v4", auth: oAuth2Client }),
  docs: () => google.docs({ version: "v1", auth: oAuth2Client }),
  drive: () => google.drive({ version: "v3", auth: oAuth2Client }),
};
