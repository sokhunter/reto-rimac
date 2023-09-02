import { createPool, Pool } from 'mysql';
import { DATA_SOURCES } from '../config/vars.config';

const dataSource = DATA_SOURCES.mySqlDataSource;

let pool: Pool;

export const init = () => {
  try {
    pool = createPool({
      connectionLimit: dataSource.DB_CONNECTION_LIMIT,
      host: dataSource.DB_HOST,
      user: dataSource.DB_USER,
      password: dataSource.DB_PASSWORD,
      database: dataSource.DB_DATABASE,
    });

    console.debug('MySql Adapter Pool generated successfully');
  } catch (error) {
    console.error('An error has ocurred in [mysql.connector][init]: ', error);
    throw new Error('Failed to initialized pool');
  }
};

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
  try {
    if (!pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');

    return new Promise<T>((resolve, reject) => {
      pool.query(query, params,
        (error, results) => {
          if (error) reject(error);
          else resolve(results);
        });
    });

  } catch (error) {
    console.error('An error has ocurred in [mysql.connector][execute]: ', error);
    throw new Error('Failed to execute MySQL query');
  }
}
