import React from 'react';
import {
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Repeat,
  Tag,
  ShieldCheck,
  CheckCircle,
  Package,
  Layers
} from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-brand-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-secondary-subtle/80 border border-brand-secondary-light/60 text-xs font-semibold text-brand-primary">
              <Sparkles className="w-4 h-4 text-brand-primary animate-spin" />
              <span>Community-Driven Circular Economy Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-text tracking-tight leading-[1.12]">
              Give Products a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-primary-light to-brand-secondary">
                Second Life
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              ReUseHub is your local community marketplace designed to promote zero-waste living.
              Easily <strong className="text-brand-text font-semibold">sell pre-owned goods</strong>,{' '}
              <strong className="text-brand-text font-semibold">donate usable items</strong>,{' '}
              <strong className="text-brand-text font-semibold">exchange everyday products</strong>, or{' '}
              <strong className="text-brand-text font-semibold">give away free resources</strong> to neighbors who need them.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#explore"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-brand-primary hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/35 transition-all duration-200 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-brand-text bg-white hover:bg-brand-background border border-brand-border hover:border-brand-secondary/40 shadow-card transition-all duration-200"
              >
                <span>Learn More</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-brand-border/60">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-text">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Listing Fees</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-text">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Direct Peer Exchange</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-text">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>MongoDB NoSQL Speed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Attractive Product Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow & Gradient Card Backing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/20 rounded-3xl transform -rotate-2 scale-102 filter blur-sm"></div>

              {/* Main Showcase Container */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-soft-hover border border-brand-border space-y-4">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-semibold text-brand-muted ml-1">Live Community Feed</span>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-primary bg-brand-secondary-subtle px-2.5 py-0.5 rounded-full">
                    Active Listings
                  </span>
                </div>

                {/* Product Card 1: Reusable Vintage Camera (For Sale) */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-brand-background/60 hover:bg-brand-background border border-brand-border/70 hover:border-brand-secondary/40 transition duration-200">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-brand-primary flex-shrink-0 shadow-sm">
                    <Package className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-brand-primary uppercase tracking-wider">
                        <Tag className="w-2.5 h-2.5" /> Reusable Sale
                      </span>
                      <span className="text-[11px] text-brand-muted">Condition: Like New</span>
                    </div>
                    <h4 className="text-sm font-bold text-brand-text truncate mt-1">Vintage Mechanical SLR Camera</h4>
                    <p className="text-xs font-semibold text-brand-primary">$45.00 • Local Pickup</p>
                  </div>
                </div>

                {/* Product Card 2: Study Books & Desk Lamp (Donation) */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-brand-background/60 hover:bg-brand-background border border-brand-border/70 hover:border-brand-secondary/40 transition duration-200">
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-sm">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                        Free Donation
                      </span>
                      <span className="text-[11px] text-brand-muted">Community Gift</span>
                    </div>
                    <h4 className="text-sm font-bold text-brand-text truncate mt-1">Data Structures & Algo Books</h4>
                    <p className="text-xs font-semibold text-emerald-600">$0.00 • Available to Students</p>
                  </div>
                </div>

                {/* Product Card 3: Road Bike (Exchange) */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-brand-background/60 hover:bg-brand-background border border-brand-border/70 hover:border-brand-secondary/40 transition duration-200">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                    <Repeat className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 uppercase tracking-wider">
                        Exchange Offer
                      </span>
                      <span className="text-[11px] text-brand-muted">Open to Trade</span>
                    </div>
                    <h4 className="text-sm font-bold text-brand-text truncate mt-1">21-Speed City Commuter Bike</h4>
                    <p className="text-xs font-semibold text-blue-700">Looking for: Acoustic Guitar</p>
                  </div>
                </div>

                {/* Floating Eco-Impact Badge */}
                <div className="pt-2">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-md">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                        <Layers className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold">1,420+ Items Reused</p>
                        <p className="text-[10px] text-purple-100">Zero landfill diversion this month</p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold bg-white/20 px-2.5 py-1 rounded-lg">
                      100% Circular
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
