const mysql = require('mysql')

let db

function initDb () {
  if (db) {
    console.warn('Trying to init DB again!')
    return db
  }
  const connection = mysql.createConnection({
    host: 'doofbotdb.cwoxwunurkun.us-east-1.rds.amazonaws.com',
    user: 'croselius',
    password: process.env.DBPASS,
    database: 'doofbot'
  })

  connection.connect()
  db = connection
  return db
}

function getDb () {
  return db
}

module.exports = {
  getDb,
  initDb
}
