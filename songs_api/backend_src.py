import datetime
import os, json

# Absolute path
path_to_save = os.path.dirname(os.path.realpath(__file__))
path_to_save = f"{path_to_save}/data/"

#TODO : maybe its better to put it on the front end? so it doesnt even change
def check_feedback_time(new_time : datetime.datetime, user : str):
    '''Checks if the given time is able to be saved or not by reading its last saved
    time '''
    if new_time == None or user == None:
        return False
    

def save_feedback(feedback):
    '''Saves the given feedback to the database'''

    # try:
    review = feedback["review"]
    comment = feedback["comment"]
    event_id = int(feedback["event_id"])
    status = feedback["status"]
    time_sent = feedback["time_sent"]

    complete_review = [f"{review}", f"{comment}", f"{status}", f"{time_sent}"]

    # try:
    with open(path_to_save+"events.json", "r+") as j:
        data = json.load(j)
        
        try: 
            data["events"][f"{event_id}"].append(complete_review) # checks if key exists

        except KeyError: # add new key
            data["events"][f"{event_id}"] =  [
                complete_review
            ]

        j.seek(0) # reset file position

        json.dump(data, j, indent=4)
        j.truncate()

        

    # except Exception as err :
    #     print(f"Error opening file '{path_to_save}/events.json'. Please check if it does not exist.. {err}") 

    # except Exception as err:
    #     print(f"Bad save parameter: {err}")
    #     return False
    # pass

feedback0 = [{
    "review" : "like on show 2",
    "comment" : "i dont know" ,
    "event_id" : 2,
    "status" : "during",
    "time_sent" : datetime.datetime.now()
},

 {
    "review" : "dislike on show 2",
    "comment" : "i dont know" ,
    "event_id" : 2,
    "status" : "during",
    "time_sent" : datetime.datetime.now()
},

 {
    "review" : " like on new show 3",
    "comment" : "i dont know" ,
    "event_id" : 3,
    "status" : "during",
    "time_sent" : datetime.datetime.now()
}]

for feedback in feedback0:
    save_feedback(feedback=feedback)
