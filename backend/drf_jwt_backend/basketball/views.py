from http import server
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from .models import Comment, Reply, Payment, Court
from .serializers import CommentSerializer, ReplySerializer, PaymentSerializer, CourtSerializer



@permission_classes([AllowAny])
class CourtsActions(APIView):

    def get(self, request, format=None):
        courts = Court.objects.all()
        serializers = CourtSerializer(courts, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializers = CommentSerializer(data=request.data)
        # the following validates that API user input is true or accurate to the database
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)


@permission_classes([IsAuthenticated])
class CommentActions(APIView):

    # def post(self, request, pk):
    #     court_id = pk
    #     temp_data = request.data
    #     temp_data['court_id'] = court_id
    #     serializers = CommentSerializer(data=temp_data)
    #     serializers.is_valid(raise_exception=True)
    #     serializers.save(user=request.user)
    #     return Response(serializers.data, status=status.HTTP_201_CREATED)

    def get(self, request, pk):
        court_comments = Comment.objects.filter(court_id = pk)
        serializers = CommentSerializer(court_comments, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, format=None):
        comment = get_object_or_404(Comment, pk=pk)
        comment.delete()
        return Response(status=status.HTTP_200_OK)


@permission_classes([IsAuthenticated])
class CourtLike(APIView):

    def get(self, request, pk):
        court = Court.objects.filter(id = pk)
        serializers = CourtSerializer(court, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        court = get_object_or_404(Court, pk=pk)
        serializer = CourtSerializer(court)
        court.likes += 1
        court.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def patch(self, request, pk, format=None):
        court = get_object_or_404(Court, pk=pk)
        serializer = CourtSerializer(court)
        court.dislikes += 1
        court.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    

@permission_classes([IsAuthenticated])
class ReplyDetails(APIView):

    def get(self, request, pk):
        replies = Reply.objects.filter(comment_id = pk)
        serializers = ReplySerializer(replies, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)


    def post(self, request, pk):
        comment_id = pk
        temp_data = request.data
        temp_data['comment_id'] = comment_id
        serializers = ReplySerializer(data=temp_data)
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)


@permission_classes([IsAuthenticated])
class PaymentPost(APIView):
    
    def post(self, request):
        serializers = PaymentSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save(user=request.user)
        return Response(serializers.data, status=status.HTTP_201_CREATED)

