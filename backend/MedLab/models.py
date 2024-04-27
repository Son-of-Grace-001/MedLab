from django.db import models

# Create your models here.

class Appointment(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    department = models.CharField(max_length=200)
    doctor = models.CharField(max_length=200)
    email = models.EmailField()
    time = models.TimeField()
    date = models.DateField()
    message = models.TextField()

    def __str__(self):
        return self.name

