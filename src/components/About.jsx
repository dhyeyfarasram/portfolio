import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
Exemplary software professional with 3+ years of experience in developing web applications using JavaScript, HTML, and CSS, and integrating third-party APIs to enable seamless user experience. Skilled at developing scalable software solutions, conducting comprehensive testing, and actively participating in code reviews to ensure optimal functionality. Proficient in developing RESTful APIs for improving data exchange efficiency and reducing response time.            </p>
            <br/>
        </div>
    </div>
  )
}

export default About
