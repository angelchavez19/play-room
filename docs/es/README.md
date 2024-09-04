# PlayRoom

**PlayRoom** es una colección de mini-juegos interactivos desarrollada con Vue.js y NestJS, diseñada para divertirse con amigos.

## Tabla de Contenidos

- [Características](#características)
  - [🎮 Juegos incluidos](#-juegos-incluidos)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)

## Características

- 🛠️ Frontend desarrollado con Vue.js.
- 🌐 Backend utilizando NestJS.
- ⚡ Conexión en tiempo real (si es aplicable, utilizando websockets o similar).
- 🔧 Arquitectura modular para añadir más juegos en el futuro.

### 🎮 Juegos incluidos

- Piedra, Papel, Tijera
- Tic-Tac-Toe.

## Tecnologías

El proyecto utiliza las siguientes tecnologías:

- **Frontend**
  - [Vue.js](https://vuejs.org/) - Framework progresivo para la construcción de interfaces de usuario.
- **Backend**:
  - [NestJS](https://nestjs.com/) - Framework de backend basado en Node.js.

## Instalación

Sigue estos pasos para clonar e instalar el proyecto:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/angelchavez19/play-room.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd playroom
   ```

3. Instala las dependencias del frontend:

   ```bash
   cd frontend
   npm install
   ```

4. Instala las dependencias del backend:

   ```bash
   cd ../backend
   npm install
   ```

## Uso

### Ejecutar el Frontend (Vue.js)

Para iniciar el servidor de desarrollo del frontend:

```bash
cd frontend
npm run dev
```

El servidor de desarrollo estará corriendo en `http://localhost:5173`.

### Ejecutar el Backend (NestJS)

Para iniciar el servidor del backend:

```bash
cd backend
npm run start
```

El servidor de NestJS estará corriendo en `http://localhost:8000`.
