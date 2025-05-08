import React from 'react'
//import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import newsletterImage from '../assets/portfolio/NewsLetter.jpg'
import mediaControlImage from '../assets/portfolio/Media.jpg'
import courseRegistrationImage from '../assets/portfolio/Automate.jpg'
import plantPlusImage from '../assets/portfolio/Plant.jpg'



const PortfolioCard = ({ title, description, image, technologies, githubLink, liveLink, problem, solution }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
  
        {/* Problem Section */}
        <div className="mb-3">
          <h4 className="font-semibold">Problem:</h4>
          <p className="text-sm text-gray-600">{problem}</p>
        </div>
  
        {/* Solution Section */}
        <div className="mb-3">
          <h4 className="font-semibold">Solution:</h4>
          <p className="text-sm text-gray-600">{solution}</p>
        </div>
  
        {/* Technologies Section */}
        <div className="mb-4">
          <h4 className="font-semibold">Technologies:</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
  
        {/* Links Section */}
        <div className="flex justify-between mt-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            GitHub →
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
  
  const Portfolio = () => {
    const portfolio = [
      {
        title: 'NewsLetter',
        description: 'A responsive newsletter subscription application',
        image: newsletterImage,
        technologies: ['React', 'Tailwind CSS', 'Vite'],
        githubLink: 'https://github.com/dhyeyfarasram/NewsLetter',
        liveLink: '',
        problem: 'Businesses need an elegant and responsive way to collect newsletter subscriptions from potential customers across devices.',
        solution: 'Created a clean, minimalist subscription form with responsive design and client-side validation to ensure high conversion rates.',
      },
      {
        title: 'PlantPlus',
        description: 'A plant care and monitoring application',
        image: plantPlusImage,
        technologies: ['React Native', 'Expo', 'AsyncStorage'],
        githubLink: 'https://github.com/dhyeyfarasram/PlantPlus',
        liveLink: '',
        problem: 'Plant enthusiasts struggle to keep track of watering schedules and care requirements for multiple plants.',
        solution: 'Developed a mobile app that provides care reminders and plant information in an intuitive interface with both light and dark modes.',
      },
      {
        title: "MediaControl",
        description: "A Java-based media player control application with voice recognition capabilities",
        image: mediaControlImage, 
        technologies: ["Java", "JavaFX", "VoiceRecognition", "FXML"],
        githubLink: "https://github.com/dhyeyfarasram/MediaControl",
        liveLink: "", 
        problem: "Users need a convenient way to control media playback without requiring constant manual interaction with traditional controls.",
        solution: "Developed a Java application that combines traditional media controls with voice recognition, allowing hands-free operation of media players through voice commands for play, pause, volume control, and more."
      },
      {
        title: "Course Registration System",
        description: "A web-based university course registration system with role-based access",
        image: courseRegistrationImage, 
        technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
        githubLink: "https://github.com/dhyeyfarasram/3RQ3_Project",
        liveLink: "", 
        problem: "University students and administrators need an efficient, user-friendly system to manage course registration, waitlists, and prerequisites.",
        solution: "Created a comprehensive web application with different interfaces for students, instructors, and administrators that handles course registration, waitlisting, prerequisite verification, and schedule management while ensuring data integrity and security."
      },
      
    ];
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen pb-8">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
              <p className="py-6">Check out some of my work</p>
            </div>
      
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolio.map((project, index) => (
                <PortfolioCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      );
  };

export default Portfolio
