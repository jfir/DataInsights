import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareIntegration = () => {
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
          src="/src/img/healthcare-integration.jpg" 
          alt="Healthcare Data Integration" 
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">Healthcare Data Integration</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {['Healthcare', 'Data Integration', 'Process Optimization'].map((tag, index) => (
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
            Streamlined data integration processes for a major healthcare provider, significantly 
            improving their reporting efficiency and data accuracy.
          </p>

          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-gray-300 mb-6">
            The healthcare provider was struggling with siloed data systems, manual reporting 
            processes, and compliance requirements. They needed a unified solution that could 
            handle sensitive healthcare data while improving operational efficiency.
          </p>

          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Implemented HIPAA-compliant data integration system</li>
            <li>Automated data validation and cleaning processes</li>
            <li>Created centralized reporting dashboard</li>
            <li>Established data governance protocols</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>60% reduction in reporting time</li>
            <li>99.9% data accuracy achievement</li>
            <li>100% compliance with healthcare regulations</li>
            <li>Improved patient care through better data access</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>SQL Server Integration Services</li>
            <li>Azure Health Data Services</li>
            <li>Power BI</li>
            <li>Python (pandas, numpy)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthcareIntegration;