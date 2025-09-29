from django.shortcuts import render
from .models import Review
from .forms import ReviewForm


def home(request):
    return render(request, 'main/home.html')

def about(request):
    return render(request, 'main/about.html')

def services(request):
    return render(request, 'main/services.html')

def gallery(request):
    return render(request, 'main/gallery.html')

def reviews(request):
    reviews = [
        {"author": "Сергій", "text": "Чудова робота, швидко та якісно!"},
        {"author": "Анна", "text": "Все пройшло без проблем, рекомендую!"},
        {"author": "Ігор", "text": "Робота була виконана вчасно, дуже задоволений!"}
    ]
    return render(request, 'main/reviews.html', {'reviews': reviews})

def contact(request):
    return render(request, 'main/contact.html')


def reviews(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('reviews')  # обновляем страницу после добавления
    else:
        form = ReviewForm()

    reviews = Review.objects.order_by('-created_at')  # новые сверху
    return render(request, 'main/reviews.html', {'form': form, 'reviews': reviews})