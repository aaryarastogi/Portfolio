import React from 'react';
import weather from '../images/weather.png';
import CaseStudyLayout from './CaseStudyLayout.js';

const Weather = () => {
  return (
    <CaseStudyLayout
      title="Weather Forecasting Web App"
      subtitle="A real-time meteorological tracking web application delivering accurate weather forecasts, humidity, wind speeds, and atmospheric metrics."
      image={weather}
      overviewPoints={[
        "Built a real-time weather forecasting app providing up-to-date weather conditions and multi-day predictions.",
        "Integrated live weather data APIs for instant retrieval of temperature, cloud coverage, humidity, and location metrics.",
        "Implemented Express.js backend services and dynamic frontend rendering for responsive user experiences.",
        "Designed clean weather status cards and atmospheric metrics displays."
      ]}
      tools={['JavaScript', 'Express.js', 'HTML5', 'CSS3', 'Weather API', 'Netlify', 'GitHub']}
      liveUrl="https://weather-forecasting-web-app-1.onrender.com/"
      githubUrl="https://github.com/aaryarastogi/weather-app"
      documentTitle="Case Study of Weather Forecasting Web App"
    />
  );
};

export default Weather;