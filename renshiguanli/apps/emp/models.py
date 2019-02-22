from django.db import models
from common.BaseModel import BaseModel
# Create your models here.
class Emp(BaseModel):
    empno = models.CharField(max_length=50)
    empname=models.CharField(max_length=50)
    empsex = models.CharField(max_length=50)
    empage=models.CharField(max_length=50)
    ruzhidatatime = models.CharField(max_length=50)
    phoneno=models.CharField(max_length=50,default='')
    deptno=models.CharField(max_length=50)

    class Meta:
        db_table = "demo_emp"
        verbose_name = "员工表"
