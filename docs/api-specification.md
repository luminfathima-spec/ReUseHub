# ReUseHub – API Specification (Phase 1)

## Base URL
```
http://localhost:5000/api
```

---

## 1. System Health Check

### Endpoint
`GET /api/health`

### Description
Performs diagnostic verification of the Express server process and the active MongoDB database connection. Accurately reports whether the database is connected, connecting, or disconnected without synthetic false positives.

### Request Headers
- `Accept: application/json`

### Query Parameters
None.

### Success Response (Database Connected)
**Status Code**: `200 OK`
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
  "uptimeSeconds": 142,
  "timestamp": "2026-11-13T14:30:00.000Z",
  "message": "All services operational. MongoDB is connected."
}
```

### Degraded Response (Database Disconnected or Placeholder Configured)
**Status Code**: `200 OK`
```json
{
  "application": "ReUseHub",
  "tagline": "A Community-Based Product Reuse, Donation and Exchange Platform",
  "server": "running",
  "status": "degraded",
  "database": {
    "status": "disconnected",
    "connected": false,
    "name": "reusehub_db",
    "host": null
  },
  "environment": "development",
  "version": "1.0.0",
  "uptimeSeconds": 24,
  "timestamp": "2026-11-13T14:35:00.000Z",
  "message": "Server is active, but MongoDB is currently disconnected. Please configure valid MongoDB Atlas credentials in server/.env."
}
```

---

## 2. API Root Info

### Endpoint
`GET /`

### Description
Informational endpoint returning platform metadata.

### Response
**Status Code**: `200 OK`
```json
{
  "application": "ReUseHub API",
  "description": "A Community-Based Product Reuse, Donation and Exchange Platform",
  "version": "1.0.0",
  "documentation": "/api/health",
  "status": "online"
}
```

---

## 3. Error Responses

### 3.1 Resource Not Found (404)
Triggered when requesting a non-existent route (e.g., `GET /api/undefined-endpoint`).
```json
{
  "success": false,
  "message": "Resource Not Found - /api/undefined-endpoint",
  "stack": "Error: Resource Not Found...",
  "timestamp": "2026-11-13T14:40:00.000Z"
}
```
*(Stack trace is automatically omitted when `NODE_ENV=production`)*.

