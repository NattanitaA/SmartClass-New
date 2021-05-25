import requests, urllib.parse
import mysql.connector


def notifyLine(course):
  mydb = mysql.connector.connect(
    host="grouptwodb.ciluasfmkj9g.ap-southeast-1.rds.amazonaws.com",
    user="group2_cie2021",
    password="grouptwodb",
    database="attendance_db"
  )


 
  mycursor = mydb.cursor()
  mycursor.execute("SELECT student_id,name,email, present, late, day - (present + late) as absence, day FROM "+course+" HAVING late >= 5 or absence >= 3 ")

  myresult = mycursor.fetchall()

  studentList = []
  for x in myresult:
      studentList.append(x[1])
      print(x)

  print(studentList)

  token = "91iOQSDyZ2hSqeqmb44hZwLzSh3MIjPy3gCJaHeKMDU" # boom token

  # token = "DdD0Ux6cLfsCUV13jAw5nGDSMWSQx2sw5dEnrxiloky" # Group line
  url = 'https://notify-api.line.me/api/notify'
  HEADERS = {'Authorization': 'Bearer ' + token}

  msg = "List of students who don't have permission to take an exam for "+course+" course\n"+ str(studentList)

  response = requests.post(url,headers=HEADERS,params={"message": msg})
  print(response)

# notifyLine('CLOUD')