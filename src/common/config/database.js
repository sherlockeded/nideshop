const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '222.204.246.130',
  port: '3306',
  user: 'root',
  password: 'nanshanD1@',
  dateStrings: true
};
