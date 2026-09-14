import React from 'react';
import tourism from '../images/tourism.png';
import CaseStudyLayout from './CaseStudyLayout.js';

const Tourism = () => {
  return (
    <CaseStudyLayout
      title="Tourism & Travel Booking Platform"
      subtitle="A full-stack travel booking application featuring user authentication, Razorpay checkout, automated confirmation emails, and a rule-based ticketing chatbot."
      image={tourism}
      overviewPoints={[
        "Implemented secure authentication and profile management for travel bookings using MongoDB, Express.js, React.js, and Node.js.",
        "Facilitated booking experiences for flights, hotels, and holiday packages integrated with Razorpay payment gateway.",
        "Automated booking confirmation emails dispatched via Nodemailer upon successful transactions.",
        "Developed an integrated rule-based chatbot to assist users with ticket inquiries and booking FAQs."
      ]}
      tools={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay', 'Nodemailer', 'JWT']}
      liveUrl="https://dreamdestination-website.netlify.app/"
      githubUrl="https://github.com/aaryarastogi/Tourism-Website"
      documentTitle="Case Study of Tourism Website"
    />
  );
};

export default Tourism;