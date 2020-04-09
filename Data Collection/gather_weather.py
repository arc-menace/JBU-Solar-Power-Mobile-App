import requests
import datetime
import os


def gather_weather():

    """
    :return: dict
    """

    url = None
    try:
        here = os.path.dirname(os.path.abspath(__file__))
        filename = os.path.join(here, 'weather.key')
        file = open(filename, "r")
        url = file.readline()
    except Exception as e:
        print("ERROR: " + str(e))

    weather = dict(description=None,
                   temp=None,
                   wind_speed=None,
                   clouds=None,
                   time=None)

    if url is not None:
        response = requests.get(url)

        if response.status_code == 200:
            # convert data to json for parsing
            weather_raw = response.json()
            weather["description"] = weather_raw["weather"][0]["main"]  # one word description of weather
            weather["temp"] = weather_raw["main"]["temp"]               # in Kelvin
            weather["wind_speed"] = weather_raw["wind"]["speed"]        # in meters/second
            weather["clouds"] = weather_raw["clouds"]["all"]            # percentage cloud cover
            # There will be multiple data entries per day
            # so a timestamp is necessary to differentiate
            weather["time"] = str(datetime.datetime.now())

        elif response.status_code == 401:
            print("ERROR " + str(response.status_code) + ": User not properly authenticate. Check API key.")

        else:
            print("ERROR: API call returned " + str(response.status_code))

    return weather
