import {createPool} from 'mysql2/promise'
const GLOBAL_CONSTS = require('../src/const/global_consts');

export const conn = createPool({
    host: GLOBAL_CONSTS.PORT,
    user: GLOBAL_CONSTS.DB_USERNAME,
    password: GLOBAL_CONSTS.DB_PASSWORD,
    port: 3306,
    database: GLOBAL_CONSTS.DB_NAME
});