import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Analytics Dashboard',
    description: 'Developed a comprehensive analytics dashboard for a major e-commerce platform, resulting in a 25% increase in conversion rates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Data Visualization', 'Dashboard Design', 'E-commerce'],
    link: '/portfolio/ecommerce-dashboard'
  },
  {
    id: '2',
    title: 'Predictive Sales Analysis',
    description: 'Implemented machine learning models to forecast sales trends, achieving 92% accuracy in predictions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Machine Learning', 'Sales Analytics', 'Forecasting'],
    link: '/portfolio/predictive-sales'
  },
  {
    id: '3',
    title: 'Healthcare Data Integration',
    description: 'Streamlined data integration processes for a healthcare provider, reducing reporting time by 60%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Healthcare', 'Data Integration', 'Process Optimization'],
    link: '/portfolio/healthcare-integration'
  },
  {
    id: '4',
    title: 'Financial Risk Analysis',
    description: 'Developed risk assessment models for a financial institution, improving risk detection by 40%.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Finance', 'Risk Analysis', 'Modeling'],
    link: '/portfolio/financial-risk'
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          Explore our successful projects and see how we've helped businesses transform their data into success stories.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id}
              to={project.link}
              className="group bg-[#141b27] rounded-lg overflow-hidden hover:transform 
                hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#1a2332] px-3 py-1 rounded-full text-sm text-[#00ff44]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-[#00ff44] font-semibold">
                  <span>View Case Study</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;