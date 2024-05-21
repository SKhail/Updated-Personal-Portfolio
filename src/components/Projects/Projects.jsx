import React from 'react';
// Project images
import SmartGadget from '../../assets/Images/Smart-Gadget.svg';
import MovieQuest from '../../assets/Images/Move-Quest.svg';
import AnimeQuest from '../../assets/Images/Anime-Quest.svg';

//importing child components
import { ProjectButton } from '../Projects/ProjectButton';

const projects = [
  {
    id: 1,
    image: SmartGadget,
    title: 'Smart Gadget',
    description: 'A ecommerce app for discovering and purchasing the latest gadgets. Smart Gadget App offers an unparalleled shopping experience for tech enthusiasts.',
    link: { SmartGadget },
    github: 'https://smart-gadget123.netlify.app/',
  },
  {
    id: 2,
    image: MovieQuest,
    title: 'Movie Quest',
    description:
      'Movie-Quest users can easily search for the movie that they are interested to know more information. This was built with a team 4.experience for tech enthusiasts',
    link: { MovieQuest },
    github: 'rootgeorge17.github.io/Movie-Quest/',
  },

  {
    id: 3,
    image: AnimeQuest,
    title: 'Anime Quest',
    description: 'The focus on this project is to build a quiz with popular Anime type of questions that will include high score system for players to keep track.',
    link: { AnimeQuest },
    github: 'https://skhail.github.io/Anime-Quiz/',
  },
];

const Projects = () => {
  return (
    <div className='py-12 bg-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>A Variety Of Things I've Built</h2>
          <p className='lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300'>
            These are few of the projects I have built solo with and with a team. If you like to see more click on the Projects tabs
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'
            >
              <div className='relative overflow-hidden rounded-xl'>
                <img src={project.image} alt={project.title} loading='lazy' className='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105' />
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-2xl flex items-center font-semibold text-gray-800 dark:text-white'>{project.title}</h3>
                <p className='mt-6 mb-8 text-gray-600 dark:text-gray-300'>{project.description}</p>
                <a href={project.link} className='inline-block'>
                  <a href={project.github} className='text-info dark:text-blue-300'>
                    View Github
                  </a>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className=' mt-8 flex flex-col items-center'>
          <ProjectButton />
        </div>
      </div>
    </div>
  );
};

export default Projects;
