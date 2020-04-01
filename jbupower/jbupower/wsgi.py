"""
WSGI config for jbupower project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

sys.path.append('/home/ubuntu/ee3503-project/hotelhound')
sys.path.append('/home/ubuntu/ee3503-project/hotelhound/hotelhound')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jbupower.settings')

application = get_wsgi_application()


