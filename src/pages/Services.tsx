import React from 'react';
import { 
  BarChart2, PieChart, TrendingUp, Database, 
  Search, Brain, LineChart, Users 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart2 className="w-12 h-12 text-[#00ff44]" />,
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights through comprehensive analysis and interpretation.',
      features: [
        'Statistical Analysis',
        'Pattern Recognition',
        'Trend Analysis',
        'Performance Metrics'
      ]
    },
    {
      icon: <PieChart className="w-12 h-12 text-[#00ff44]" />,
      title: 'Data Visualization',
      description: 'Create compelling visual narratives that make complex data easily understandable.',
      features: [
        'Interactive Dashboards',
        'Custom Reports',
        'Infographics',
        'Real-time Visualizations'
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#00ff44]" />,
      title: 'Predictive Analytics',
      description: 'Leverage advanced algorithms to forecast trends and make data-driven decisions.',
      features: [
        'Forecasting Models',
        'Risk Assessment',
        'Market Analysis',
        'Scenario Planning'
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-[#00ff44]" />,
      title: 'Data Strategy',
      description: 'Develop comprehensive data management solutions tailored to your business needs.',
      features: [
        'Data Architecture',
        'Governance Framework',
        'Quality Assurance',
        'Integration Solutions'
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-[#00ff44]" />,
      title: 'Business Intelligence',
      description: 'Transform data into competitive advantage through strategic insights.',
      features: [
        'KPI Development',
        'Competitive Analysis',
        'Performance Tracking',
        'Strategic Planning'
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-[#00ff44]" />,
      title: 'Machine Learning Solutions',
      description: 'Implement AI and ML solutions to automate and optimize business processes.',
      features: [
        'Predictive Models',
        'Classification Systems',
        'Automation Solutions',
        'Neural Networks'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2332] text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          Comprehensive data analytics solutions tailored to your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#141b27] p-8 rounded-lg hover:transform hover:-translate-y-1 
                transition-transform duration-300"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mt-6 mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#00ff44] rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;