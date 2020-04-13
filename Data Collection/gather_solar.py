import requests
import os

def gather_solar():

    """
    :return: dict
    """

    key = None
    try:
        here = os.path.dirname(os.path.abspath(__file__))
        filename = os.path.join(here, 'solar.key')
        file = open(filename, "r")
        key = file.readline()
    except Exception as e:
        print("ERROR: " + str(e))

    solar = dict(current_power=None,
                 energy_today=None,
                 energy_lifetime=None,
                 status=None)

    if key is not None:
        url = "https://api.enphaseenergy.com/api/v2/systems/223500/summary?" + key
        response = requests.get(url)

        if response.status_code == 200:
            # convert data to json for parsing
            solar_raw = response.json()
            solar["current_power"] = solar_raw["current_power"]      # in Wh
            solar["energy_today"] = solar_raw["energy_today"]        # in Wh
            solar["energy_lifetime"] = solar_raw["energy_lifetime"]  # in Wh
            solar["status"] = solar_raw["status"]                    # ex. "normal"
        elif response.status_code == 401:
            print("ERROR " + str(response.status_code) + ": User not properly authenticate. Check API key.")

        else:
            print("ERROR: API call returned " + str(response.status_code))

    return solar
