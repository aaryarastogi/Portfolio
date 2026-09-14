import React from 'react';
import ecommerce from '../images/ecommerce.png';
import CaseStudyLayout from './CaseStudyLayout.js';

const Ecommerce = () => {
  return (
    <CaseStudyLayout
      title="Cartify - E-Commerce Platform"
      subtitle="A full-stack MERN e-commerce platform featuring JWT authentication, scalable architecture, dynamic cart management, and Razorpay checkout integration."
      image={ecommerce}
      overviewPoints={[
        "Implemented secure JWT user authentication with seamless login and registration workflows, ensuring user data privacy and authorization controls.",
        "Architected with MongoDB, Express.js, React.js, and Node.js for high performance and modular backend API integration.",
        "Enabled dynamic cart functionality where users can add items, modify product quantities, and view cart totals in real-time.",
        "Integrated Razorpay payment gateway for smooth, trusted, and secure online transactions.",
        "Designed responsive user interfaces styled with Tailwind CSS and Material-UI components."
      ]}
      tools={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay', 'Material-UI', 'Figma']}
      liveUrl="https://ecommerce-website-odt2.onrender.com/"
      githubUrl="https://github.com/aaryarastogi/Ecommerce-web-app"
      documentTitle="Case Study of Cartify E-Commerce"
    />
  );
};

export default Ecommerce;