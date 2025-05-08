import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
              Experienced full-stack developer and web developer with a strong foundation in JavaScript and frameworks like React. Proficient in designing secure, scalable web applications, developing RESTful APIs, and optimizing performance. Skilled in database management with SQL Server, version control using Git, and Agile methodologies. Familiar with DevOps practices, cloud platforms, and containerization technologies, with a proven ability to deliver high-quality, user-focused solutions efficiently.
           </p>
        </div>
    </div>
  )
}

export default About
