from flask import Flask,request, redirect,render_template,url_for,jsonify
from flask_cors import CORS
import RPi.GPIO as GPIO
import time

app = Flask(__name__)

GPIO.setmode(GPIO.BOARD)

GPIO.setup(11, GPIO.OUT)
servo = GPIO.PWM(11,50)
servo.start(2+(40/18))
time.sleep(0.3)
servo.ChangeDutyCycle(0)
time.sleep(1.7)
print('servo start')
CORS(app)
light = 'off'
# @app.route("/",methods=['GET','POST'])
# def home():
#     if request.method == 'POST':
#         user = request.form['nm']
#         print(user)
#         return redirect(url_for("name",usr = user))
#     else:
#         return render_template("register.html")

# @app.route("/<usr>")
# def name(usr):
#     return f"<h1>Name for registration is {usr}</h1>"

@app.route("/lightType/<typeoflight>")
def lightType(typeoflight):
    global light
    print(typeoflight)
    print(type(typeoflight))
    if typeoflight == '<on>':
        light = 'on'
        servo.ChangeDutyCycle(2+(40/18))
        time.sleep(0.3)
        servo.ChangeDutyCycle(0)
        time.sleep(1.7)
        print("light on")
    elif typeoflight == '<off>':
        light = 'off'
        servo.ChangeDutyCycle(2+(100/18))
        time.sleep(0.3)
        servo.ChangeDutyCycle(0)
        time.sleep(1.7)
        print("light off")
    print("fromElf")
    # light = 'on'
    return jsonify(light)


# @app.route("/lightOff")
# def lightOff():
#     global light
#     light = 'off'
#     return "OFF"

@app.route("/register", methods=['GET','POST'])
def showData():
    if request.method == "POST":
        name = request.json
        print(name)
        return(name)
    return('nothing')

@app.route("/getitnow",methods=['GET'])
def getItNow():
    if request.method == "GET":
        print(light)
        if light == 'on':
            print("in to on")
            return jsonify('on')
        elif light == 'off':
            print("in to off")
            return jsonify('off')
        # print(type)
        # print(light)
        return jsonify('error')

if __name__ == '__main__':
    app.run(debug=True, port=80, host='0.0.0.0')