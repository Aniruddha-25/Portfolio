from django.shortcuts import render


def portfolio(request):
    return render(request, "portfolio/portfolio.html")


def projects(request):
    return render(request, "portfolio/projects.html")


def expert(request):
    return render(request, "portfolio/expert.html")


def about(request):
    return render(request, "portfolio/about.html")


def contact(request):
    return render(request, "portfolio/contact.html")
