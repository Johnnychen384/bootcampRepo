from django.db import models

# Create your models here.
class Heros(models.Model):
    name = models.CharField(max_length=32)
    age = models.IntegerField()
    powers = models.CharField(max_length=50)
    location = models.CharField(max_length=32)
