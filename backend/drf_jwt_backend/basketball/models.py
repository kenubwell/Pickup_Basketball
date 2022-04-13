from django.db import models
from django.contrib.auth.models import User

class Court(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255) 
    state = models.CharField(max_length=25)
    zipcode = models.CharField(max_length=25)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  
    text = models.CharField(max_length=255)
    court_id = models.IntegerField()


class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, null= True, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cardnumber = models.CharField(max_length=25)
    expdate = models.DateField('%m/%y')
    cvcnumber = models.IntegerField()

class HSGames(models.Model):
    date = models.CharField(max_length=50)
    game = models.CharField(max_length=255)
    location = models.CharField(max_length=100)
    link = models.URLField(max_length=255)

class CCGames(models.Model):
    date = models.CharField(max_length=50)
    game = models.CharField(max_length=255)
    location = models.CharField(max_length=100)
    link = models.URLField(max_length=255)

