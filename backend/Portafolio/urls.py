from django.contrib import admin
from django.urls import path, include
from django.conf import settings # Para servir archivos estáticos/media en desarrollo
from django.conf.urls.static import static # Para servir archivos estáticos/media en desarrollo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')), # Las URLs de tu API
]

# Configuración para servir archivos de medios en desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)