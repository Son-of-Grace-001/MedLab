# celery.py

from celery import Celery
import os
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MedLab.settings')
settings.configure()


app = Celery('MedLab')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
