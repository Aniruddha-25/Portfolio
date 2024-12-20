from django.urls import path
from . import views

urlpatterns = [
    path("", views.portfolio, name="portfolio"),
    path("projects/", views.projects, name="projects"),
    path("expert/", views.expert, name="expert"),
    path("about/", views.about, name="about"),
    path("contact/", views.contact, name="contact"),
]
