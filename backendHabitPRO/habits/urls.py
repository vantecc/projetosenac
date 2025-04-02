from django.urls import path, include
from .views import HabitViewSet, CheckInViewSet, register_user, login_user
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'habits', HabitViewSet, basename='habit')
router.register(r'checkins', CheckInViewSet, basename='checkin')

urlpatterns = [
    path('register/', register_user),
    path('login/', login_user),
    path('', include(router.urls)),   
]
