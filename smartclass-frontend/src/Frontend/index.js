const Papa = require('papaparse')
const fs = require('fs')

const attendanceFilePath = './csv/IOT.csv'
const attendanceFile = fs.readFileSync(attendanceFilePath, "utf8")

const attendanceFilePathc = './csv/CLOUD.csv'
const attendanceFilec = fs.readFileSync(attendanceFilePathc, "utf8")

const attendanceRows = {}
Papa.parse(attendanceFile, {
    header: true,
    skipEmptyLines: true,
    complete: function(results){
        attendanceRows.data = results.data
        attendanceRows.errors = results.errors
        attendanceRows.meta = results.meta
    }
})
const attendanceRowsc = {}
Papa.parse(attendanceFilec, {
    header: true,
    skipEmptyLines: true,
    complete: function(resultsc){
        attendanceRowsc.data = resultsc.data
        attendanceRowsc.errors = resultsc.errors
        attendanceRowsc.meta = resultsc.meta
    }
})

const attendanceArray = attendanceRows.data.map( row => {
    const { student_id, name, email, present, late, absence, day} = row
    const edittedName = name.replace(/,/g, ' ')

    return {name: edittedName, student_id, email, present,  late, absence, day }
})

const attendanceArrayc = attendanceRowsc.data.map( row => {
    const { student_id, name,  email, present,  late, absence,day} = row
    const edittedName = name.replace(/,/g, ' ')

    return {name: edittedName, student_id, email, present, late, absence, day }
})

const attendanceData = Papa.unparse(attendanceArray)
createFile("./csv/IOT.csv", attendanceData, "Attendance table (iot) successfully saved!")
const attendanceDatac = Papa.unparse(attendanceArrayc)
createFile("./csv/CLOUD.csv", attendanceDatac, "Attendance table (cloud) successfully saved!")

// fs.writeFile('./csv/attendanceTable.csv', attendanceData, err => {
//     if(err) throw err;
//     console.log("Attendance table successfully saved!")
// })

function createFile(filePath,data,msg) {
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log(msg)
    })
}


// bam 