import React from 'react';
import {
  Recycle,
  Mail,
  MapPin,
  Heart,
  Github,
  Globe,
  Database
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-border text-brand-text pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-border">
          
          {/* Brand & Project Info (Colspan 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-sm">
                <Recycle className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-brand-text">
                ReUse<span className="text-brand-primary">Hub</span>
              </span>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              A community-based product reuse, donation, and exchange platform.
              Empowering local neighborhoods to reduce waste, save money, and live sustainably through peer-to-peer resource sharing.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-brand-muted">
              <Database className="w-4 h-4 text-brand-primary" />
              <span>MCA Academic Project • Powered by MongoDB Atlas & Express</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-brand-text uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#explore" className="hover:text-brand-primary transition-colors">Explore Categories</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-brand-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-primary transition-colors">Benefits & About</a>
              </li>
            </ul>
          </div>

          {/* Platform Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-brand-text uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>Electronics & Tech</li>
              <li>Home Furniture</li>
              <li>Books & Academic</li>
              <li>Clothing & Apparel</li>
              <li>Home Appliances</li>
              <li>Sports Equipment</li>
            </ul>
          </div>

          {/* Contact & Academic Information Placeholder */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-brand-text uppercase tracking-wider">
              Contact & Project
            </h4>
            <div className="space-y-2.5 text-xs text-brand-muted">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>support@reusehub.local</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>MCA Department, Computer Science Campus</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>MERN + MongoDB Atlas Architecture</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Phase Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© {new Date().getFullYear()} ReUseHub Platform. MCA Academic Project. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-brand-background border border-brand-border text-brand-primary font-semibold">
              Phase 1: Foundation & Database Setup
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Sustainability
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
