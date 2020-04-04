import gather_solar as gs
import requests
import json
import os

def post_solar():
    print("DEBUG: start solar")
    data = gs.gather_solar()
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
        url.replace('\n', '')
    except Exception as e:
        print("ERROR: " + str(e))

    if api_key is not None and url is not None:
        headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': "Token " + api_key
        }
        json_data = json.dumps(data)
        url += "solar/"        
        url.replace('\n', '')
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

    print("DEBUG: end solar")