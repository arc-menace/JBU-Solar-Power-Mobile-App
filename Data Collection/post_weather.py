import gather_weather as ws
import requests
import json


def post_weather():
    data = ws.gather_weather()
    api_key = None
    try:
        file = open("api.key", "r")
        api_key = file.readline()
    except Exception as e:
        print("ERROR: " + str(e))
    if api_key is not None:
        headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': "Token " + api_key
        }
        json_data = json.dumps(data)
        url = "http://127.0.0.1:8000/api/weather/"
        req = requests.Request('POST', url, data=json_data, headers=headers)
        prepared = req.prepare()
        print("DEBUG: POST Headers: " + str(prepared.headers))
        print("DEBUG: POST Body: " + str(prepared.body))

        s = requests.Session()
        response = s.send(prepared)
        print("DEBUG: Response Code: " + str(response.status_code))
        print("DEBUG: Response Headers: " + str(response.headers))
        print("DEBUG: Response Data: " + str(response.json()))
    else:
        print("DEBUG: Error with API key")
