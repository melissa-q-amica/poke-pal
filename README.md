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

#### Use nvm to install Node (recommended)

If you use `nvm` to manage Node versions, run the following to install and use the exact version this project was developed with:

```bash
# install Node v20.12.0 if you don't have it
nvm install 20.12.0
# switch to Node v20.12.0 for this shell
nvm use 20.12.0
# verify
node -v
```

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

---

## 🛠️ Troubleshooting (Safari-specific)

If the app doesn't load correctly in Safari (you may see errors like "Outdated Optimize Dep" or cached files being used), try the following steps:

1. Enable the Develop menu in Safari (if not already enabled):
	- Open Safari Preferences → Advanced → check "Show Develop menu in menu bar".

2. Empty Caches:
	- From the menu bar choose Develop → Empty Caches.
	- This forces Safari to drop any cached dev server files that can cause stale optimized dependency responses.

3. Disable the Page Cache while testing (optional):
	- In the Develop menu, ensure "Disable Page Cache" (or "Use Page Cache") is set so Safari will always fetch fresh resources during development.

4. Hard reload the page:
	- Press Option+Command+R to perform a hard reload.

If issues persist, delete Vite's dev cache and restart the dev server:

```bash
rm -rf node_modules/.vite
yarn dev
```

These steps fix the majority of caching-related issues you may see while developing with Vite and Safari.
