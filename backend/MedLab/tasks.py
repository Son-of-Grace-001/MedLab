# tasks.py

from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings  # Import Django settings module
from .models import Appointment

@shared_task
def send_appointment_reminder(appointment_id):
    appointment = Appointment.objects.get(id=appointment_id)
    subject = 'Appointment Reminder'
    message = f'Hi {appointment.name}, this is a reminder for your appointment on {appointment.date} at {appointment.time}. Pls endeavour to Thanks!'
    # Use Django settings for email configuration
    send_mail(subject, message, settings.EMAIL_HOST_USER, [appointment.email])
