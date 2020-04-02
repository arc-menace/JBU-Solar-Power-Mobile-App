import datetime
from django.http import HttpResponse
from rest_framework import generics, viewsets
from .models import Weather, Solar
from .serializers import WeatherSerializer, SolarSerializer


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

def index(request):
    now = datetime.datetime.now()
    html = "<html><body><h1>Test Text</h1><p>Current time is %s.</p></body></html>" % now
    return HttpResponse(html)
