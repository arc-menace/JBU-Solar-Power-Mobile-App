import requests
import time


def gather_solar():

    """
    :return: dict
    """

    key = None
    try:
        file = open("solar.key", "r")
        key = file.readline()
    except Exception as e:
        print("ERROR: " + str(e))

    solar = dict(current_power=None,
                 energy_today=None,
                 energy_lifetime=None,
                 summary_date=None,
                 status=None,
                 time=None)

    if key is not None:
        url = "https://api.enphaseenergy.com/api/v2/systems/223500/summary?" + key
        response = requests.get(url)

        if response.status_code == 200:
            # convert data to json for parsing
            solar_raw = response.json()

            solar["current_power"] = solar_raw["current_power"]      # in Wh
            solar["energy_today"] = solar_raw["energy_today"]        # in Wh
            solar["energy_lifetime"] = solar_raw["energy_lifetime"]  # in Wh
            solar["summary_date"] = solar_raw["summary_date"]        # in yyyy-mm-dd
            solar["status"] = solar_raw["status"]                    # ex. "normal"
            # There will be multiple data entries per day
            # so a timestamp is necessary to differentiate
            solar["time"] = time.time()

        elif response.status_code == 401:
            print("ERROR" + response.status_code + ": User not properly authenticate. Check API key.")

        else:
            print("ERROR: API call returned " + response.status_code)

    return solar
