import React from 'react';
import { FaBriefcase, FaGraduationCap, FaTools } from 'react-icons/fa';

const experience = [
  {
    role: 'Intern to Software Engineer',
    company: 'LIFYA',
    dates: 'June 2024 - Jan 2025',
    detail: 'Built multi-vendor dashboard features in a startup team, reducing manual admin time by 30% and improving vendor workflow usability.',
  },
  {
    role: 'IT Specialist',
    company: 'Yusen Logistics',
    dates: 'Sept 2022 - Sept 2023',
    detail: 'Delivered PowerApps and SharePoint workflow automation, removing 35% of manual logistics processes and training 20+ staff.',
  },
  {
    role: 'Software Developer in Testing and Technical Support',
    company: 'Infinity',
    dates: 'May 2019 - July 2020',
    detail: 'Created Selenium automation, supported QA releases, reproduced bugs, and handled high-volume B2B technical support.',
  },
];

const CVPage = () => {
  return (
    <main className='min-h-screen bg-[#f7fbff] px-4 pb-28 pt-16 text-slate-900 transition-colors dark:bg-[#081126] dark:text-white sm:px-6 lg:px-10'>
      <section className='mx-auto max-w-6xl'>
        <div className='rounded-[2rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 p-1 shadow-2xl shadow-blue-500/20'>
          <div className='rounded-[1.8rem] bg-white/95 p-8 dark:bg-[#101b3a]/95 sm:p-10'>
            <p className='font-nav text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-cyan-300'>CV Snapshot</p>
            <h1 className='mt-4 font-header text-4xl font-bold text-slate-950 dark:text-white sm:text-6xl'>Said Khail</h1>
            <p className='mt-4 max-w-3xl font-body text-lg leading-8 text-slate-700 dark:text-slate-300'>
              Technical engineer with experience in software development, automation, workflow optimisation, testing, and support, with a strong interest in AI-focused and
              problem-solving roles.
            </p>
          </div>
        </div>

        <div className='mt-8 grid gap-6 lg:grid-cols-3'>
          <div className='rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 dark:bg-[#101b3a] dark:shadow-black/30'>
            <FaTools className='text-3xl text-fuchsia-500' />
            <h2 className='mt-4 font-header text-2xl font-bold'>Skills</h2>
            <p className='mt-3 font-body leading-7 text-slate-600 dark:text-slate-300'>JavaScript, Python, React, Django, Pandas, Power BI, Azure, MongoDB, PostgreSQL, Selenium, Postman, PowerApps.</p>
          </div>

          <div className='rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 dark:bg-[#101b3a] dark:shadow-black/30'>
            <FaGraduationCap className='text-3xl text-blue-500' />
            <h2 className='mt-4 font-header text-2xl font-bold'>Education</h2>
            <p className='mt-3 font-body leading-7 text-slate-600 dark:text-slate-300'>
              MSc Computer Science with Artificial Intelligence at University of York, frontend certificate, and BSc Ecommerce and Business.
            </p>
          </div>

          <div className='rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/70 dark:bg-[#101b3a] dark:shadow-black/30'>
            <FaBriefcase className='text-3xl text-cyan-500' />
            <h2 className='mt-4 font-header text-2xl font-bold'>Direction</h2>
            <p className='mt-3 font-body leading-7 text-slate-600 dark:text-slate-300'>Focused on practical software, automation, support, and AI-aware tools that help businesses work smarter.</p>
          </div>
        </div>

        <div className='mt-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/70 dark:bg-[#101b3a] dark:shadow-black/30 sm:p-8'>
          <h2 className='font-header text-3xl font-bold'>Experience</h2>
          <div className='mt-6 space-y-5'>
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className='rounded-3xl border border-slate-100 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/10'>
                <p className='font-body text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300'>{item.dates}</p>
                <h3 className='mt-2 font-header text-xl font-bold text-slate-950 dark:text-white'>{item.role}</h3>
                <p className='font-body text-sm font-semibold text-slate-500 dark:text-slate-400'>{item.company}</p>
                <p className='mt-3 font-body leading-7 text-slate-700 dark:text-slate-300'>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CVPage;
