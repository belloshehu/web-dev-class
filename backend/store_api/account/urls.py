from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('auth/', obtain_auth_token),
    path('logout/', views.logout),
    path('signup', views.UserCreateAPIView.as_view())
]