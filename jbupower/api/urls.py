from django.urls import include,path
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register('weather', views.WeatherViewSet)
router.register('solar', views.SolarViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
