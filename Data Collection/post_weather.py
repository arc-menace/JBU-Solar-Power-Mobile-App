import gather_weather as ws
import requests
import json
import os


def post_weather():
    print("DEBUG: start weather")
    data = ws.gather_weather()
    api_key = None
    url = None
    try:
        here = os.path.dirname(os.path.abspath(__file__))
        filename = os.path.join(here, 'api.key')
        file = open(filename, "r")
        api_key = file.readline()
    except Exception as e:
        print("ERROR: " + str(e))

    try:
        here = os.path.dirname(os.path.abspath(__file__))
        filename = os.path.join(here, 'post.url') #server will use different url
        file = open(filename, "r")
        url = file.readline()
    except Exception as e:
        print("ERROR: " + str(e))

    if api_key is not None and url is not None:
        headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': "Token " + api_key
        }
        json_data = json.dumps(data)
        url += "weather/"
        print(url)
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

    print("DEBUG: end weather")