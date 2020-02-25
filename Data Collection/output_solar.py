def output_solar(solar):

    """
    :param solar: dict
    :return: None
    """

    solar_csv = "solar.csv"

    try:
        with open(solar_csv, 'a', newline="") as csv_file:
            for key, value in solar.items():
                csv_file.write(str(value) + ",")  # Write all values in the dictionary to a single row
            csv_file.write("\n")
    except IOError:
        print("ERROR: I/O error")

    return
