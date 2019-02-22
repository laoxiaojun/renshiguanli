from django.shortcuts import render
from django.views import View

# Create your views here.
class Register(View):
    def get(self,request):
        return render(request,'user/register.html')

class Login(View):
    def get(self,request):
        return render(request,'user/register.html')

class ShouYe(View):
    def get(self,request):
        return render(request, 'user/shouye.html')