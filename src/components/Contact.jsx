import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
    <p className="text-xl max-w-xl mx-auto mb-8">
      I'm currently available for freelance projects and full-time opportunities. Let's build something amazing together!
    </p>
    
    <div className="flex justify-center space-x-4 mb-12">
      <a 
        href="mailto:your.dhyeyfarasram@gmail.com" 
        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-300 text-lg"
      >
        Hire Me
      </a>
      <a 
        href="projects" 
        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-300 text-lg"
      >
        View My Work
      </a>
    </div>
    
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the from below to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/d612543c-a803-4135-af34-527ec8a5593a" method="post" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter you Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <input type="text" name="email" placeholder="Enter you Email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Lets chat</button>
                </form>
            </div>

        </div>
  </div>
</section>
  )
}

export default Contact
