from django.db import models

class Note(models.Model):
    body= models.TextField(null=True,blank=True)
    updated_at= models.DateTimeField(auto_now=True)
    created_at= models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.body[:50]