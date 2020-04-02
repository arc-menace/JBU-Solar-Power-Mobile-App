from django.contrib import admin

# Register your models here.

from .models import Solar, Weather

admin.site.register(Solar)
admin.site.register(Weather)