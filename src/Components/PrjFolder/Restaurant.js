import React from 'react';
import restaurant from '../images/restaurant.png';
import CaseStudyLayout from './CaseStudyLayout.js';

const Restaurant = () => {
  return (
    <CaseStudyLayout
      title="Restaurant Web Application"
      subtitle="A modern multi-page restaurant ordering platform featuring interactive menus, cart state management, and Firebase cloud integration."
      image={restaurant}
      overviewPoints={[
        "Designed a multi-page web application enabling customers to explore culinary menus, select items, and manage food orders online.",
        "Built responsive food catalog cards with interactive category filtering and state-managed cart summary.",
        "Integrated Firebase cloud services for seamless data handling and ordering workflows.",
        "Optimized layout and performance for desktop, tablet, and mobile food ordering."
      ]}
      tools={['React.js', 'Tailwind CSS', 'JavaScript', 'Firebase', 'Netlify', 'GitHub']}
      liveUrl="https://minerestaurantwebapp.netlify.app"
      githubUrl="https://github.com/aaryarastogi/Restaurant-Website"
      documentTitle="Case Study of Restaurant Website"
    />
  );
};

export default Restaurant;