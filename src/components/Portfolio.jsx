import React from 'react'
//import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import NewsLetter from '../assets/portfolio/NewsLetter.jpg'



const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: NewsLetter,
            link: 'https://github.com/Dhyey-Mcmaster/Session-UserAuth'
        },
        {
            id: 2,
            src: installNode,
            link: ''
        },
        {
            id: 3,
            src: navbar,
            link: ''
        },
        {
            id: 4,
            src: reactParallax,
            link: ''
        },
        {
            id: 5,
            src: reactSmooth,
            link: ''
        },
        {
            id: 6,
            src: reactWeather,
            link: ''
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work</p>
            </div>

            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
                portfolio.map(({id,src,link})=>(
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                      <a href={link} target="_blank" rel="noreferrer">  <img src={src} alt="NewsLetter Website" className="rounded-md duration-200 hover:scale-105"> 
                        </img></a>
                    </div>
                ))
            }

            </div>
            
        </div>

    </div>
  )
}

export default Portfolio