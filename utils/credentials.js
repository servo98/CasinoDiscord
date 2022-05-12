import dotenv from 'dotenv';

dotenv.config();

export default {
  discord: {
    token: process.env.TOKEN,
    appId: process.env.APP_ID,
    publicKey: process.env.PUBLIC_KEY,
  },
  database: {
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
  },
};
