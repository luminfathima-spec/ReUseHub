# ReUseHub – System Architecture & Design (Phase 1)

## 1. Project Overview
**ReUseHub** is a community-driven circular economy platform built for an MCA academic NoSQL database project. The primary goal is to encourage reuse, reduce electronic and domestic waste, enable donations, and facilitate local peer-to-peer exchanges without friction.

```
+-----------------------------------------------------------------------------------+
|                                 CLIENT LAYER                                      |
|  React 18 + Vite SPA | Tailwind CSS | React Router DOM | Lucide Icons | Axios    |
+-----------------------------------------------------------------------------------+
                                        |
                             REST APIs / JSON (HTTP)
                                        |
+-----------------------------------------------------------------------------------+
|                                 SERVER LAYER                                      |
|  Node.js + Express.js | Helmet | CORS | Morgan | Centralized Error Middleware     |
+-----------------------------------------------------------------------------------+
                                        |
                               Mongoose ODM Driver
                                        |
+-----------------------------------------------------------------------------------+
|                                DATABASE LAYER                                     |
|  MongoDB Atlas (Cloud NoSQL Cluster) | Database: `reusehub_db`                     |
+-----------------------------------------------------------------------------------+
```

---

## 2. Layered Architecture Principles

### 2.1 Presentation Layer (`/client`)
- **Vite & React 18**: High performance compilation and fast HMR development.
- **Tailwind CSS**: Strict custom design tokens for brand consistency (`brand-primary`, `brand-secondary`, `brand-background`, `brand-text`, `brand-muted`).
- **Axios HTTP Client**: Encapsulated in `/client/src/services/api.js` with base URL configuration and uniform health diagnostics.
- **Component Hierarchy**:
  - `Navbar`: Brand identification, responsive navigation drawer, and live diagnostic badge.
  - `Hero`: Clear visual hook, CTA buttons, and interactive circular showcase visual.
  - `ConnectionStatus`: Transparent real-time health indicator for backend and database connectivity.
  - `Categories`: 6 core product verticals (Electronics, Furniture, Books, Clothing, Appliances, Sports).
  - `HowItWorks`: 4-step user workflow visualization.
  - `Benefits`: Value proposition emphasizing sustainability, economic savings, and community empowerment.
  - `Footer`: Academic attribution, resource links, and technical specifications.

### 2.2 Application & Routing Layer (`/server`)
- **Express 4.x Pipeline**:
  1. `helmet()`: Security header injection (CSP, HSTS, XSS protection, anti-sniffing).
  2. `cors()`: Cross-Origin Resource Sharing restricting or permitting trusted frontend origins (`http://localhost:5173`).
  3. `morgan('dev')`: Detailed HTTP request/response logging in development.
  4. `express.json()` & `express.urlencoded()`: Strict JSON body parsing.
  5. `/api`: Versioned REST API routing gateway.
  6. `notFoundMiddleware`: 404 handler catching invalid routes.
  7. `errorMiddleware`: Centralized error pipeline preventing unhandled crashes and formatting uniform JSON error payloads.

### 2.3 Data Persistence Layer (`MongoDB Atlas`)
- **Mongoose ODM**: Handles schema validation, connection pooling, and lifecycle events (`connected`, `disconnected`, `error`).
- **Target Database**: `reusehub_db`
- **Dynamic State Inspection**: `getDBStatus()` extracts `mongoose.connection.readyState` to deliver truthful, un-mocked diagnostic feedback.

---

## 3. Security & Safety Standards
- **Zero Secret Exposure**: All database connection strings and sensitive port numbers are stored in `server/.env`, which is strictly ignored by `.gitignore`.
- **Placeholder Detection**: The backend safely checks for unconfigured placeholder connection strings and informs the developer instead of crashing or hanging indefinitely.
- **Fail-Fast Timeouts**: Database connection attempts utilize `serverSelectionTimeoutMS: 5000` to prevent blocked execution pipelines if network connectivity to Atlas is unavailable.
