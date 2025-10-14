# PokéPal

PokéPal is a simple React Router + Vite project that uses the PokéAPI to display a list of Pokémon.  
Users can browse, view details, and favorite their Pokémon using global state management and local caching.

---

## 🧩 Project Overview

This project demonstrates:
- Functional components with the **Single Responsibility Principle**
- Routing with **React Router (framework mode)**
- Data caching using **@tanstack/react-query**
- Styling with **styled-components**
- Global state management via **React Context**
- Hot reloading with Vite

---

## 🛠 Installation & Setup

### Prerequisites
- **Node.js v20.12.0 or higher**
- **Yarn v4+** (Corepack recommended)

### 1. Clone the repository
```bash
git clone https://github.com/melissa-q-amica/poke-pal.git
cd poke-pal
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Start the development server
```bash
yarn dev
```

### 4. Open the app
Visit:
```
http://localhost:5173
```

If you encounter optimization or cache errors, clear the Vite dev cache:
```bash
rm -rf node_modules/.vite .react-router
yarn dev --force
```

---

## 🧱 Scripts

| Command | Description |
|----------|-------------|
| `yarn dev` | Start the app in development mode |

---

## 📦 Tech Stack
- **React Router v7 (framework mode)**
- **Vite**
- **React Query**
- **styled-components**
- **React Context API**

---

## 📄 License
MIT License — free to use and modify.
