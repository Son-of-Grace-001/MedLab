from django.contrib import admin

# Register your models here.
from . models import Appointment, Contact

class UserAppointment(admin.ModelAdmin):
    list_display = ('name', 'phone','department', 'doctor', 'date',
                    'email', 'time','message')
    search_fields =  ('name', 'date', 'email')
    list_per_page = 100

admin.site.register(Appointment, UserAppointment)

class UserContact (admin.ModelAdmin):
    list_display = ('name', 'email', 'message' )
    search_fields = ('name', 'email')
    list_per_page = 100

admin.site.register (Contact, UserContact)