import LineNotify
from flask import Flask,request, redirect,render_template,url_for
from flask_cors import CORS
# from flask_mqtt import Mqtt
import paho.mqtt.client as mqtt

app = Flask(__name__)
# -------- Flask MQTT CODE -------
# app.config['MQTT_BROKER_URL'] = 'localhost'
# app.config['MQTT_BROKER_PORT'] = 1883
# app.config['MQTT_USERNAME'] = ''
# app.config['MQTT_PASSWORD'] = '' 
# app.config['MQTT_REFRESH_TIME'] = 1.0  # refresh time in seconds
# mqtt = Mqtt(app)
mqttBroker = "localhost"
server = mqtt.Client("FlaskServer")
server.connect(mqttBroker)

CORS(app)

@app.route("/")
def home():
    server.publish("courseData", "hello,world")
    return "I LOVE YOU♥"

@app.route("/<usr>")
def name(usr):
    return f"<h1>Name for registration is {usr}</h1>"


@app.route("/selecttime", methods=['GET','POST'])
def courseName():
    allData = 'camera,'
    if request.method == "POST":
        course = request.json  # Get dict from bam
        nameCourse = course['Course'] # Get course
        time = course['Time'] #
        newTime = time.split(':')
        hour = newTime[0] # Get hour
        minute = newTime[1] # Get minute
        print(course)

        server.publish("courseData", allData+nameCourse+","+hour+","+minute)
        return(course)
    return('nothing') 

@app.route("/notify", methods=['GET','POST'])
def notification():
    if request.method == "POST":
        showCourse = request.json
        print(showCourse['Course'])
        LineNotify.notifyLine(showCourse['Course'])
        return(showCourse)
    return('nothing') 

@app.route("/stop", methods=['GET','POST'])
def stopCamera():
    if request.method == "POST":
        stopValue = request.json
        server.publish("courseData", "stopCam,1")
        return(stopValue)
    return('nothing') 

if __name__ == '__main__':
    
    app.run(debug=True, port=5000, host='0.0.0.0')