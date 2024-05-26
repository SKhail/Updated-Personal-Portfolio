import React from 'react';
import WeatherApp from '../../assets/Images/Weather-App.png';
import RPSGame from '../../assets/Images/RPSGame.png';
import DailyPlanner from '../../assets/Images/Work-Day.svg';
import JavaCoffee from '../../assets/Images/Java-Coffee.svg';
import ReadGenerator from '../../assets/Images/Readme-Generator.svg';

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
    image: DailyPlanner,
    title: 'Daily Planner',
    description:
      'This daily planner application allows users to efficiently manage their daily tasks within business hours. Users have the ability to save tasks within each timeblock and the data persists even after refereshing the page.',
    github: 'https://skhail.github.io/Daily-Planner-App/',
  },
  {
    id: 3,
    image: RPSGame,
    title: 'RPS Game',
    description:
      'Rock, Paper, Scissors is game played between two people, where each player has a choice of 👊🏽 ✋🏽 ✄ it is a simple yet strategic game that often resolves disputes, entertains friends and bring joy to all ages.',
    github: 'https://skhail.github.io/RPS-Game/',
  },
  {
    id: 4,
    image: JavaCoffee,
    title: 'Java Coffee',
    description:
      'This is Java Coffee. A coffee shop that is for coffee lovers. Our cozy atmosphere, freshly brewed coffee, delicious pastries, and friendly staff create the perfect spot for relaxation, socializing, or working.',
    github: 'https://github.com/SKhail/Java-Coffee',
  },
  {
    id: 5,
    image: ReadGenerator,
    title: 'CLI ReadMe Generator ',
    description:
      'this project creates a good quality README file by using Node.js and will be using the Inquirer package . This tool will guide you through a series of prompts, allowing a user to input specific details',
    github: 'https://github.com/SKhail/ReadMe-Generator',
  },
  {
    id: 6,
    image: RPSGame,
    title: 'RPS Game',
    description: 'Rock, Paper, Scissors is game played between two people, where each player has a choice of 👊🏽 ✋🏽 ✄',
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
              className='group p-6 sm:p-8 rounded-3xl bg-white bdark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'
            >
              <div className='relative overflow-hidden rounded-xl'>
                <img
                  src={project.image}
                  alt={project.title}
                  loading='lazy'
                  className='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105  bg-white border '
                />
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-2xl py-1 flex items-center font-semibold text-gray-800 dark:text-white'>{project.title}</h3>
                <p className='mt-2 mb-8 text-center text-gray-600 dark:text-gray-300 font-nav font-extralight'>{project.description}</p>
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
