# views.py
from rest_framework import viewsets
from .models import Habit, CheckIn
from .serializers import HabitSerializer, CheckInSerializer
from django.core.serializers import serialize


class HabitViewSet(viewsets.ModelViewSet):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

class CheckInViewSet(viewsets.ModelViewSet):
    queryset = CheckIn.objects.all()
    serializer_class = CheckInSerializer


def habit_list(request):
    habits = Habit.objects.all()
    data = serialize('json', habits)
    return JsonResponse(data, safe=False)
