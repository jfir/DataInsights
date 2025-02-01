import React from 'react';
import { ArrowRight, BarChart2, PieChart, TrendingUp, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Transform Your Data into 
            <span className="text-[#00ff44]"> Actionable Insights</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Expert data analytics consulting to help your business make data-driven decisions
            and achieve sustainable growth.
          </p>
          <Link 
            to="/services"
            className="bg-[#00ff44] text-[#1a2332] px-8 py-2 rounded-lg font-semibold 
              hover:bg-[#00cc33] transition-colors inline-flex items-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-[#141b27] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <BarChart2 className="w-8 h-8 text-[#00ff44]" />,
                title: 'Data Analysis',
                description: 'Transform raw data into meaningful insights'
              },
              {
                icon: <PieChart className="w-8 h-8 text-[#00ff44]" />,
                title: 'Data Visualization',
                description: 'Create compelling visual stories from your data'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#00ff44]" />,
                title: 'Predictive Analytics',
                description: 'Forecast trends and make data-driven decisions'
              },
              {
                icon: <Database className="w-8 h-8 text-[#00ff44]" />,
                title: 'Data Strategy',
                description: 'Develop comprehensive data management solutions'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-[#1a2332] p-6 rounded-lg hover:transform hover:-translate-y-1 
                  transition-transform duration-300"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to unlock the full potential of your data and drive your business forward.
          </p>
          <Link 
            to="/contact"
            className="bg-[#00ff44] text-[#1a2332] px-8 py-3 rounded-lg font-semibold 
              hover:bg-[#00cc33] transition-colors inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;