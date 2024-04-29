from django.core.mail import send_mail
from django.conf import settings
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Appointment
from django.utils import timezone


class AppointmentView(APIView):
    def post(self, request):
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

        # Email to the user
        user_subject = "Appointment Submission"
        user_message = f"Hello {name},\n\nWe at MedLab have received your appointment to meet Dr {doctor} in the {department} department, scheduled for {date} at {time}. We will send you a reminder notification.\n\nThank you for choosing MedLab.\n\nWarm Regards,\nMedLab\n"
        send_mail(user_subject, user_message, settings.EMAIL_HOST_USER, [email])

        # Email to admin
        admin_subject = "New Appointment Alert"
        admin_message = f"A new appointment was received from {name} ({email}, {phone}) to meet with Dr {doctor} in the {department} department on {date} at {time}."
        send_mail(admin_subject, admin_message, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER])

        self.Reminder()

        # Return response
        return Response({'message': 'Appointment booked successfully'})


    def Reminder(self):
        today = timezone.now().date()

        appointments_today = Appointment.objects.filter(date=today)

        # Iterate over appointments for today
        for appointment in appointments_today:
            subject = "Appointment Reminder"
            message = f"Hi {appointment.name},\n\nThis is a reminder that your appointment with {appointment.doctor} in the {appointment.department} department is scheduled for today at {appointment.time}.\n\nRegards,\nMedLab"
            send_mail(subject, message, settings.EMAIL_HOST_USER, [appointment.email])

            # Optionally, you can update the appointment status to indicate that a reminder has been sent
            appointment.reminder_sent = True
