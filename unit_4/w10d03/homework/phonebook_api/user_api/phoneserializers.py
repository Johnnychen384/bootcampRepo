from rest_framework import serializers 
from .models import Phone


class PhoneSerializer(serializers.ModelSerializer): # serializers.ModelSerializer just tells django to convert sql to JSON
    class Meta:
        model = Phone # tell django which model to use
        fields = ('id', 'name', 'number',) # tell django which fields to include