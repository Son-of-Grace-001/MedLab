# views.py
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

    appointment_datetime = datetime.combine(appointment.date, appointment.time)
    send_appointment_reminder.apply_async(args=[appointment.id], eta=appointment_datetime)


    # Return response
    return Response({'message': 'Appointment booked successful'})
