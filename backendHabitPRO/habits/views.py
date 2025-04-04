# views.py
from rest_framework import viewsets
from .models import Habit, CheckIn
from .serializers import HabitSerializer, CheckInSerializer
from django.core.serializers import serialize
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate



class HabitViewSet(viewsets.ModelViewSet):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer

    # def get_queryset(self):
    #     return self.queryset.filter(user=self.request.user)

class CheckInViewSet(viewsets.ModelViewSet):
    queryset = CheckIn.objects.all()
    serializer_class = CheckInSerializer


def habit_list(request):
    habits = Habit.objects.all()
    data = serialize('json', habits)
    return JsonResponse(data, safe=False)



@csrf_exempt
@api_view(['POST'])

def register_user(request):

    data = request.data
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return Response({"message": "Preencha todos os campos."}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=email).exists():
        return Response({"message": "Usuário já existe."}, status=status.HTTP_400_BAD_REQUEST)

    User.objects.create(
        username=email,
        first_name=name,
        email=email,
        password=make_password(password)
    )

    return Response({"message": "Usuário criado com sucesso!"}, status=status.HTTP_201_CREATED)



@csrf_exempt
@api_view(['POST'])
def login_user(request):
    data = request.data
    email = data.get("email")
    password = data.get("password")

    user = authenticate(username=email, password=password)

    if user is not None:
        return Response({
            "message": "Login realizado com sucesso.",
            "user": {
                "id": user.id,
                "name": user.first_name,
                "email": user.email
            }
        }, status=status.HTTP_200_OK)
    else:
        return Response({"message": "Credenciais inválidas."}, status=status.HTTP_401_UNAUTHORIZED)

