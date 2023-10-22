# Backend API Calls definition

The backend is running on a Flask server written in Python.

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

