from django.db import models

# Create your models here.
class Phone(models.Model):
    name = models.CharField(max_length=32)
    number = models.IntegerField()
    
class User(models.Model):
    name = models.CharField(max_length=32)
    phonebook = models.ForeignKey(Phone, on_delete=models.CASCADE)



