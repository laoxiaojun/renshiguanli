from django.shortcuts import render
from django.views import View
from .models import Dept
# Create your views here.
class DeptInfo(View):
    def get(self,request):
        dept=Dept.objects.all()
        return render(request,'dept/deptinfo.html')
