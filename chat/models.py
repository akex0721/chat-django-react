from django.db import models


class Message(models.Model):

    author = models.SlugField()
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        ordering = ['date', 'id']
