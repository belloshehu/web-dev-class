from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for User models
    """

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email'
            'passowrd',
        )