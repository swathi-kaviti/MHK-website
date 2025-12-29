import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const DataEngineering = () => {
  const [activeSection, setActiveSection] = useState(0);

  const masteryContent = [
    {
      title: 'Assessment & Strategy Planning',
      content: "Finding out your specific business needs is our foremost goal in the journey towards building your data engineering solution. Our exceptional teams at MKH work with your current infrastructure and create a custom strategy that aligns with the same. Where you see gaps, we see opportunities in your current data led processes and design a plan that elevates the use of your data."
    },
    {
      title: 'Integration & Aggregation',
      content: "We use cutting-edge technology and industry best practices to ensure gathering of the highest quality of data with utmost accuracy, consistency and completeness. Aggregating this data in your data stores provides access to a holistic view of your data."
    },
    {
      title: "Let's build a Data Lake",
      content: "A data lake is a cost-effective alternative for storing data. It's a scalable, secure and flexible solution to gather unstructured and unprocessed data. Our experienced team designs and implements data architectures that optimize storage and retrieval speed, reduce latency and ensure high availability."
    },
    {
      title: 'Data Pipelines – Approach and Architecture',
      content: "Developing efficient and reliable data pipelines is essential for any organization's data engineering needs. MHK team specializes in designing, implementing and managing data pipelines that enable your business to collect, process and analyze large volumes of data seamlessly. We leverage the best technologies that are available in the industry and with our best practices we ensure that our client's data pipelines are scalable and optimized for their requirements."
    },
    {
      title: 'Data Visualization & Reporting',
      content: "AI Solutions are not set and forget in nature. They are constantly evolving and so are we. We run along with the AI solution MHK team creates visually compelling and insightful reports and dashboards that enable clients to easily make sense of their data. Best-in-class visualization tools and techniques are an ingrained in our everyday solutions. With this in place we intend to conquer complex data sets into user-friendly and interactive visualizations that can drive your decision-making."
    }
  ];

  const technologies = [
    { 
      name: 'Apache Kafka', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg'
    },
    { 
      name: 'Apache Spark', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg'
    },
    { 
      name: 'Databricks', 
      logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg'
    },
    { 
      name: 'Apache Hadoop', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg'
    },
    { 
      name: 'Snowflake', 
      logo: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg'
    },
    { 
      name: 'Azure', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
    },
    { 
      name: 'Apache Airflow', 
      logo: 'https://www.vectorlogo.zone/logos/apache_airflow/apache_airflow-icon.svg'
    },
    { 
      name: 'Talend', 
      logo: 'https://www.vectorlogo.zone/logos/talend/talend-icon.svg'
    },
  ];

  const faqs = [
    {
      question: 'What is Data Engineering?',
      answer: 'Data engineering involves designing, building, and maintaining the infrastructure and systems that enable the collection, storage, and analysis of large-scale data.'
    },
    {
      question: 'How can data engineering benefit my business?',
      answer: 'Data engineering enables faster decision-making, improves data quality, reduces costs through automation, and provides scalable solutions for growing data needs.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We leverage industry-leading tools including Hadoop, Spark, AWS, Azure, Databricks, Snowflake, and custom-built solutions tailored to your needs.'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Data Engineering</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Maximize the potential of your organizational data with enterprise-level solutions
            </p>
          </div>
        </div>
      </section>

      {/* MHK Mastery Section with Accordion */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">MHK Mastery</h2>
              
              {/* Accordion */}
              <div className="space-y-4">
                {masteryContent.map((item, index) => (
                  <div 
                    key={index}
                    className="border-2 border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-500"
                  >
                    <button
                      onClick={() => setActiveSection(activeSection === index ? -1 : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                    >
                      <span className={`font-bold text-lg transition-colors ${
                        activeSection === index ? 'text-emerald-600' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </span>
                      {activeSection === index ? (
                        <ChevronDown className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeSection === index ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data Engineering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Data Needs Our Solution */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Your Data Needs Our Solution</h2>
            <p className="text-xl text-slate-600">Comprehensive data engineering services tailored to your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ETL & Data Integration',
                description: 'Seamlessly extract, transform, and load data from diverse sources into unified data warehouses, ensuring consistency and reliability.',
                icon: '🔄'
              },
              {
                title: 'Real-time Data Pipelines',
                description: 'Build streaming data pipelines that process millions of events per second, enabling instant insights and rapid response.',
                icon: '⚡'
              },
              {
                title: 'Data Quality & Governance',
                description: 'Implement comprehensive data quality frameworks and governance policies to ensure accuracy, compliance, and trust.',
                icon: '✓'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Pipelines */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Data Pipelines"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Data Pipelines</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our data pipeline solutions are designed for scalability and performance. We build both batch and streaming pipelines using cutting-edge technologies like Apache Spark, Kafka, and cloud-native services.
              </p>
              <ul className="space-y-4">
                {[
                  'Automated data ingestion from multiple sources',
                  'Real-time transformation and enrichment',
                  'Fault-tolerant and self-healing architectures',
                  'Monitoring and alerting for pipeline health',
                  'Cost-optimized data storage strategies'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud-based Data Solutions */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Cloud-based Data Solutions</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Leverage the power of cloud computing for your data infrastructure. We design and implement cloud-native data platforms on AWS, Azure, and GCP that offer unmatched scalability, flexibility, and cost-efficiency.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From data lakes to modern data warehouses, we architect solutions that grow with your business while maintaining optimal performance and security.
              </p>
              <div className="mt-8">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105">
                  Explore Cloud Solutions
                </button>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="Cloud Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Tools & Technologies</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12">
              From data integration and ETL to data warehousing, data pipelines and machine learning, companies want to partner with expert solution providers in the area. When you want to stay ahead of the curve, today's businesses are looking to optimize the data infrastructure, streamline the data workflows and build advanced analytics capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-32 h-32 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center mb-4 hover:border-emerald-500 hover:shadow-lg transition-all p-6">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-slate-700 text-center group-hover:text-emerald-600 transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Infrastructure?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Let's discuss how our data engineering expertise can drive your business forward.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all transform hover:scale-105">
            TAKE THE LEAD
          </button>
          <p className="mt-6 text-emerald-100 text-lg">
            Innovate. Accelerate. Transform.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DataEngineering;