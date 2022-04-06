from django.contrib import admin
from .models import Court, Comment, Reply, Payment

admin.site.register(Court) 
admin.site.register(Comment) 
admin.site.register(Reply) 
admin.site.register(Payment) 
