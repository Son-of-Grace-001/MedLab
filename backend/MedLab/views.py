# views.py
from django.contrib import messages
from django.core.mail import EmailMessage
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .tasks import send_appointment_reminder
from .models import Appointment
from datetime import datetime

class AppointmentView(APIView):
  def post( self, request):
    date = request.data.get('date')
    time = request.data.get('time')
    name = request.data.get('name')
    department = request.data.get('department')
    doctor = request.data.get('doctor')
    phone = request.data.get('phone')
    email = request.data.get('email')
    message = request.data.get('message')

    if not name or not date or not time or not department or not doctor or not message or not phone or not email:
      return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    # Create Appointment object
    appointment = Appointment.objects.create(
        date=date,
        time=time,
        name=name,
        department=department,
        doctor=doctor,
        phone=phone,
        email=email,
        message=message
    )
    appointment.save()

    subject = " Appoint Submission"
    body = f"Hello Sir/Ma {name},\n\nWe at MedLab, received your appointment to meet Dr {doctor} in department of {department} which is to come up on {date} by {time}, we will send you a notification to remind you on the date.\n\n Thanks for trusting us. \n\nWarm Regards,\n\nMedLab\n"

    mail = EmailMessage(subject= subject, body=body, from_email=settings.EMAIL_HOST_USER , to = [email])
    mail.send()
    
    subject = "New message Alert"
    body = f"A new appointment was received from {name} {phone} {email} to meet with Dr{doctor} in the department of {department} on {date} by {time}."
    
    mail = EmailMessage(subject= subject, body=body, from_email=settings.EMAIL_HOST_USER , to = [settings.EMAIL_HOST_USER])
    mail.send()
    messages.info(request, "Your message was sent successfully")


    # appointment_datetime = datetime.combine(appointment.date, appointment.time)
    # send_appointment_reminder.apply_async(args=[appointment.id], eta=appointment_datetime)


    # Return response
    return Response({'message': 'Appointment booked successful'})
