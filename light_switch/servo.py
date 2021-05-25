import RPi.GPIO as GPIO
import time
import requests

GPIO.setmode(GPIO.BOARD)

GPIO.setup(11, GPIO.OUT)
servo = GPIO.PWM(11,50)
# light = 'off'
# servo.start(2+(30/18))
print('Wait for 2 seconds')
time.sleep(2)

# print('rotating')
try:
    while True:
        response = requests.get('http://192.168.1.44:80/getitnow')
        res = response.json()
        if res == 'off':
            servo.ChangeDutyCycle(2+(30/18))
            time.sleep(0.3)
            servo.ChangeDutyCycle(0)
            time.sleep(1.7)
            # light = 1
            print('light off')
        elif res == 'on':
            servo.ChangeDutyCycle(2+(100/18))
            time.sleep(0.3)
            servo.ChangeDutyCycle(0)
            time.sleep(1.7)
            # light = 0
            print('light on')
finally:
    servo.stop()
    GPIO.cleanup()
    print('Goodbye')