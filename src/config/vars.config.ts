import * as dotenv from "dotenv";

dotenv.config()

export const DATA_SOURCES = {
    mySqlDataSource: {
      DB_HOST: process.env.MYSQL_DB_HOST,
      DB_USER: process.env.MYSQL_DB_USER,
      DB_PASSWORD: process.env.MYSQL_DB_PASSWORD,
      DB_PORT: process.env.MYSQL_DB_PORT,
      DB_DATABASE: process.env.MYSQL_DB_DATABASE,
      DB_CONNECTION_LIMIT: process.env.MYSQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MYSQL_DB_CONNECTION_LIMIT) : 4,
    }
  };
  