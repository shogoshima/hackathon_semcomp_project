import requests, time
import datetime
# GET examples
data_get = {
    
    "description": "a hackathon event with undergraduate students",
    "daytime": "night",
    "importancy": "medium",
    "intention": "make the student focus and leave the environment enjoyable",
    "duration": "long",
    "audience": "young",
    "local": "a laboratory",

}

headers  = {
    "Access-Control-Allow-Origin" : "http://localhost:5000",
    "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
}

# POST examples
data_post = {
    "review" : "like",
    "comment" : "im loving",
    "event_id" : "10092",
    "status" : "during",
    "time_sent" : datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
}

feedback_get = {
    "event_id" : "2"

}

request = 'GET FEEDBACK'
resp = ''

if request == 'GET':
    print(f'GET data: \n{data_get}')
    resp = requests.get("http://127.0.0.1:5000/get_playlist", params=data_get, headers=headers)


elif request == 'POST' :
    print(f'POST data: \n{data_post}')
    resp = requests.post("http://127.0.0.1:5000/event_feedback", params=data_post, headers=headers)

elif request == 'GET FEEDBACK':
    print(f'GET data: \n{feedback_get}')
    resp = requests.get("http://127.0.0.1:5000/event_feedback", params=feedback_get, headers=headers)


print(resp.json())
