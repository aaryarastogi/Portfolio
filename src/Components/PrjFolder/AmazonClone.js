import React from 'react';
import amazon from '../images/amazon.png';
import CaseStudyLayout from './CaseStudyLayout.js';

const AmazonClone = () => {
  return (
    <CaseStudyLayout
      title="Amazon Clone"
      subtitle="A feature-packed e-commerce homepage simulation replicating Amazon's core UI, product grid, navigation, and client-side cart management."
      image={amazon}
      overviewPoints={[
        "Designed Amazon's homepage UI using HTML, CSS, and React JS with responsive product cards, promo banners, and navbar controls.",
        "Implemented real-time add-to-cart and remove-from-cart state management directly in the client browser.",
        "Created a dynamic product grid rendering items with instant UI updates during cart interactions.",
        "Optimized layout responsiveness across mobile, tablet, and desktop viewports."
      ]}
      tools={['React JS', 'JavaScript', 'CSS3', 'HTML5', 'GitHub', 'Netlify']}
      liveUrl="https://mineamazonclonewebapp.netlify.app"
      githubUrl="https://github.com/aaryarastogi/amazonclone/tree/master"
      documentTitle="Case Study of Amazon Clone"
    />
  );
};

export default AmazonClone;