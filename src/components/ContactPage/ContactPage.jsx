import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main id="contact" className="flex min-h-screen items-center bg-[#f6fbff] px-4 pb-28 pt-16 text-slate-950 transition-colors dark:bg-[#081126] dark:text-white sm:px-6 lg:px-10">
      <section className="mx-auto w-full max-w-4xl text-center">
        <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 p-1 shadow-2xl shadow-blue-500/20">
          <div className="rounded-[1.8rem] bg-white/90 p-8 backdrop-blur dark:bg-[#101b3a]/90 sm:p-12">
            <p className="font-nav text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-cyan-300">Contact</p>
            <h1 className="mt-4 font-header text-5xl font-bold sm:text-7xl">Let’s talk.</h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-8 text-slate-700 dark:text-slate-300">
              Interested in working together or discussing a role? Reach out directly.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              <a
                href="mailto:saidkhail091@gmail.com"
                className="flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 font-body font-semibold text-white transition hover:bg-blue-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                <FaEnvelope />
                Email Said
              </a>
              <a
                href="https://github.com/SKhail"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-body font-semibold text-slate-700 transition hover:border-fuchsia-300 hover:text-fuchsia-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-200"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
