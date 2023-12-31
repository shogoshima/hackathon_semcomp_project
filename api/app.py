from flask import Flask, request, jsonify
from flask_cors import CORS
import json

from src.utils import *
from backend_src import *

"""Initializing cohere client"""
global_cohere_client = cohere.Client(key)

"""request content to validating pourposes"""
playlist_request_content = ["description", "daytime", "importancy", "intention", "duration", "duration", "audience", "local"]

"""POST request body on event_feedback"""
event_feedback_post_content = ["review", "comment", "event_id", "status", "time_sent"]

app = Flask(__name__)
CORS(app) # allows different origins requisitions
# app.run(host="0.0.0.0", port=9876)

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
        "description": "description", \\
        "daytime": "daytime", \\
        "importancy": "importancy", \\
        "intention": "intention", \\
        "duration": "duration", \\
        "audience": "audience", \\
        "local": "local" 
    }
    """
    # return request.args

    # checking for a valid request
    for content in request.args:
        if content not in playlist_request_content:
            return jsonify({"error" : "Invalid request parameters" }), 400 # bad request

    # debug = request.args["debug"] == "true"

    final_response = {
        "songs" : [],
        "gender" : "",
        "references" : [],
        "generatedPrompt" : ""
        }

    # if request.args["returnExampleSongs"] == "true":
        # print(f"-=======\n{request.args['returnExampleSongs']}")

    prompt_msg = f'Give me a list of 10 songs and artists to be played on a event that match the following: It is a {request.args["description"]} happening during {request.args["daytime"]}, and the music has {request.args["importancy"]} significancy to {request.args["intention"]} for a time around {request.args["duration"]}. Also, the target audience is {request.args["audience"]} on a local like {request.args["local"]}. Please, dont send any more text than the format like: \nName: "Song Name"; Author: Author Name.\n'

    try:
        songs = co_command(model='command', prompt=prompt_msg, co=global_cohere_client).generations[0].text

        n_songs = "Give me, with no additional text or information, the separation of the following list of songs names and authors in the format: Name: \"Song Name\"; Author: Author Name\n\n" + songs 
        
        # if debug:
        #     print(f"\nPrompt generated:\n{n_songs}")

        new_response = co_command(model='command', prompt=n_songs, co=global_cohere_client).generations[0].text

        songs_playlist = get_song_array(new_response, debug =False)

        final_response["songs"] = songs_playlist
        final_response["gender"] = "generic gender to fullfill this filed"
        final_response["references"] = ["a", "bunch", "of", "links.here"]
        final_response["generatedPrompt"] = prompt_msg

        return jsonify(final_response), 200 # ok
        
    except Exception as err:
        return jsonify({"error" : f"{err}"}), 500 # interal server error
    

@app.route('/event_feedback', methods=['GET', 'POST'])
def event_feedback():
    """ ## Handles all event feedbacks


    ### Request description

    `GET` : { TODO
    
    } -> response : { data}

    `POST` : {
        "review" : "like/dislike", \\
        "comment" : "commentary about the current state of the event", \\
        "event_id" : "id",
        "status" : "feedback period (during, post-event)",\\
        } -> response : {"review status" : "result (saved, not saved)"}

    """
    if request.method == 'GET':
        if "event_id" not in request.args:
            return jsonify({"status" : "Invalid request body"}), 400
        
        event_id = request.args.get('event_id')
        data = get_feedback_data_by_event(event_id=event_id)
        if data:
            summary_prompt = "Im gonna send you some comments regarding the musical choice for an event. Summarize it for me, focusing on the reviews and on the constructive critics: \n"
            
            # Counts the porcentage of likes in total besides completing the summarizing funcion
            likes = 0

            for review in data:
                summary_prompt += "\" " +review[1] +  "\", "
                if review[0]=='likes':
                    likes += 1
            
            total_likes = len(data)
            percentage = 0.0

            if total_likes > 0:
                percentage = float(likes)/float(total_likes)
            
            likes_obj = {"total_reviews" : total_likes,
                         "total_likes" : likes,
                         "like_percentage" : percentage}
            
            summary = ["Summary unavailable due to few comments."]
            # Generating summary from comments
            if len(summary_prompt) > 250:
                summary = co_summarize(summary_prompt, co=global_cohere_client).summary

            return jsonify({"commentaries" : data, "feedback_summary" : summary, "feedback" : likes_obj})
        else:
            return jsonify({"feedbacks" : [], "feedback_summary" : "", "feedback" : ""} )
        # return jsonify({"status" : "ok"}), 200
        
    elif request.method == 'POST':
        # posting information on event feedback

        for content in request.args: # checking request body
            if content not in event_feedback_post_content:
                return jsonify({"error" : "Bad request body. Invalid parameters"}), 400 # bad request
        
        # saving data
        print(request.args)
        if save_feedback(request.args):
        
            return jsonify({"status" : "ok"}), 200
    
        else:
            return jsonify({"status" : "error"}), 500

    else:
        return jsonify({"error" : "Invalid request method"}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)