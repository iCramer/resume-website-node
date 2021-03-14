const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || 'freedb.tech',
    user: env.DB_USER || 'freedbtech_iancramer',
    password: env.DB_PASSWORD || 'ic141538',
    database: env.DB_NAME || 'freedbtech_dbPageContent',
  }
};


module.exports = config;
