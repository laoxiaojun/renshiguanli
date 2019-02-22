from django.shortcuts import render
from django.views import View
from .models import Emp
# Create your views here.
class EmpInfo(View):
    def get(self,request):
        emp=Emp.objects.all()
        return render(request,'emp/empinfo.html')

