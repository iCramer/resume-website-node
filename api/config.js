const env = process.env;
const dbCreds = require('./db-creds');

const config = {
  db: { ...dbCreds}
};


module.exports = config;
