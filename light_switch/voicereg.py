import speech_recognition as sr
import pyttsx3
import requests

r = sr.Recognizer()
mic = sr.Microphone()
# url = '10.100.14.142:80'
url = '192.168.1.51:80'
# r.dynamic_energy_threshold = False
# r.energy_threshold = 500

def light_on():
    res = requests.get('http://'+url+'/lightType/<on>')
    res1 = res.json()
    print('light on')
    return(res1)

def light_off():
    res = requests.get('http://'+url+'/lightType/<off>')
    res1 = res.json()
    print('light off')
    return(res1)

def SpeakText(command): 
      
    # Initialize the engine 
    engine = pyttsx3.init() 
    engine.setProperty('rate',200)
    engine.setProperty('volume',1)
    engine.say(command)  
    engine.runAndWait()

def text_reg(text):
    list_word = ['turn','switch','power','flick','plug','start','boot']
    list_open = ['on','up','in','start','activate']
    list_off = ['off','down','out','stop','inactivate']
    
    test_list = text.split(' ')
    print(test_list)
    for i in range(len(list_open)):
        if (list_open[i] in test_list) and ('light' in test_list):
            print('Light is on')
            print(light_on())
            SpeakText('Light is on')
            return True
        elif (list_off[i] in test_list) and ('light' in test_list):
            print('Light is off')
            print(light_off())
            SpeakText('Light is off')
            return True



while True: 
    with mic as source:
        print("Speak Plz")

        r.adjust_for_ambient_noise(source)
        audio = r.listen(source)
        
        print("Converting Speech to Text...")
        try:
            text = r.recognize_google(audio)

            # print("You said: " + r.recognize_google(audio))
            print("You said: " + text)
            SpeakText(text)
            # if r.recognize_google(audio) == "exit":
            #     break
            if text == "exit":
                break
            text_reg(text.lower())
            # if not text_reg(text.lower()):
            #     break

        # except sr.RequestError() as e:
            # print("Could not request results; {0}".format(e))
        # except sr.UnknownValueError():
        #     print("Error: " + str(e))
        except Exception as e:
            print("Error: " + str(e))
        
        


# pip install SpeechRecognition
# brew install portaudio
# pip install pyaudio

# for test
# python -m speech_recognition