from rest_framework import serializers
from .models import Location

class LocationSerializerBase(serializers.ModelSerializer): # serializers.ModelSerializer just tells django to convert sql to JSON
    class Meta:
        model = Location # tell django which model to use
        fields = ('id', 'street', 'city', 'state')
