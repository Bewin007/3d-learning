from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='registration'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('event/',EventAPI.as_view())
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)