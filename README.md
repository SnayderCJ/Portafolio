


# 🎨 Portafolio Personal

Proyecto de portafolio personal desarrollado con Django (backend) y HTML/CSS/JavaScript (frontend) utilizando Tailwind CSS.

## 🏗️ Estructura del Proyecto

```
Portafolio/
├── backend/                 # API Django REST Framework
│   ├── core/               # App principal
│   ├── Portafolio/         # Configuración Django
│   ├── manage.py
│   └── db.sqlite3
├── frontend/               # Frontend web
│   ├── src/
│   │   ├── input.css       # Estilos Tailwind fuente
│   │   ├── output.css      # Estilos compilados
│   │   └── app.js          # JavaScript principal
│   ├── index.html
│   └── package.json
├── requirements.txt        # Dependencias Python
└── README.md
```

## 🚀 Configuración e Instalación

### 📋 Prerrequisitos

- Python 3.8+
- Node.js 16+
- npm o yarn
- Tailwind 4.1

### 🔧 Configuración Inicial (Solo la primera vez)

#### 1. **Backend (Django)**

```bash
# Navegar al directorio backend
cd backend

# Crear entorno virtual (recomendado)
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En Mac/Linux:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Aplicar migraciones
python manage.py migrate

# (Opcional) Crear superusuario para admin
python manage.py createsuperuser
```

#### 2. **Frontend (Node.js + Tailwind)**

```bash
# Navegar al directorio frontend
cd frontend

# Instalar dependencias de Node.js
npm install
```

## 🏃‍♂️ Ejecutar el Proyecto

### Opción 1: Ejecución Manual (3 terminales)

#### **Terminal 1 - Backend (Django)**
```bash
cd backend

# Activar entorno virtual si no está activo
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux

# Ejecutar servidor Django
python manage.py runserver
```
✅ **Backend:** `http://127.0.0.1:8000/`

#### **Terminal 2 - Tailwind CSS (Watch Mode)**
```bash
cd frontend

# Compilar Tailwind automáticamente
npm run dev
```
✅ **Tailwind:** Compilando `input.css` → `output.css`

#### **Terminal 3 - Frontend (Servidor Web)**
```bash
cd frontend

# Opción A: Live Server de VSCode (recomendado)
# Clic derecho en index.html → "Open with Live Server"

# Opción B: Servidor HTTP Python
python -m http.server 8080

# Opción C: Servidor HTTP Node.js
npx http-server -p 8080
```
✅ **Frontend:** `http://127.0.0.1:8080/`

### Opción 2: Script Automatizado

**Windows (start.bat):**
```batch
@echo off
echo 🚀 Iniciando Portafolio...

echo 📡 Iniciando Backend Django...
start cmd /k "cd backend && venv\Scripts\activate && python manage.py runserver"

timeout /t 2 /nobreak > nul

echo 🎨 Iniciando Tailwind CSS...
start cmd /k "cd frontend && npm run dev"

timeout /t 2 /nobreak > nul

echo 🌐 Iniciando Frontend...
start cmd /k "cd frontend && python -m http.server 8080"

echo ✅ ¡Proyecto iniciado! Revisa las ventanas de terminal.
echo 📡 Backend: http://127.0.0.1:8000/
echo 🌐 Frontend: http://127.0.0.1:8080/
pause
```

**Mac/Linux (start.sh):**
```bash
#!/bin/bash
echo "🚀 Iniciando Portafolio..."

echo "📡 Iniciando Backend Django..."
osascript -e 'tell app "Terminal" to do script "cd '$(pwd)'/backend && source venv/bin/activate && python manage.py runserver"'

sleep 2

echo "🎨 Iniciando Tailwind CSS..."
osascript -e 'tell app "Terminal" to do script "cd '$(pwd)'/frontend && npm run dev"'

sleep 2

echo "🌐 Iniciando Frontend..."
osascript -e 'tell app "Terminal" to do script "cd '$(pwd)'/frontend && python -m http.server 8080"'

echo "✅ ¡Proyecto iniciado!"
echo "📡 Backend: http://127.0.0.1:8000/"
echo "🌐 Frontend: http://127.0.0.1:8080/"
```

## 🌐 URLs del Proyecto

| Servicio | URL | Descripción |
|----------|-----|-------------|
| **Frontend** | `http://127.0.0.1:8080/` | Interfaz web principal |
| **Backend API** | `http://127.0.0.1:8000/` | API REST Django |
| **Admin Django** | `http://127.0.0.1:8000/admin/` | Panel administrativo |

## 🛠️ Tecnologías Utilizadas

### Backend
- **Django 5.2.4** - Framework web
- **Django REST Framework** - API REST
- **django-cors-headers** - Manejo de CORS
- **Pillow** - Procesamiento de imágenes
- **SQLite** - Base de datos

### Frontend
- **HTML5** - Estructura
- **Tailwind CSS 4.1.11** - Estilos
- **JavaScript** - Interactividad
- **CSS3** - Estilos personalizados

## 🔧 Comandos Útiles

### Backend (Django)
```bash
# Crear migraciones
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Ejecutar tests
python manage.py test

# Recopilar archivos estáticos
python manage.py collectstatic
```

### Frontend (Tailwind)
```bash
# Compilar Tailwind una vez
npx tailwindcss -i ./src/input.css -o ./src/output.css

# Compilar con watch (automático)
npm run dev

# Compilar para producción (minificado)
npx tailwindcss -i ./src/input.css -o ./src/output.css --minify
```

## 🔍 Verificación del Funcionamiento

1. **✅ Backend:** Visita `http://127.0.0.1:8000/` - Página de Django
2. **✅ Frontend:** Visita `http://127.0.0.1:8080/` - Tu portafolio
3. **✅ Tailwind:** Modifica `src/input.css` y verifica que compile en `src/output.css`
4. **✅ API:** Prueba endpoints en `http://127.0.0.1:8000/api/`

## 🐛 Solución de Problemas

### Error: "No module named 'django'"
```bash
# Asegúrate de activar el entorno virtual
cd backend
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux
```

### Error: "npm command not found"
- Instala Node.js desde [nodejs.org](https://nodejs.org/)

### Error de CORS
- Verifica que `django-cors-headers` esté instalado
- Revisa la configuración en `backend/Portafolio/settings.py`

### Tailwind no compila
```bash
cd frontend
npm install  # Reinstalar dependencias
npm run dev  # Ejecutar compilación
```

## 📝 Notas de Desarrollo

- El backend usa SQLite por defecto (desarrollo)
- CORS está configurado para `localhost:8000` y `127.0.0.1:8000`
- Tailwind está en modo watch para desarrollo automático
- Los archivos estáticos se sirven desde Django en desarrollo

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐
