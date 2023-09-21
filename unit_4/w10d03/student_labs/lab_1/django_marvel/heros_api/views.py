from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import HerosSerializer
from .models import Heros

class HerosList(generics.ListCreateAPIView):
    queryset = Heros.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = HerosSerializer # tell django what serializer to use

class HerosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Heros.objects.all().order_by('id')
    serializer_class = HerosSerializer
