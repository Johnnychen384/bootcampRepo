from django.db import models

# Create your models here.
class Location(models.Model):
    Street = models.CharField(max_length=32)
    City = models.CharField(max_length=32)
    State = models.CharField(max_length=32)