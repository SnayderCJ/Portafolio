from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import Project, Skill
from .serializers import ProjectSerializer, SkillSerializer
from django.contrib.auth.models import User
from django.http import HttpResponse

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    
class ContactFormView(APIView):
    def post(self, request, *args, **kwargs):
        name = request.data.get('name')
        email = request.data.get('email')
        subject = request.data.get('subject')
        message = request.data.get('message')

        if not all([name, email, subject, message]):
            return Response({'error': 'Todos los campos son obligatorios.'}, status=status.HTTP_400_BAD_REQUEST)

        full_message = f"Nombre: {name}\nEmail: {email}\n\nMensaje:\n{message}"

        try:
            send_mail(
                subject=f"Nuevo mensaje de tu Portafolio: {subject}",
                message=full_message,
                from_email='noreply@miportafolio.com',
                recipient_list=['cedenosnyder@gmail.com'], 
            )
            return Response({'success': 'Mensaje enviado correctamente.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Hubo un error al enviar el mensaje.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
def create_superuser_view(request):
    try:
        # ¡IMPORTANTE! Cambia el username, email y password por los que tú quieras
        User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
        return HttpResponse("<h1>¡Superusuario creado con éxito!</h1><p>Ya puedes borrar este código de tus vistas.</p>")
    except Exception as e:
        return HttpResponse(f"<h1>Error al crear el superusuario</h1><p>{e}</p><p>Es posible que el usuario ya exista.</p>")