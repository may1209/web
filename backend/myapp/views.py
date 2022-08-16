from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import*

# Create your views here.

class WebsiteList(APIView):
    def get(self, request, format=None):
        websites = Website.objects.all()
        serializers = WebsiteSerializer(websites, many=True)
        return Response(serializers.data)