from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializer import CompaniesSerializer
from .models import Companies

class CompaniesList(generics.ListCreateAPIView):
    queryset = Companies.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = CompaniesSerializer # tell django what serializer to use

class CompaniesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Companies.objects.all().order_by('id')
    serializer_class = CompaniesSerializer
