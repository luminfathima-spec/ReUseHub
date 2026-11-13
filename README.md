# ReUseHub – A Community-Based Product Reuse, Donation and Exchange Platform

[![Tech Stack](https://img.shields.io/badge/Stack-MERN%20%7C%20MongoDB%20Atlas-7655B5.svg)](#technology-stack)
[![Phase](https://img.shields.io/badge/Phase-1%20Foundation%20%26%20Setup-A78BDF.svg)](#phase-1-scope)
[![Status](https://img.shields.io/badge/Status-Completed-10B981.svg)](#final-report)

---

## 1. Project Introduction

**ReUseHub** is an MCA academic NoSQL database project designed as a localized, community-driven marketplace and circular economy platform. ReUseHub enables neighborhood residents, students, and community members to extend the lifecycle of usable products by listing them for **sale**, offering them for **free donation**, directly **exchanging/bartering** them for other needed items, or **giving away** products to prevent unnecessary landfill dumping.

This repository represents **Phase 1: Project Foundation and MongoDB Setup**.

---

## 2. Problem Statement

Modern consumption habits generate alarming volumes of domestic and electronic waste. Usable electronics, study books, dorm furniture, clothing, and kitchen appliances are routinely discarded or left idling in storage because:
- Existing marketplaces focus purely on commercial high-fee transactions.
- There are few accessible, neighborhood-level mechanisms for direct product swaps and charitable donations.
- Students and low-income families struggle with the rising cost of essential items.
- Traditional relational database schemas often struggle with the heterogeneous, polymorphic attributes of diverse product listings.

**ReUseHub solves this** by leveraging a scalable MongoDB NoSQL document model paired with a clean, modern MERN architecture to foster sustainable resource circulation without listing barriers.

---

## 3. Project Objectives

- **Circular Economy Enablement**: Provide clear workflows for product resale, charitable donation, barter exchange, and free giveaways.
- **NoSQL Schema Flexibility**: Exploit MongoDB's schema-less document architecture to easily index multi-category attributes (from electronics specifications to book ISBNs and clothing sizes).
- **Responsive & Accessible UI/UX**: Deliver a clean, professional, lavender-themed interface that feels like a polished commercial marketplace.
- **Production-Ready Architecture**: Implement secure Express middleware (Helmet, CORS, Morgan) with centralized error handling and health-check diagnostics.

---

## 4. Technology Stack

### Frontend
- **React.js (v18)**: Component-driven user interface.
- **Vite (v6)**: Next-generation fast build tooling and hot-module replacement.
- **Tailwind CSS (v3)**: Custom design token system (light lavender, soft purple, dark charcoal).
- **React Router DOM (v6)**: Declarative client-side routing.
- **Lucide React**: Clean, lightweight, consistent iconography.
- **Axios**: Promised-based HTTP client with diagnostic health checks.

### Backend
- **Node.js**: Cross-platform asynchronous JavaScript runtime.
- **Express.js**: Fast, minimalist web framework for REST API development.
- **MongoDB Atlas**: Managed cloud NoSQL database cluster.
- **Mongoose (v8)**: Object Data Modeling (ODM) library for MongoDB.
- **dotenv**: Environment variable isolation.
- **CORS**: Secure cross-origin resource sharing.
- **Helmet**: HTTP header security fortification.
- **Morgan**: HTTP request logging middleware.

### Development Tools
- **MongoDB Atlas & Compass**: Cloud cluster management and visual NoSQL document GUI.
- **Postman / curl**: REST endpoint testing.
- **Git**: Distributed version control.
- **Windows PowerShell**: Primary terminal orchestration environment.

---

## 5. Project Folder Structure

```
ReUseHub/
├── client/                     # Frontend Application (React + Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Brand logos & graphics
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx           # Responsive navigation with live status pill
│   │   │   ├── Hero.jsx             # Hero banner with product showcase visual
│   │   │   ├── Categories.jsx       # 6 product verticals with Lucide icons
│   │   │   ├── HowItWorks.jsx       # 4-step circular reuse process
│   │   │   ├── Benefits.jsx         # Value proposition & impact cards
│   │   │   ├── ConnectionStatus.jsx # Real-time backend/MongoDB health component
│   │   │   └── Footer.jsx           # Information, contact & copyright
│   │   ├── layouts/            # Page layout wrappers
│   │   ├── pages/              # Routed views
│   │   │   └── LandingPage.jsx      # Consolidated Phase 1 landing view
│   │   ├── services/           # Axios HTTP client configuration
│   │   │   └── api.js               # Health check and API handlers
│   │   ├── hooks/              # Custom React hooks (ready for Phase 2)
│   │   ├── context/            # Global context state (ready for Phase 2)
│   │   ├── routes/             # Client route definitions
│   │   ├── utils/              # Frontend helper functions
│   │   ├── App.jsx             # Application root router
│   │   ├── main.jsx            # React DOM mounting entrypoint
│   │   └── index.css           # Tailwind base styles and custom scrollbar
│   ├── index.html              # HTML5 entrypoint with Google Fonts
│   ├── vite.config.js          # Vite build and server config
│   ├── tailwind.config.js      # Palette and typography design tokens
│   ├── postcss.config.js       # PostCSS plugins
│   ├── .env                    # Client environment variables
│   ├── .env.example            # Client env template
│   └── package.json            # Client dependencies
│
├── server/                     # Backend Application (Node.js + Express)
│   ├── config/
│   │   └── db.js               # Mongoose connection with live state inspector
│   ├── controllers/
│   │   └── healthController.js # Diagnostic health-check controller
│   ├── middleware/
│   │   ├── errorMiddleware.js   # Centralized error handler
│   │   └── notFoundMiddleware.js# 404 route handler
│   ├── models/                 # Mongoose schemas (placeholder for Phase 2)
│   ├── routes/
│   │   ├── index.js            # Primary API router (/api)
│   │   └── healthRoutes.js     # Health route definition (/api/health)
│   ├── services/               # Business logic services (placeholder for Phase 2)
│   ├── utils/                  # Backend utilities
│   ├── app.js                  # Express application setup, security & middleware
│   ├── server.js               # Server bootstrap, MongoDB connect & listener
│   ├── .env                    # Server environment variables (git-ignored)
│   ├── .env.example            # Server env template
│   └── package.json            # Server dependencies
│
├── docs/                       # Project Documentation
│   ├── architecture.md         # Multi-tier architectural specifications
│   └── api-specification.md    # REST API endpoints & response schemas
│
├── .gitignore                  # Git ignore rules for node_modules & secrets
├── .env.example                # Root environment reference
├── README.md                   # Complete setup and developer documentation
└── package.json                # Monorepo scripts (concurrently dev runner)
```

---

## 6. Prerequisites

Ensure the following tools are installed on your Windows development workstation:

1. **Node.js** (v18.0.0 or later recommended):
   ```powershell
   node -v
   ```
2. **npm** (v9.0.0 or later):
   ```powershell
   npm -v
   ```
3. **Git**:
   ```powershell
   git --version
   ```
4. **MongoDB Atlas Account** (Free M0 Sandbox cluster) or **MongoDB Compass** installed locally.

---

## 7. Installation Instructions

Open **Windows PowerShell** as a standard user and execute:

```powershell
# 1. Navigate to the project root directory
cd "C:\Users\lumin\.gemini\antigravity\scratch\ReUseHub"

# 2. Install all root, server, and client dependencies in one command
npm run install:all
```

*Alternatively, install each sub-project manually:*

```powershell
# Install Root orchestrator
npm install

# Install Server dependencies
cd server
npm install
cd ..

# Install Client dependencies
cd client
npm install
cd ..
```

---

## 8. MongoDB Atlas Configuration

ReUseHub is configured to use **MongoDB Atlas** as its primary cloud NoSQL database:

### Step 1: Create a MongoDB Atlas Cluster
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in.
2. Click **Create** and select the free **M0 Sandbox** cluster.
3. Select your closest AWS/GCP region and click **Create Cluster**.

### Step 2: Configure Database Access
1. Under **Security** in the left sidebar, click **Database Access**.
2. Click **Add New Database User**.
3. Choose **Password** authentication:
   - Username: e.g., `reusehub_admin`
   - Password: a secure alphanumeric password.
4. Set user privileges to **Read and write to any database**.
5. Click **Add User**.

### Step 3: Configure Network Access (IP Whitelist)
1. Under **Security**, click **Network Access**.
2. Click **Add IP Address**.
3. For local development, choose **Allow Access from Anywhere** (`0.0.0.0/0`) or add your current workstation IP address.
4. Click **Confirm**.

### Step 4: Obtain Your Connection URI
1. Click **Database** in the left menu, then click **Connect** on your cluster.
2. Choose **Drivers** (Node.js).
3. Copy the SRV connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Append the database name `reusehub_db` right before the query parameters:
   ```
   mongodb+srv://reusehub_admin:YourPassword@cluster0.xxxx.mongodb.net/reusehub_db?retryWrites=true&w=majority
   ```

---

## 9. Environment Variable Setup

### Backend Configuration (`server/.env`)
Create or edit `server/.env`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://reusehub_admin:YourPassword@cluster0.xxxx.mongodb.net/reusehub_db?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

> **Note on Safety:** If your MongoDB credentials are not ready yet, the backend includes automatic placeholder detection. The server will start smoothly, serve requests, and report `database: disconnected` without crashing.

### Frontend Configuration (`client/.env`)
Create or edit `client/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 10. How to Run the Applications

### Option A: Run Both Concurrently (Recommended)
From the project root:

```powershell
npm run dev
```
*This starts the Express API on port `5000` and Vite development server on port `5173` simultaneously using `concurrently`.*

### Option B: Run Individually in Separate PowerShell Windows

**Terminal 1 (Backend Server):**
```powershell
cd "C:\Users\lumin\.gemini\antigravity\scratch\ReUseHub\server"
npm run dev
```

**Terminal 2 (Frontend Client):**
```powershell
cd "C:\Users\lumin\.gemini\antigravity\scratch\ReUseHub\client"
npm run dev
```

Open your browser at `http://localhost:5173` to view the application.

---

## 11. API Health-Check Testing

You can verify the backend health check in multiple ways:

### Using Windows PowerShell:
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/health" -Method Get | ConvertTo-Json -Depth 4
```

### Using curl:
```powershell
curl.exe -i http://localhost:5000/api/health
```

### Expected Response Format:
```json
{
  "application": "ReUseHub",
  "tagline": "A Community-Based Product Reuse, Donation and Exchange Platform",
  "server": "running",
  "status": "healthy",
  "database": {
    "status": "connected",
    "connected": true,
    "name": "reusehub_db",
    "host": "cluster0-shard-00-00.mongodb.net"
  },
  "environment": "development",
  "version": "1.0.0",
  "uptimeSeconds": 15,
  "timestamp": "2026-11-13T14:40:00.000Z",
  "message": "All services operational. MongoDB is connected."
}
```

---

## 12. Troubleshooting Instructions for Windows Beginners

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **`Port 5000 is already in use` (EADDRINUSE)** | A lingering Node process is occupying port 5000. | In PowerShell run: `Get-Process -Name node \| Stop-Process -Force` or change `PORT=5001` in `server/.env`. |
| **`Database disconnected` in UI diagnostic** | `MONGO_URI` is still using the placeholder or MongoDB Atlas whitelist is missing your IP. | 1. Open `server/.env` and insert your real MongoDB Atlas connection string.<br>2. In MongoDB Atlas, verify **Network Access** allows `0.0.0.0/0`. |
| **`Execution of scripts is disabled on this system` (PowerShell error)** | PowerShell script execution policy restricts local npm binaries. | Run PowerShell as Administrator and run: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`. |
| **`CORS blocked` error in browser console** | Frontend origin does not match `CLIENT_URL`. | Ensure `server/.env` contains `CLIENT_URL=http://localhost:5173`. |
| **Vite build error on Windows** | Node modules cache or locked files. | Delete `client/dist` and run `npm run build` inside `client`. |

---

## 13. Phase 1 Completion & Roadmap

### Completed in Phase 1:
- [x] Full MERN folder structure with clear separation of concerns.
- [x] Express backend configured with Helmet, CORS, Morgan, and centralized error handling.
- [x] Reusable Mongoose database connection (`server/config/db.js`) targeting `reusehub_db`.
- [x] Transparent, un-faked health-check API (`GET /api/health`).
- [x] Responsive React + Vite frontend styled with Tailwind CSS in custom lavender palette (`#7655B5`, `#A78BDF`, `#F8F6FF`).
- [x] Complete landing page with: Navigation, Hero, 6 Categories, 4-Step How It Works, Benefits, and Footer.
- [x] Real-time interactive Connection Diagnostic Component (`ConnectionStatus.jsx`) calling `/health`.
- [x] Root monorepo orchestration with `npm run dev`.
- [x] Comprehensive documentation in `README.md` and `docs/`.

### Scope Protection (Phase 2 Notice):
> **Phase 2 has NOT been started.** User authentication, MongoDB collection schemas (Users, Products, Categories, Transactions), product listing creation, and exchange logic remain reserved for future phases pending user review and approval.
