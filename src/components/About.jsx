import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            Dedicated student interested in applying excellent communication and interpersonal skills to a Web Developer role, with innovative Software Developer skills and hands-on experience designing and testing applications. Well-versed in Agile methodologies and coding languages. Dedicated to developing creative solutions to meet business goals and requirements.
            </p>
            <br/>
        </div>
    </div>
  )
}

export default About