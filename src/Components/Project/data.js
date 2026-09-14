import img1 from '../images/restaurant.png'
import img2 from '../images/ecommerce.png'
import img3 from '../images/quote.png'
import img4 from '../images/amazon.png'
import img5 from '../images/weather.png'
import img6 from '../images/tourism.png'
import chatbotai from '../images/chatbotai.jpg'

const data={
    categories: ['All', 'Full Stack', 'AI & Web', 'Frontend'],
    cardData:[
        {
            id:1,
            Name:'tourismWebsite',
            img:img6,
            title:'Tourism Website',
            category:'Full Stack',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
            featured: true,
            desc:'Full-stack MERN tourism platform featuring interactive destination guides, custom travel packages, and seamless booking workflows with responsive glass UI.'
        },
        {
            id:2,
            Name:'chatbotAI',
            img:chatbotai,
            title:'Chatbot AI',
            category:'AI & Web',
            techStack: ['React', 'Google Gemini AI', 'Google OAuth', 'AWS Amplify', 'Node.js'],
            featured: true,
            desc:'Full-stack AI assistant powered by Google Gemini API for real-time streaming responses, secure Google OAuth authentication, and deployed on AWS Amplify.'
        },
        {
            id:3,
            Name:'cartify',
            img:img2,
            title:'Cartify',
            category:'Full Stack',
            techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux Toolkit'],
            featured: false,
            desc:'Feature-rich MERN e-commerce platform featuring stateful cart management, secure user authentication, order processing, and dynamic product catalogs.'
        },
        {
            id:4,
            Name:'restaurantWebsite',
            img:img1,
            title:'Restaurant Website',
            category:'Frontend',
            techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
            featured: false,
            desc:'Interactive dining application featuring dynamic food menus, real-time cart state management, elegant visual galleries, and smooth Framer Motion animations.'
        },
        {
            id:5,
            Name:'weatherForecastingWebsite',
            img:img5,
            title:'Weather Forecasting Website',
            category:'Frontend',
            techStack: ['Node.js', 'Express', 'OpenWeather API', 'JavaScript', 'CSS3'],
            featured: false,
            desc:'Real-time weather application powered by Node.js and OpenWeather API, delivering instant climate analytics, multi-day forecasts, and live location search.'
        },
        {
            id:6,
            Name:'automaticQuoteGenerator',
            img:img3,
            title:'Automatic Quote Generator',
            category:'Frontend',
            techStack: ['JavaScript', 'Twitter Web API', 'HTML5', 'CSS3'],
            featured: false,
            desc:'Interactive web application generating dynamic motivational quotes with one-click Twitter API sharing, copy-to-clipboard, and customizable themes.'
        },
        {
            id:7,
            Name:'amazonClone',
            img:img4,
            title:'Amazon Clone',
            category:'Frontend',
            techStack: ['React', 'Context API', 'Firebase', 'CSS Grid'],
            featured: false,
            desc:'Pixel-perfect e-commerce interface replicating Amazon\'s storefront, product filtering, dynamic cart state management, and user checkout flow.'
        },
    ]
}

export default data