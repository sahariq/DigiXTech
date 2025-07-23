import React from 'react';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
}

export function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">Get started with our platform in just 5 simple steps</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xs sm:text-sm text-blue-600 font-semibold mb-2">Step {index + 1}</div>
              <h3 className="text-base sm:text-lg font-semibold text-black dark:text-gray-200 mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 