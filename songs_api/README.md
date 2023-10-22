# Backend API Calls definition

The backend is running on a Flask server written in Python.

## Songs and genres request

The frontend does a `HTTP GET` request for the backend on the route `/get_playlist`, having the request body designed as the following:

```json
{
    "description": "description",
    "daytime": "daytime",
    "importancy": "importancy",
    "intention": "intention",
    "duration": "duration",
    "audience": "audience",
    "local": "local",
}
```

and receives a response containing the following body:

```json
{
    "genre": ["songs genre"],
    "songs" : [["songs", "authors"], ],
    "references" : ["Useful links to be consulted by the host regaring the event music"] 
}
```

## Real time feedbacks about the current event

It's possible to get the commentaries and reviews from each event by doing a `HTTP GET` request to the route `/event_feedback` passing as argument the `id` from the event:

```json
{
    "event_id" : 34
}
```

To post a feedback and save it on the database, use the `HTTP POST` request as following, on the same route:

```json
{
    "review" : "like/dislike", 
    "comment" : "commentary about the current state of the event",
    "event_id" : "id that identifies the event",
    "status" : "feedback period (during, post-event)"
}
```
