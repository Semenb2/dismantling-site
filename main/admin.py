from django.contrib import admin
from .models import Service
from .models import Review

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title',)
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("author", "email", "created_at")
    search_fields = ("author", "text")
    list_filter = ("created_at",)