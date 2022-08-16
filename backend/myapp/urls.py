from django.urls import path, include
from . import views

urlpatterns = [
    path('website/', views.WebsiteList.as_view())
]