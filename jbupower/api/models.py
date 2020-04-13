from django.db import models


# Create your models here.
class Weather(models.Model):
    description = models.CharField(max_length=255)
    temp = models.FloatField()
    wind_speed = models.FloatField()
    clouds = models.IntegerField()
    time = models.TimeField(auto_now=True)
    def __str__(self):
        return str(self.description)


class Solar(models.Model):
    current_power = models.FloatField()
    energy_today = models.FloatField()
    energy_lifetime = models.FloatField()
    status = models.CharField(max_length=255)
    time = models.TimeField(auto_now=True)

    def __str__(self):
        return str(self.current_power)