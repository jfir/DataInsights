import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PredictiveSales = () => {
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
          src="/src/img/predictive-sales.jpg" 
          alt="Predictive Sales Analysis" 
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">Predictive Sales Analysis</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {['Machine Learning', 'Sales Analytics', 'Forecasting'].map((tag, index) => (
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
            Implemented advanced machine learning models to forecast sales trends for a retail 
            chain, enabling data-driven inventory management and marketing decisions.
          </p>

          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-gray-300 mb-6">
            The client needed to optimize their inventory levels and marketing spend across 
            multiple locations. Traditional forecasting methods were proving inadequate for 
            their complex, multi-channel sales environment.
          </p>

          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Developed machine learning models for sales prediction</li>
            <li>Implemented automated data preprocessing pipelines</li>
            <li>Created interactive visualization dashboards</li>
            <li>Built an automated reporting system</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>92% accuracy in sales predictions</li>
            <li>30% reduction in excess inventory</li>
            <li>20% increase in marketing ROI</li>
            <li>Improved cash flow through better inventory management</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Python (TensorFlow, scikit-learn)</li>
            <li>R (time series analysis)</li>
            <li>Tableau</li>
            <li>AWS SageMaker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PredictiveSales;