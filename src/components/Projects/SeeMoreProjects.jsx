import React from 'react';
import WeatherApp from '../../assets/Images/Weather-App.png';
import RPSGame from '../../assets/Images/RPSGame.png';

const projects = [
  {
    id: 1,
    image: WeatherApp,
    title: 'Weather Dashboard',
    description:
      'This Weather application allows users to efficiently view their desired city. The provides a user a friendly interface enabling a user to search for a city and the city will be added in the Saved Cities.',
    link: { WeatherApp },
    github: 'https://skhail.github.io/Weather-Dashboard/',
  },
  {
    id: 2,
    image: RPSGame,
    title: 'RPS Game',
    description:
      'Rock, Paper, Scissors is game played between two people, where each player has a choice of 👊🏽 ✋🏽 ✄ it is a simple yet strategic game that often resolves disputes, entertains friends and bring joy to all ages.',
    link: { RPSGame },
    github: 'https://skhail.github.io/RPS-Game/',
  },
  {
    id: 3,
    image: RPSGame,
    title: 'RPS Game',
    description: 'Rock, Paper, Scissors is game played between two people, where each player has a choice of 👊🏽 ✋🏽 ✄',
    link: { RPSGame },
    github: 'https://skhail.github.io/RPS-Game/',
  },
  {
    id: 4,
    image: RPSGame,
    title: 'RPS Game',
    description: 'Rock, Paper, Scissors is game played between two people, where each player has a choice of 👊🏽 ✋🏽 ✄',
    link: { RPSGame },
    github: 'https://skhail.github.io/RPS-Game/',
  },
  {
    id: 5,
    image: RPSGame,
    title: 'RPS Game',
    description: 'Rock, Paper, Scissors is game played between two people, where each player has a choice of 👊🏽 ✋🏽 ✄',
    link: { RPSGame },
    github: 'https://skhail.github.io/RPS-Game/',
  },
  {
    id: 6,
    image: RPSGame,
    title: 'RPS Game',
    description: 'Rock, Paper, Scissors is game played between two people, where each player has a choice of 👊🏽 ✋🏽 ✄',
    link: { RPSGame },
    github: 'https://skhail.github.io/RPS-Game/',
  },
];

const SeeMoreProjects = () => {
  return (
    <div className='py-12 bg-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'></div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group p-6 sm:p-8 rounded-3xl bg-white border border-purple-section dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'
            >
              <div className='relative overflow-hidden rounded-xl'>
                <img
                  src={project.image}
                  alt={project.title}
                  loading='lazy'
                  className='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105 border-purple-section bg-white border '
                />
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-2xl flex items-center font-semibold text-gray-800 dark:text-white'>{project.title}</h3>
                <p className='mt-6 mb-8 text-gray-600 dark:text-gray-300 font-nav font-extralight'>{project.description}</p>
                <a href={project.link} className='inline-block'>
                  <a href={project.github} className='font-header  dark:text-purple-section' target='_blank'>
                    View Github
                  </a>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeMoreProjects;
