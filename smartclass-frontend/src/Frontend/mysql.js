const mysql = require('mysql')

const db = mysql.createConnection({
    host: "grouptwodb.ciluasfmkj9g.ap-southeast-1.rds.amazonaws.com",
    port: 3306,
    user: "group2_cie2021",
    password: "grouptwodb",
    database: "attendance_db"
})

let query = ""
let queryc = ""

db.connect(err => {
    if (err) throw err;
    console.log("Connection successful!")

    query ="DROP TABLE IF EXISTS IOT"
    executeQuery(query,"Attendace table dropped!")
    
    
    query = "CREATE TABLE IOT (row_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),"
    + "student_id INT,  email VARCHAR(255), present INT, late INT, absence INT,day INT)"
    executeQuery(query,"Attendance table created!")
    

    query = "LOAD DATA LOCAL INFILE 'csv/IOT.csv'  INTO TABLE IOT FIELDS TERMINATED BY ',' IGNORE 1 LINES "
    + "(name, student_id, email, present, late,absence, day)"
    executeQuery(query,"Attendance Table loaded!")



    query ="DROP TABLE IF EXISTS CLOUD"
    executeQuery(query,"Attendace table dropped!")
    
    
    query = "CREATE TABLE CLOUD (row_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),"
    + "student_id INT,  email VARCHAR(255), present INT, late INT,absence INT, day INT)"
    executeQuery(query,"Attendance table created!")
    

    query = "LOAD DATA LOCAL INFILE 'csv/CLOUD.csv'  INTO TABLE CLOUD FIELDS TERMINATED BY ',' IGNORE 1 LINES "
    + "(name, student_id, email, present, late,absence, day)"
    executeQuery(query,"Attendance Table loaded!")
    

    db.end(err => {
        if(err) throw err;
        console.log("All done! Closing the database connection")
    })
})

function executeQuery(query, msg) {
    db.query(query, err => {
        if (err) throw err;
        console.log(msg)
    })

// function executeQueryc(queryc, msg) {
//     db.query(queryc, err => {
//         if (err) throw err;
//         console.log(msg)
//     })
}