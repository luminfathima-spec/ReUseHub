import React from 'react';
import {
  Trash2,
  Coins,
  Users2,
  Leaf,
  CheckCircle2,
  TrendingDown,
  Globe2
} from 'lucide-react';

const BENEFITS = [
  {
    title: 'Reduce Waste',
    headline: 'Prevent Landfill Pollution',
    description: 'Keep durable electronics, furniture, books, and household appliances in active circulation instead of throwing them away prematurely.',
    icon: Trash2,
    metric: '92% Less Waste',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    title: 'Save Money',
    headline: 'Accessible Pre-Owned Goods',
    description: 'Get high-quality products at a fraction of their original retail price, or find 100% free community donations for essentials.',
    icon: Coins,
    metric: 'Save Up to 70%',
    color: 'bg-purple-50 text-brand-primary border-purple-200',
  },
  {
    title: 'Support Communities',
    headline: 'Strengthen Local Ties',
    description: 'Connect with neighbors, support students who need textbooks or dorm furniture, and cultivate peer-to-peer trust.',
    icon: Users2,
    metric: 'Local Impact',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    title: 'Encourage Sustainable Living',
    headline: 'Lower Carbon Footprint',
    description: 'Every reused product avoids the raw materials extraction, energy consumption, and packaging emissions of brand-new manufacturing.',
    icon: Leaf,
    metric: 'Lower Carbon',
    color: 'bg-teal-50 text-teal-700 border-teal-200',
  },
];

export const Benefits = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-brand-background border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-secondary-subtle px-3 py-1 rounded-full">
            Why Choose ReUseHub
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            Built for Sustainability, Economy & Community
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            ReUseHub bridges the gap between individuals who have surplus usable products
            and those who can put them to good use, championing environmental stewardship.
          </p>
        </div>

        {/* Benefits Cards 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BENEFITS.map((b) => {
            const IconComponent = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-brand-border shadow-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl ${b.color} border shadow-sm`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-brand-primary bg-brand-secondary-subtle px-3 py-1 rounded-full">
                      {b.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-text mb-2">
                    {b.title}
                  </h3>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary/80 mb-3">
                    {b.headline}
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border flex items-center gap-2 text-xs font-medium text-brand-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Promoting environmental sustainability</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Quote Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Ready to give your unused goods a new purpose?
            </h3>
            <p className="text-sm text-purple-100 max-w-xl">
              Join thousands of community members actively reducing waste and building sustainable neighborhoods.
            </p>
          </div>
          <a
            href="#explore"
            className="px-6 py-3.5 rounded-xl bg-white text-brand-primary font-bold text-sm shadow-md hover:bg-brand-background hover:scale-105 transition-all duration-200 flex-shrink-0"
          >
            Start Reusing Today
          </a>
        </div>

      </div>
    </section>
  );
};

export default Benefits;

