import mysql.connector


def fetch_table_data(table_name):
    # The connect() constructor creates a connection to the MySQL server and returns a MySQLConnection object.
    mydb = mysql.connector.connect(
        host='grouptwodb.ciluasfmkj9g.ap-southeast-1.rds.amazonaws.com',
        database='attendance_db',
        user='group2_cie2021',
        password='grouptwodb'
    )

    cursor = mydb.cursor()
    cursor.execute('select name,student_id,email,present,late, day - (present + late) as absence,day from ' + table_name)

    header = [row[0] for row in cursor.description]

    rows = cursor.fetchall()

    # Closing connection
    mydb.close()

    return header, rows


def export(table_name):
    header, rows = fetch_table_data(table_name)
    
    # Create csv file
    f = open(table_name + '.csv', 'w')

    # Write header
    f.write(','.join(header) + '\n')

    for row in rows:
        f.write(','.join(str(r) for r in row) + '\n')

    f.close()
    print(str(len(rows)) + ' rows written successfully to ' + f.name)


# Tables to be exported
# table = input('Which tables you want to export? ').upper()
export("IOT")
export("CLOUD")