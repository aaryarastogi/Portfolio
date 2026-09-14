import React from 'react';
import Quote from '../images/quote.png';
import CaseStudyLayout from './CaseStudyLayout.js';

const AutomaticQuote = () => {
  return (
    <CaseStudyLayout
      title="Automatic Quote Generator"
      subtitle="An interactive web application for generating inspirational, theme-filtered quotes dynamically with one-click social sharing."
      image={Quote}
      overviewPoints={[
        "Developed a sleek and responsive user interface using React JS, HTML5, and CSS3, ensuring smooth cross-device performance.",
        "Implemented dynamic quote generation functionality with category filters on button click for enhanced interactivity.",
        "Focused on minimal design principles with soft gradients, clean typography, and uncluttered layouts.",
        "Integrated one-click Twitter sharing allowing users to instantly tweet generated quotes to their followers."
      ]}
      tools={['React JS', 'JavaScript', 'CSS3', 'HTML5', 'Node.js', 'Netlify', 'GitHub']}
      liveUrl="https://itzquotegenerator.netlify.app/"
      githubUrl="https://github.com/aaryarastogi/Automatic-Quote-Generator"
      documentTitle="Case Study of Automatic Quote Generator"
    />
  );
};

export default AutomaticQuote;