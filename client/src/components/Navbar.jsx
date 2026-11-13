import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Recycle,
  Menu,
  X,
  Compass,
  Info,
  LogIn,
  UserPlus,
  Home
} from 'lucide-react';
import ConnectionStatus from './ConnectionStatus';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 border-b border-brand-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/25 group-hover:scale-105 group-hover:bg-brand-primary-hover transition-all duration-300">
              <Recycle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-brand-text">
                ReUse<span className="text-brand-primary">Hub</span>
              </span>
              <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
                Reuse • Donate • Exchange
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <a
              href="#explore"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Explore</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </a>
          </nav>

          {/* Desktop Right Side: Health Diagnostic Pill + Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* System Health Diagnostic Pill */}
            <ConnectionStatus variant="pill" />

            <div className="h-6 w-px bg-brand-border mx-1"></div>

            <button
              onClick={() => alert('Authentication will be implemented in Phase 2.')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-brand-text hover:text-brand-primary transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>

            <button
              onClick={() => alert('User registration will be implemented in Phase 2.')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary-hover shadow-sm shadow-brand-primary/20 hover:shadow-md hover:shadow-brand-primary/30 transition-all duration-200"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ConnectionStatus variant="pill" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-brand-text hover:text-brand-primary hover:bg-brand-background transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-brand-primary bg-brand-background"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <a
              href="#explore"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-brand-text hover:bg-brand-background hover:text-brand-primary transition"
            >
              <Compass className="w-4 h-4" />
              <span>Explore</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-brand-text hover:bg-brand-background hover:text-brand-primary transition"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </a>
          </nav>

          <div className="pt-4 border-t border-brand-border flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                alert('Authentication will be implemented in Phase 2.');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-brand-border text-brand-text hover:bg-brand-background"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                alert('User registration will be implemented in Phase 2.');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary-hover shadow-sm"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
