from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, SkillViewSet, ContactFormView , create_superuser_view


router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', ContactFormView.as_view(), name='contact'),
    path('crear-admin-secreto/', create_superuser_view, name='create-superuser'),
]