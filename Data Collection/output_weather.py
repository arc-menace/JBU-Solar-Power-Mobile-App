def output_weather(weather):

    """
    :param weather: dict
    :return: None
    """

    weather_csv = "weather.csv"

    try:
        with open(weather_csv, 'a', newline="") as csv_file:
            for key, value in weather.items():
                csv_file.write(str(value) + ",")  # Write all values in the dictionary to a single row
            csv_file.write("\n")
    except IOError:
        print("ERROR: I/O error")

    return
