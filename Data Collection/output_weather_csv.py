import os


def output_weather_csv(weather):

    """
    :param weather: dict
    :return: None
    """

    weather_csv = "weather.csv"
    if os.stat(weather_csv).st_size == 0:
        w_write = open(weather_csv, "w")
        w_write.write("description,temp,wind_speed,clouds,time,\n")
        w_write.close()

    try:
        with open(weather_csv, 'a', newline="") as csv_file:
            for key, value in weather.items():
                csv_file.write(str(value) + ",")  # Write all values in the dictionary to a single row
            csv_file.write("\n")
    except IOError:
        print("ERROR: I/O error")

    return
