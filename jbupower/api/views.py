from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Weather,Solar
from .serializers import WeatherSerializer,SolarSerializer


# Create your views here.
class WeatherList(generics.ListCreateAPIView):
    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer


class WeatherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer


class WeatherViewSet(viewsets.ModelViewSet):
    queryset = Weather.objects.all().order_by('-time')
    serializer_class = WeatherSerializer


class SolarList(generics.ListCreateAPIView):
    queryset = Solar.objects.all()
    serializer_class = SolarSerializer


class SolarDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Solar.objects.all()
    serializer_class = SolarSerializer


class SolarViewSet(viewsets.ModelViewSet):
    queryset = Solar.objects.all().order_by('-time')
    serializer_class = SolarSerializer
