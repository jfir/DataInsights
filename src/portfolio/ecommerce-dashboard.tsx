import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommerceDashboard = () => {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/portfolio"
          className="inline-flex items-center text-[#00ff44] mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        <img 
          src="/src/img/ecommerce-dashboard.jpg" 
          alt="E-commerce Dashboard" 
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">E-commerce Analytics Dashboard</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {['Data Visualization', 'Dashboard Design', 'E-commerce'].map((tag, index) => (
            <span 
              key={index}
              className="bg-[#141b27] px-3 py-1 rounded-full text-sm text-[#00ff44]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-6">
            Developed a comprehensive analytics dashboard for a major e-commerce platform that 
            transformed their data visualization capabilities and led to significant improvements 
            in decision-making processes.
          </p>

          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-gray-300 mb-6">
            The client was struggling with scattered data sources and inefficient reporting 
            processes, leading to delayed decision-making and missed opportunities. They needed 
            a centralized solution that could provide real-time insights into their e-commerce 
            operations.
          </p>

          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Designed and implemented an interactive dashboard using Power BI</li>
            <li>Integrated multiple data sources into a unified reporting system</li>
            <li>Created automated data refresh pipelines</li>
            <li>Implemented predictive analytics for inventory management</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>25% increase in conversion rates through better targeting</li>
            <li>40% reduction in reporting time</li>
            <li>15% improvement in inventory turnover</li>
            <li>Real-time visibility into key performance metrics</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Power BI</li>
            <li>Python (pandas, scikit-learn)</li>
            <li>SQL</li>
            <li>Azure Data Factory</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDashboard;