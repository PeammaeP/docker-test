const express = require('express')
const mysql = require('mysql2/promise')

const app = express()
const port = 8000;

let conn = null; 

const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: '127.0.0.1', // หรือใส่เป็น localhost ก็ได้
    user: 'root',
    password: 'root',
    database: 'tutorial',
    port : "3306"
  })
}  

app.get('/hello-world', (req, res) => {
  res.send('hello world')
})

app.get('/users' , async (req,res) => {
  const [results] = await conn.query('SELECT * FROM users'); 
  res.json(results);
})

app.listen(port , async () => {
  await initMySQL();
  console.log(`Server running at http://localhost:${port}/`)
})