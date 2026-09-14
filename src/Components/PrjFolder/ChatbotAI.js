import React from 'react';
import chatbotai from '../images/chatbotai.jpg';
import CaseStudyLayout from './CaseStudyLayout.js';

const ChatbotAI = () => {
  return (
    <CaseStudyLayout
      title="Chatbot AI"
      subtitle="An intelligent full-stack AI conversational platform integrated with Google's Gemini API streaming responses, OAuth authentication, and AWS Amplify cloud hosting."
      image={chatbotai}
      overviewPoints={[
        "Built a full-stack AI chatbot application enabling real-time, conversational interactions with Google's Gemini AI model.",
        "Implemented secure authentication supporting Google OAuth and traditional email/password sign-in.",
        "Integrated the Gemini API with streaming responses, so answers generate token-by-token for a natural chat experience.",
        "Deployed on AWS Amplify with automated CI/CD continuous deployment pipelines."
      ]}
      tools={['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'AWS Amplify', 'GitHub']}
      liveUrl="https://main.dynaa37iporn7.amplifyapp.com/"
      githubUrl="https://github.com/aaryarastogi/Chatbot-AI"
      documentTitle="Case Study of Chatbot AI"
    />
  );
};

export default ChatbotAI;