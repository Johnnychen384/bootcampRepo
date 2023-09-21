from rest_framework import serializers 
from .models import Heros

class HerosSerializer(serializers.ModelSerializer): # serializers.ModelSerializer just tells django to convert sql to JSON
    class Meta:
        model = Heros # tell django which model to use
        fields = ('id', 'name', 'age', 'powers', 'location') # tell django which fields to include
