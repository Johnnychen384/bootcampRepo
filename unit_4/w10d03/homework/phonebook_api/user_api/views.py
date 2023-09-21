from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .userserializers import UserSerializer
from .phoneserializers import PhoneSerializer
from .models import User
from .models import Phone

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = UserSerializer # tell django what serializer to use

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer


class PhoneList(generics.ListCreateAPIView):
    queryset = Phone.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = PhoneSerializer # tell django what serializer to use

class PhoneDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Phone.objects.all().order_by('id')
    serializer_class = PhoneSerializer