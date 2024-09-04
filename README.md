Aquí tienes la traducción al inglés:

# PlayRoom

**PlayRoom** is a collection of interactive mini-games developed with Vue.js and NestJS, designed for having fun with friends.

## Table of Contents

- [Features](#features)
  - [🎮 Included Games](#-included-games)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

## Features

- 🛠️ Frontend developed with Vue.js.
- 🌐 Backend using NestJS.
- ⚡ Real-time connection (if applicable, using websockets or similar).
- 🔧 Modular architecture for adding more games in the future.

### 🎮 Included Games

- Rock, Paper, Scissors
- Tic-Tac-Toe.

## Technologies

The project uses the following technologies:

- **Frontend**
  - [Vue.js](https://vuejs.org/) - Progressive framework for building user interfaces.
- **Backend**
  - [NestJS](https://nestjs.com/) - Backend framework based on Node.js.

## Installation

Follow these steps to clone and install the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/angelchavez19/play-room.git
   ```

2. Access the project directory:

   ```bash
   cd playroom
   ```

3. Install the frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Install the backend dependencies:

   ```bash
   cd ../backend
   npm install
   ```

## Usage

### Running the Frontend (Vue.js)

To start the development server for the frontend:

```bash
cd frontend
npm run dev
```

The development server will be running at `http://localhost:5173`.

### Running the Backend (NestJS)

To start the backend server:

```bash
cd backend
npm run start
```

The NestJS server will be running at `http://localhost:8000`.
