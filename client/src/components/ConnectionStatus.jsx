import React, { useState, useEffect, useCallback } from 'react';
import { checkHealth } from '../services/api';
import {
  Server,
  Database,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

/**
 * System Connection Status Component
 * Queries GET /api/health and accurately displays status of Backend and MongoDB.
 */
export const ConnectionStatus = ({ variant = 'banner' }) => {
  const [health, setHealth] = useState({
    loading: true,
    isBackendConnected: false,
    isDatabaseConnected: false,
    databaseStatus: 'checking',
    serverStatus: 'checking',
    data: null,
    message: 'Checking system status...',
    lastChecked: null,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const fetchStatus = useCallback(async () => {
    setHealth((prev) => ({ ...prev, loading: true }));
    const result = await checkHealth();
    setHealth({
      loading: false,
      isBackendConnected: result.isBackendConnected,
      isDatabaseConnected: result.isDatabaseConnected,
      databaseStatus: result.databaseStatus,
      serverStatus: result.serverStatus,
      data: result.data,
      message: result.message,
      lastChecked: new Date().toLocaleTimeString(),
    });
  }, []);

  useEffect(() => {
    fetchStatus();
    // Poll status every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  // Pill variant for Navbar integration
  if (variant === 'pill') {
    const isAllGood = health.isBackendConnected && health.isDatabaseConnected;
    const isBackendOnly = health.isBackendConnected && !health.isDatabaseConnected;

    return (
      <div className="relative inline-flex items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
            health.loading
              ? 'bg-brand-background border-brand-border text-brand-muted animate-pulse'
              : isAllGood
              ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
              : isBackendOnly
              ? 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
              : 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100'
          }`}
          title="Click to view detailed system health"
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isAllGood ? 'bg-emerald-400' : isBackendOnly ? 'bg-amber-400' : 'bg-rose-400'
              }`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isAllGood ? 'bg-emerald-500' : isBackendOnly ? 'bg-amber-500' : 'bg-rose-500'
              }`}
            ></span>
          </span>

          <span className="font-semibold">
            {health.loading
              ? 'Checking System...'
              : !health.isBackendConnected
              ? 'Backend Unavailable'
              : health.isDatabaseConnected
              ? 'System Connected'
              : 'DB Disconnected'}
          </span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Detailed Popover */}
        {isExpanded && (
          <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 p-4 bg-white rounded-2xl shadow-soft-hover border border-brand-border z-50">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-primary" />
                <h4 className="text-sm font-bold text-brand-text">System Health Check</h4>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  fetchStatus();
                }}
                disabled={health.loading}
                className="p-1 rounded-lg text-brand-muted hover:text-brand-primary hover:bg-brand-background transition"
                title="Refresh Status"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${health.loading ? 'animate-spin text-brand-primary' : ''}`} />
              </button>
            </div>

            <div className="space-y-3 py-3">
              {/* Backend Status Item */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-background/60">
                <div className="flex items-center gap-2.5">
                  <Server className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs font-medium text-brand-text">Backend Server (Express)</span>
                </div>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md ${
                    health.isBackendConnected
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {health.isBackendConnected ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Backend connected
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3 h-3 text-rose-600" /> Backend unavailable
                    </>
                  )}
                </span>
              </div>

              {/* Database Status Item */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-background/60">
                <div className="flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-brand-primary" />
                  <span className="text-xs font-medium text-brand-text">NoSQL Database (MongoDB)</span>
                </div>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md ${
                    health.isDatabaseConnected
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {health.isDatabaseConnected ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Database connected
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-3 h-3 text-amber-600" /> Database disconnected
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Diagnostic Details */}
            <div className="pt-2 text-[11px] text-brand-muted space-y-1 border-t border-brand-border">
              <div className="flex justify-between">
                <span>Environment:</span>
                <span className="font-mono text-brand-text font-medium">{health.data?.environment || 'development'}</span>
              </div>
              <div className="flex justify-between">
                <span>API Version:</span>
                <span className="font-mono text-brand-text font-medium">{health.data?.version || '1.0.0'}</span>
              </div>
              <div className="flex justify-between">
                <span>Last Verified:</span>
                <span>{health.lastChecked || 'Just now'}</span>
              </div>

              {!health.isDatabaseConnected && health.isBackendConnected && (
                <div className="mt-2 p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[11px] leading-relaxed">
                  <p className="font-semibold flex items-center gap-1">
                    <HelpCircle className="w-3 h-3 flex-shrink-0" /> Note on MongoDB:
                  </p>
                  <span>
                    Atlas credentials are placeholder in <code className="bg-amber-100 px-1 rounded">server/.env</code>. Update <code className="bg-amber-100 px-1 rounded">MONGO_URI</code> with your MongoDB Atlas cluster URI to connect.
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Standalone Card/Banner Variant
  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-4">
      <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-card border border-brand-border hover:border-brand-secondary/40 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-brand-secondary/15 text-brand-primary">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-brand-text">System Connection Diagnostic</h3>
                <p className="text-xs text-brand-muted">Real-time status of Express server and MongoDB Atlas</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-brand-muted">
              Last checked: <span className="font-mono text-brand-text">{health.lastChecked || 'Checking...'}</span>
            </span>
            <button
              onClick={fetchStatus}
              disabled={health.loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-background hover:bg-brand-secondary/20 text-brand-primary transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${health.loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Status Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {/* Backend Status */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              health.isBackendConnected
                ? 'bg-emerald-50/50 border-emerald-200'
                : 'bg-rose-50/50 border-rose-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    health.isBackendConnected ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-brand-muted uppercase tracking-wider">Backend API</h4>
                  <p className="text-sm font-bold text-brand-text">
                    {health.isBackendConnected ? 'Backend connected' : 'Backend unavailable'}
                  </p>
                </div>
              </div>
              <div>
                {health.isBackendConnected ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-rose-600" />
                )}
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-brand-border/40 text-xs text-brand-muted flex justify-between">
              <span>Port: 5000</span>
              <span className="font-mono">{health.isBackendConnected ? 'HTTP 200 OK' : 'No Response'}</span>
            </div>
          </div>

          {/* Database Status */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              health.isDatabaseConnected
                ? 'bg-emerald-50/50 border-emerald-200'
                : 'bg-amber-50/50 border-amber-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    health.isDatabaseConnected ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-brand-muted uppercase tracking-wider">NoSQL Database</h4>
                  <p className="text-sm font-bold text-brand-text">
                    {health.isDatabaseConnected ? 'Database connected' : 'Database disconnected'}
                  </p>
                </div>
              </div>
              <div>
                {health.isDatabaseConnected ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                )}
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-brand-border/40 text-xs text-brand-muted flex justify-between">
              <span>Database: reusehub_db</span>
              <span className="font-mono">
                {health.isDatabaseConnected ? 'Mongoose Ready (1)' : 'Mongoose Ready (0)'}
              </span>
            </div>
          </div>
        </div>

        {/* Explanatory Message / Alert */}
        <div className="mt-4 p-3 rounded-xl bg-brand-background border border-brand-border text-xs text-brand-text flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold text-brand-primary">Diagnostic Message: </span>
            <span>{health.message}</span>
            {!health.isDatabaseConnected && health.isBackendConnected && (
              <span className="block mt-1 text-brand-muted">
                To connect to MongoDB Atlas, update <code className="bg-white px-1.5 py-0.5 rounded border border-brand-border text-brand-primary font-mono text-[11px]">MONGO_URI</code> in <code className="font-mono text-brand-text">server/.env</code> with your cluster connection string and restart the server.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionStatus;

