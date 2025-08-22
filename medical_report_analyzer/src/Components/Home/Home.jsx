import React, { useState } from 'react';
import './Home.scss'; // Use SCSS for styles
import HeroImg from '../../assets/backimg.jpeg'; // Adjust the path as per your folder structure
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import heartbeat from '../../assets/heartbeat.gif';
import copywriting from '../../assets/copywriting.gif';
import checklist from '../../assets/checklist.gif'; // Fixed typo in path
import feature1 from '../../assets/feature-1.svg';
import feature2 from '../../assets/feature-2.svg';
import feature3 from '../../assets/feature-3.svg';
import feature5 from '../../assets/feature-5.svg';
import feature6 from '../../assets/feature-6.svg';
import feature7 from '../../assets/feature-7.svg';


const Home = () => {
  // State to handle toggle functionality
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleContent = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const features = [
    {
      icon: feature1,
      title: 'Fully Understand Your Lab Tests',
      description:
        'Understand everything you need to know about each marker and why your doctor likely ordered it.',
    },
    {
      icon: feature2,
      title: 'Learn About Health Effects',
      description:
        'Learn about the health implications of each of your test results and what it means for you.',
    },
    {
      icon: feature3,
      title: 'See Your Optimal Ranges',
      description:
        'We use the latest peer-reviewed research to identify the optimal ranges for your test results.',
    },
    {
      icon: feature5,
      title: 'Track Your Results',
      description:
        'Implement the personalized suggestions and track your levels to see your improvements.',
    },
    {
      icon: feature6,
      title: 'Analyze Over 500 Lab Markers',
      description:
        'Analyze any of our 500 available lab markers, with more being added all of the time.',
    },
    {
      icon: feature7,
      title: 'Analyze Your Genes with SelfDecode at NO EXTRA COST!',
      description:
        'Use SelfDecode to confirm your findings and see how your lifestyle is affecting your health.',
    },
  ];

  const healthGoals = [
    {
      title: 'Nutrient Levels',
      items: [
        'Vitamin A',
        'Vitamin C',
        'DHA',
        'Vitamin B1',
        'Complete Blood Count',
        'Vitamin B3 (nicotinamide and nicotinic acid)',
        'Vitamin B6',
        'Folate (whole blood and RBC)',
        'Biotin',
        'Vitamin B12',
        'Active Vitamin B12',
        'Vitamin D (1,25 and 25-OH)',
        'Vitamin E',
        'Zinc (blood and RBC)',
        'Magnesium',
        'Iron (serum, TIBC, and Ferritin)',
        'CoQ10',
      ],
    },
    {
      title: 'Thyroid Health',
      items: [
        'Free T3',
        'Total T3',
        'Free T4',
        'Total T4',
        'Reverse T3',
        'TSH',
        'Thyroglobulin antibodies',
        'Thyroid receptor antibodies',
      ],
    },
    {
      title: 'Energy Levels',
      items: [
        'Iron',
        'B12',
        'Vitamin D3',
        'CBC',
        'CMP',
        'Thyroid panel',
        'Inflammation Markers',
      ],
    },
    {
      title: 'Toxic Exposure',
      items: [
        'Complete Blood Count',
        'Liver Enzymes (ALT, AST, ALP, GGT)',
        'CRP',
        'ox-LDL',
        'Blood sugar',
        'Uric Acid',
        'Bilirubin',
        'Thyroid Hormones',
        '8-hydroxydeoguanosine (8-OHdG)',
      ],
    },
    {
      title: 'Heart Health',
      items: [
        'Blood sugar',
        'ApoB',
        'Cholesterol (HDL and LDL)',
        'Omega-3 (DHA, EPA, omega-3 index)',
        'Leptin',
        'CBC',
        'Lp(a)',
        'oxLDL',
        'Small LDL',
        'vLDL',
        'Triglycerides',
      ],
    },
    {
      title: 'Methylation',
      items: ['Folate', 'B12', 'Active B12', 'Homocysteine'],
    },
    {
      title: 'Toxic Mold Illness',
      items: [
        'C4a',
        'ACTH',
        'Cortisol',
        'ADH',
        'Alpha-MSH',
        'VIP',
        'MMP-9',
        'TNF-alpha',
      ],
    },
    {
      title: 'Stress',
      items: [
        'Salivary cortisol',
        'ACTH',
        'DHEA',
        'DHEA-S',
        'Pregnenolone',
        'Sex hormones (estrogen, progesterone, and testosterone)',
        'Magnesium (RBC and blood)',
      ],
    },
    {
      title: 'Weight Loss',
      items: ['CMP', 'D3', 'Adiponectin', 'Leptin'],
    },
    {
      title: 'Hormone Balance & Fertility',
      items: [
        'Estrogens (E1, E2, E3, total)',
        'Progesterone',
        'Pregnenolone',
        'FSH',
        'LH',
        'Leptin',
        'Prolactin',
        'SHBG',
        'DHEA',
        'DHEA-S',
        'DHT',
        'Testosterone (free, bioavailable, total)',
        'Cortisol',
        'Thyroid panel',
      ],
    },
    {
      title: 'Aging',
      items: [
        'Growth Hormone',
        'IGF-1',
        'Sex hormones',
        'Comprehensive metabolic panel',
        'Complete blood count',
        'Lipid panel',
        'Thyroid panel',
      ],
    },
    {
      title: 'Gut Health',
      items: ['Zonulin', 'Intestinal Permeability Test'],
    },
  ];

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-image">
          <img src={HeroImg} alt="Medical Analysis" />
          <div className="overlay">
            <div className="text">"Unlock the Secrets of Your Medical Report in One Click!"</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <header className='howitworks'>
        
        {/* Move the How it Works heading above the steps */}
        <div className="text-center">
          <h1>How it Works</h1>
          <hr className="divider" />
        </div>
        <div className="row how-it-work-content">
          <div className="col-lg-12 how-it-works-steps">
            <div className="row">
              <div className="col-md-4 how-it-works-step">
                <div className="how-it-works-step-header">
                  <div className="how-it-works-step-icon step-1">
                    <img src={copywriting} alt="Step 1" className="step-image" />
                  </div>
                </div>
                <h3 className="steps">Step 1:</h3>
                <p className="how-it-works-step-text">Upload your lab test results.</p>
              </div>
              <div className="col-md-4 how-it-works-step">
                <div className="how-it-works-step-header">
                  <div className="how-it-works-step-icon step-2">
                    <img src={checklist} alt="Step 2" className="step-image" />
                  </div>
                </div>
                <h3 className="steps">Step 2:</h3>
                <p className="how-it-works-step-text">
                  Implement suggestions, track your levels, and watch your health improve.
                </p>
              </div>
              <div className="col-md-4 how-it-works-step">
                <div className="how-it-works-step-header">
                  <div className="how-it-works-step-icon step-3">
                    <img src={heartbeat} alt="Step 3" className="step-image" />
                  </div>
                </div>
                <h3 className="steps">Step 3:</h3>
                <p className="how-it-works-step-text">
                  Receive personalized reports and recommendations to optimize your levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Features Section */}
      <section className="lab-test-analyzer">
        <h2>Unlock critical information hidden in your test results</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Health Goals Section */}
      <section className="health-goals">
        <p>Health Goals</p>
        <hr className="divider" />
        <div className="container">
          {healthGoals.map((goal, index) => (
            <div className="item" key={index}>
              <div className="item-header">
                {goal.title}
                <span className="plus-sign" onClick={() => toggleContent(index)}>
                  {expandedItem === index ? '-' : '+'}
                </span>
              </div>
              <div className="content" style={{ display: expandedItem === index ? 'block' : 'none' }}>
                <ul>
                  {goal.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="healthPkg mt-5">
  <div className="container-xl">
    <div className="heading mb-4 text-center">
      <h2>Benefits for You</h2>
    </div>
    <div className="row g-3 d-flex justify-content-center">
      {/* First Column */}
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="card ">
          <div>
            <div className="icon-50 p-1">
              <img className="img-fluid" src="https://content.mymeds247.com/assets/images/icons/anywhere.png" alt="Convenience" />
            </div>
          </div>
          <div className="content">
            <h3 className="title">Convenience</h3>
            <p className="text">Analyze your lab reports anytime, anywhere, without leaving home.</p>
          </div>
        </div>
      </div>
      
      {/* Second Column */}
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="card">
          <div>
            <div className="icon-50 p-1">
              <img className="img-fluid" src="https://content.mymeds247.com/assets/images/icons/Professional-Support.png" alt="Professional" />
            </div>
          </div>
          <div className="content">
            <h3 className="title">Professional Support</h3>
            <p className="text">Receive personalized guidance from AI.</p>
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="card ">
          <div>
            <div className="icon-50 p-1">
              <img className="img-fluid" src="https://content.mymeds247.com/assets/images/icons/Empowerment.png" alt="Empowerment" />
            </div>
          </div>
          <div className="content">
            <h3 className="title">Empowerment</h3>
            <p className="text">
              Take an active role in your health journey with a clearer understanding of your body.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
