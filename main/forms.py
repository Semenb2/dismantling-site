from django import forms
from .models import Review


class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    phone = forms.CharField(max_length=50)
    message = forms.CharField(widget=forms.Textarea, required=False)

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['author', 'text']
        widgets = {
            'author': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ваше ім’я'}),
            'text': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Ваш відгук'}),
        }