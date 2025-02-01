import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialRisk = () => {
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
          src="/src/img/financial-risk.jpg" 
          alt="Financial Risk Analysis" 
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">Financial Risk Analysis</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {['Finance', 'Risk Analysis', 'Modeling'].map((tag, index) => (
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
            Developed sophisticated risk assessment models for a financial institution, 
            significantly improving their ability to identify and mitigate potential risks.
          </p>

          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-gray-300 mb-6">
            The client needed to enhance their risk assessment capabilities to meet regulatory 
            requirements and reduce potential losses. Their existing systems were unable to 
            handle the complexity of modern financial products.
          </p>

          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Built advanced risk assessment models</li>
            <li>Implemented real-time monitoring systems</li>
            <li>Created risk visualization dashboards</li>
            <li>Developed automated alert systems</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>40% improvement in risk detection</li>
            <li>50% reduction in false positives</li>
            <li>25% decrease in risk-related losses</li>
            <li>Real-time risk monitoring capabilities</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Python (NumPy, pandas, scikit-learn)</li>
            <li>R (quantitative analysis)</li>
            <li>MongoDB</li>
            <li>Tableau</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialRisk;