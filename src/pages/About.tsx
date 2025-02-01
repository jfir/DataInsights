import React from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="md:col-span-1">
            <div className="bg-[#141b27] p-6 rounded-lg sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h1 className="text-2xl font-bold text-center mb-2">John Doe</h1>
              <p className="text-[#00ff44] text-center mb-6">Senior Data Analyst</p>
              
              <div className="flex justify-center space-x-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-[#00ff44]">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00ff44]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00ff44]">
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <button className="w-full bg-[#00ff44] text-[#1a2332] py-2 rounded-lg font-semibold
                hover:bg-[#00cc33] transition-colors flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Resume Content */}
          <div className="md:col-span-2">
            {/* Summary */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                Senior Data Analyst with over 8 years of experience in transforming complex data into 
                actionable insights. Specialized in predictive analytics, data visualization, and 
                machine learning solutions. Proven track record of helping businesses make data-driven 
                decisions that drive growth and efficiency.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Experience</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Senior Data Analyst',
                    company: 'Tech Solutions Inc.',
                    period: '2019 - Present',
                    description: [
                      'Led a team of 5 analysts in developing predictive models',
                      'Reduced reporting time by 40% through process automation',
                      'Implemented machine learning solutions for customer segmentation'
                    ]
                  },
                  {
                    title: 'Data Analyst',
                    company: 'Data Insights Co.',
                    period: '2016 - 2019',
                    description: [
                      'Developed interactive dashboards using Power BI',
                      'Conducted statistical analysis for marketing campaigns',
                      'Improved data collection processes by 50%'
                    ]
                  }
                ].map((job, index) => (
                  <div key={index} className="bg-[#141b27] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex justify-between text-gray-400 mb-4">
                      <span>{job.company}</span>
                      <span>{job.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#00ff44] rounded-full mt-2" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Data Analysis',
                  'Python',
                  'R',
                  'SQL',
                  'Machine Learning',
                  'Power BI',
                  'Tableau',
                  'Statistical Analysis',
                  'Data Visualization'
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-[#141b27] p-4 rounded-lg text-center hover:bg-[#1d2736] 
                      transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="bg-[#141b27] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Master of Science in Data Analytics
                </h3>
                <div className="flex justify-between text-gray-400">
                  <span>University of Technology</span>
                  <span>2015 - 2016</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;