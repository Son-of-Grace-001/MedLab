from django.urls import path
from .views import AppointmentView, ContactView

urlpatterns = [
    path('appointments/', AppointmentView.as_view()),
    path('contacts/', ContactView.as_view())
]