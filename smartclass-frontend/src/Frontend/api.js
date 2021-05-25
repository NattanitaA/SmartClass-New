const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const port = 4406

const db = mysql.createConnection({
    host: "grouptwodb.ciluasfmkj9g.ap-southeast-1.rds.amazonaws.com",
    port: 3306,
    user: "group2_cie2021",
    password: "grouptwodb",
    database: "attendance_db"
})

app.use(cors())

app.get('/getAllIOT', (req,res) => {
    const query = "SELECT * FROM IOT"
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
})

app.get('/getAllCLOUD', (req,res) => {
    const query = "SELECT * FROM CLOUD"
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
})

app.listen(port, () => console.log(`REST API listening on port ${port}`))