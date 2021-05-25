import requests
import time

while True:
    response = requests.get('http://localhost:80/getitnow')
    print((response.json()))
    time.sleep(3)