from datetime import datetime
from django.core.mail import send_mail
from django.conf import settings
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Appointment, Contact
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

        # Convert date string to datetime.date object
        date = datetime.strptime(date, '%Y-%m-%d').date()

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
        print(date)

        user_subject = "Appointment Submission"
        user_message = f"Hello {name},\n\nWe at MedLab have received your appointment to meet {doctor} in the {department} department, scheduled for {date} at {time}. We will send you a reminder notification.\n\nThank you for choosing MedLab.\n\nWarm Regards,\nMedLab\n"
        send_mail(user_subject, user_message, settings.EMAIL_HOST_USER, [email])

        admin_subject = "New Appointment Alert"
        admin_message = f"A new appointment was received from {name} ({email}, {phone}) to meet with Dr {doctor} in the {department} department on {date} at {time}."
        send_mail(admin_subject, admin_message, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER])

        today = timezone.now().date()
        print(today)

        # Check if today matches appointment date
        if today == date:
            subject = "Appointment Reminder"
            message = f"Hi {appointment.name},\n\nThis is a reminder that your appointment with {appointment.doctor} in the {appointment.department} department is scheduled for today at {appointment.time}.\n\nRegards,\nMedLab"
            send_mail(subject, message, settings.EMAIL_HOST_USER, [appointment.email])

        # Check for existing appointments matching today's date
        appointments_today = Appointment.objects.filter(date=today)
        for appointment in appointments_today:
            subject = "Appointment Reminder"
            message = f"Hi {appointment.name},\n\nThis is a reminder that your appointment with {appointment.doctor} in the {appointment.department} department is scheduled for today at {appointment.time}.\n\nRegards,\nMedLab"
            send_mail(subject, message, settings.EMAIL_HOST_USER, [appointment.email])

        return Response({'message': 'Appointment booked successfully'})


class ContactView (APIView):
    def post (self, request):
        name = request.data.get ('name')
        email = request.data.get ('email')
        subject = request.data.get ('subject')
        message = request.data.get ('message')

        if not name or not email or not subject or not message:
            return Response ({'message': 'All fields are required'})
        
        contact = Contact.objects.create(
            name = name,
            email = email,
            subject = subject,
            message = message
        )
        contact.save()

        subject = "Message Received"
        message = f"Hello {name} \n\n We at MedLab has received your message and we will get back to you as soon as possible. \n\n Warm Regards \n\n Thank you"
        send_mail (subject, message, settings.EMAIL_HOST_USER, [contact.email])

        subject = "New Message"
        message = f"A new message was received from {name} with the email {email}, pls attend to it"
        send_mail = (message, subject, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER])

{}