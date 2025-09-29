from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='services/', blank=True, null=True)

    def __str__(self):
        return self.title
from django.db import models

class Review(models.Model):
    author = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)  # 👈 добавили email
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author}: {self.text[:30]}"