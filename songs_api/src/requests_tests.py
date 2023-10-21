import requests

data = {
    "keywords" : ["church", "gospel", "divine", "calm", "respect", "sacre"],
    "returnExampleSongs" : "true",
    "debug" : "true"
}

resp = requests.get("http://127.0.0.1:5000/get_playlist", params=data)

print(resp.json())
