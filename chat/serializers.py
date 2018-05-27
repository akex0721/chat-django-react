from rest_framework import serializers

from .models import Message


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = ('id', 'author', 'content', 'date')
        read_only_fields = ('id', 'date')
