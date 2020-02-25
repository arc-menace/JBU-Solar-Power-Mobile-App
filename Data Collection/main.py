import gather_weather
import output_weather
import gather_solar
import output_solar


weather = gather_weather.gather_weather()

output_weather.output_weather(weather)

solar = gather_solar.gather_solar()
output_solar.output_solar(solar)