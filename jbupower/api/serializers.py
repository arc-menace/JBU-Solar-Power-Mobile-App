from rest_framework import serializers
from . import models


class WeatherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('description', 'temp', 'wind_speed', 'clouds', 'time')
        model = models.Weather


class SolarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ('current_power', 'energy_today', 'energy_lifetime', 'status', 'time')
        model = models.Solar
