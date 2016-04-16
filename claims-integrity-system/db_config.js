var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'cisprojectdb.clnjoejo1osq.us-east-1.rds.amazonaws.com',
    user     : 'mastah_shake',
    password : 'password123',
    database : 'CISProjectDatabase'
  }
});

var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});


module.exports = knex;
