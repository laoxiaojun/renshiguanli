from django.db import models
from common.BaseModel import BaseModel
# Create your models here.
class User(BaseModel):
    username=models.CharField(max_length=50,verbose_name='username')
    password=models.CharField(max_length=50,verbose_name='password')
    email=models.CharField(max_length=50,verbose_name='email')
    yzm=models.CharField(max_length=50,verbose_name='yzm')
    class Meta:
        db_table = "demo_user"
        verbose_name = "用户表"