import React from 'react';
import {
  UploadCloud,
  MessageSquareText,
  ArrowRightLeft,
  Heart,
  Check
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'List Your Product',
    subtitle: 'Quick & intuitive listing',
    description: 'Snap photos of your pre-loved product, select its category, and specify if you want to sell, donate, or exchange it.',
    icon: UploadCloud,
    accent: 'bg-purple-100 text-brand-primary',
  },
  {
    step: '02',
    title: 'Connect with People',
    subtitle: 'Direct peer messaging',
    description: 'Chat directly with interested buyers, exchange partners, or community members looking for donated essentials.',
    icon: MessageSquareText,
    accent: 'bg-indigo-100 text-indigo-700',
  },
  {
    step: '03',
    title: 'Sell, Donate or Exchange',
    subtitle: 'Flexible transactions',
    description: 'Agree on fair pricing, arrange an exciting item-for-item trade, or gift the item completely free to someone in need.',
    icon: ArrowRightLeft,
    accent: 'bg-amber-100 text-amber-800',
  },
  {
    step: '04',
    title: 'Give Products a Second Life',
    subtitle: 'Zero landfill waste',
    description: 'Keep durable goods in circulation, reduce manufacturing demand, and foster an eco-conscious local community.',
    icon: Heart,
    accent: 'bg-emerald-100 text-emerald-800',
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-secondary-subtle px-3 py-1 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            How ReUseHub Works
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            From decluttering your home to equipping a student with textbook essentials,
            reusing items is simple, transparent, and rewarding.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {STEPS.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.step}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-brand-border hover:border-brand-primary/40 shadow-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-5 right-6 text-3xl font-black text-brand-border/80 select-none">
                  {step.step}
                </span>

                <div>
                  {/* Icon Box */}
                  <div className={`w-13 h-13 rounded-2xl ${step.accent} flex items-center justify-center mb-6 shadow-sm`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                    {step.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-brand-text mt-1 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs font-semibold text-brand-text">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>Step {step.step} Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;

