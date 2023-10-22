# Backend API Calls definition

The backend is running on a Flask server written in Python.

## Songs and genres request

The frontend does a `GET` request for the backend, having the request body designed as the following:

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

## Give real time feedbacks about the current event

`GET`:

```json
{

}
```

`POST`:

```json
{

}
```
