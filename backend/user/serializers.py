from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'register_no','password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class ListEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model= Events
        fields = ['id','title','sub_title']

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'