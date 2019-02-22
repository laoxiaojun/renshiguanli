from django.db import models
from common.BaseModel import BaseModel
# Create your models here.
class Dept(BaseModel):
    deptno = models.CharField(max_length=50)
    deptname=models.CharField(max_length=50)
    deptzhuguan = models.CharField(max_length=50)
    class Meta:
        db_table = "demo_dept"
        verbose_name = "部门表"
