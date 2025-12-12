'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const AnimatedCard: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8 h-full">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const AnimatedCoupleSection: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="flex items-center justify-between gap-8 px-8">
          <div className="animate-bounce">
            <div className="text-7xl">🧑</div>
            <p className="text-white font-bold mt-2 text-center text-lg">Boy</p>
          </div>
          <div className="relative">
            <div className="text-8xl animate-bounce" style={{ animationDelay: '0.2s' }}>👍</div>
            <div className="absolute inset-0 text-8xl opacity-50 animate-ping">👍</div>
          </div>
          <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
            <div className="text-7xl">👩</div>
            <p className="text-white font-bold mt-2 text-center text-lg">Girl</p>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <p className="text-white font-bold text-xl animate-pulse">💕 Perfect Match 💕</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoaded] = useState(true);

  const features: CardProps[] = [
    {
      title: 'Plan Together',
      description: 'Collaborate with your partner and family to plan every detail of your wedding with ease.',
      icon: '💒',
    },
    {
      title: 'Manage Guests',
      description: 'Keep track of all guest RSVPs, dietary preferences, and seating arrangements in one place.',
      icon: '👥',
    },
    {
      title: 'Budget Control',
      description: 'Stay within budget with detailed expense tracking and real-time financial updates.',
      icon: '💰',
    },
    {
      title: 'Beautiful Memories',
      description: 'Create a stunning gallery to preserve and share your favorite wedding moments.',
      icon: '📸',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-6xl">
          {/* Main Title Animation */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-orange-600 bg-clip-text text-transparent mb-6">
              WedHub
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light mb-4">
              Plan Your Perfect Wedding
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The complete wedding management platform designed for couples who want to celebrate love while staying organized
            </p>
          </div>

          {/* Animated Couple Section */}
          <div className="my-16">
            <AnimatedCoupleSection />
          </div>

          {/* CTA Buttons with Hover Animation */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link
              href="/dashboard"
              className="px-12 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform text-center"
            >
              Get Started →
            </Link>
            <Link
              href="#features"
              className="px-12 py-4 border-2 border-pink-600 text-pink-600 font-bold rounded-full text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section with Animated Cards */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Why Choose WedHub?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to plan, manage, and celebrate your special day with confidence and joy
            </p>
          </div>

          {/* Animated Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="opacity-100">
                <AnimatedCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Showcase */}
      <section className="py-24 px-4 bg-gradient-to-r from-pink-100 via-white to-rose-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '2500+', label: 'Happy Couples' },
              { num: '100%', label: 'Wedding Success Rate' },
              { num: '24/7', label: 'Customer Support' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  {stat.num}
                </h3>
                <p className="text-gray-600 text-lg font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Ready to Plan Your Wedding?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of happy couples and start planning your dream wedding today
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-14 py-5 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-full text-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 transform"
          >
            Start Planning Now ✨
          </Link>
        </div>
      </section>
    </div>
  );
}
