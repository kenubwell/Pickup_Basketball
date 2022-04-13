from django.urls import path
from . import views

urlpatterns = [
    path('court/', views.CourtsActions.as_view()),
    path('comment/<int:pk>/', views.CommentActions.as_view()),
    path('court/<int:pk>/', views.CourtLike.as_view()),
    path('comment/reply/<int:pk>/', views.ReplyDetails.as_view()),
    path('payment/', views.PaymentPost.as_view()),
    path('hsgames/', views.HighSchoolGames.as_view()),
    path('ccgames/', views.CollegeGames.as_view()),
]