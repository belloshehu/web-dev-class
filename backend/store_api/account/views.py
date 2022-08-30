from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth.models import User


class UserCreateAPIView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request, format=None, *args, **kwargs):
        password1 = request.data.get('password1', None)
        password2 = request.data.get('password2', None)
        username = request.data.get('username')
        email = request.data.get('email')
        data = {}
        serializer = None
        if password1==password2:
            data = {
                "username": username,
                "email": email,
                "password": password1
            }
            print(data)
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "password did not match"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def logout(request):
    authorization_string = request.headers['Authorization']
    token = authorization_string.slit()[1]
    user_token = Token.objects.get(key=token)
    user_token.delete()

    return Response({'message': 'logged out'})

