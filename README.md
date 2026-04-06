# Codice Frontend

Aplicación React con sistema de autenticación JWT y gestión de estado con Zustand.

## Características

- ⚛️ React 18 con Vite
- 🎨 PrimeReact para componentes UI
- 🔐 Autenticación con JWT
- 🗃️ Zustand para manejo de estado global
- 🛣️ React Router para navegación
- 📱 Diseño responsive con PrimeFlex

## Requisitos Previos

- Node.js (v16 o superior)
- npm
- Backend API corriendo en `http://localhost:3001`

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto:
```
VITE_API_URL=http://localhost:3001
```

## Desarrollo

Iniciar el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── LoginForm.jsx
│   └── PrivateRoute.jsx
├── pages/           # Páginas de la aplicación
│   ├── Login.jsx
│   └── Dashboard.jsx
├── services/        # Servicios y configuración de API
│   └── api.js
├── store/           # Stores de Zustand
│   └── authStore.js
├── App.jsx          # Componente principal
└── main.jsx         # Punto de entrada
```

## Funcionalidades

### Autenticación

El sistema de autenticación usa JWT tokens que se almacenan en localStorage:

- Login: POST `/login` con `{ email, password }`
- Respuesta: `{ token, user }`
- El token se incluye automáticamente en todas las peticiones

### Rutas

- `/login` - Página de inicio de sesión
- `/dashboard` - Panel principal (protegida)
- `/` - Redirige a dashboard

### Estado Global (Zustand)

El store de autenticación (`authStore.js`) maneja:
- Estado del usuario
- Login/Logout
- Persistencia en localStorage
- Estado de autenticación

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Compilar para producción
npm run preview  # Preview de producción
```

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [PrimeReact](https://primereact.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
