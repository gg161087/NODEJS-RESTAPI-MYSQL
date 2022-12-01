import {createPool} from 'mysql2/promise'
import {db_config} from './const/global_consts.js';

export const conn = createPool({
    host: db_config.DB_HOST,
    user: db_config.DB_USERNAME,
    password: db_config.DB_PASSWORD,
    port: db_config.DB_PORT,
    database: db_config.DB_NAME
});