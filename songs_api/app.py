from flask import Flask, request, jsonify
import json

from src.utils import *

"""Initializing cohere client"""
global_cohere_client = cohere.Client(key)

app = Flask(__name__)

@app.route("/")
def default():
    """Default root route"""
    return jsonify({"status" : "on"}), 200

@app.get("/get_playlist")
def get_playlist():
    """ ## Get playlists method
    `GET` method to request the information regarding music gender, example songs, analysis

    ### Request specification:
    {
        "keywords" : ["key", "words", "that", "summarize", "the", "request"],
        "returnExampleSongs" : "bool"
    }
    """
    # handling key words separation on requests
    if "keywords" not in request.data or "returnExampleSongs" not in request.data:
        return jsonify({"error" : "Invalid request" }), 400 # bad request

    final_response = {
        "songs" : [],
        "gender" : "",
        "references" : []
        }

    if request.data["returnExampleSongs"] == "true":

        prompt_msg = f'Give me a list of 10 songs and artists to be played on a event that match the keywords: {request.data["keywords"]}. Please, dont send any more text than the format like: \nName: "Song Name"; Author: Author Name.\n'
        try:
            songs = co_command(model='command', prompt='prompt', co=global_cohere_client).generations[0].text

            n_songs = "Give me, with no additional text or information, the separation of the following list of songs names and authors in the format: Name: \"Song Name\"; Author: Author Name\n\n" +songs 
            new_response = co_command(model='command', prompt=n_songs, co=global_cohere_client)

            songs_playlist = get_song_array(new_response, debug =False)

            final_response["songs"] = songs_playlist
            final_response["gender"] = "generic gender to fullfill this filed"
            final_response["references"] = ["a", "bunch", "of", "links.here"]

            return jsonify(final_response), 200 # ok
            
        except Exception as err:
            return jsonify({"error" : f"{err}"}), 500 # interal server error