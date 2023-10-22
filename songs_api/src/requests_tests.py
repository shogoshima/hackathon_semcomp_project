import requests

data = {
    
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

resp = requests.get("http://127.0.0.1:5000/get_playlist", params=data, headers=headers)

print(resp.json())
