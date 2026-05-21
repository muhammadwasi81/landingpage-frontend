import React from 'react';
import { FaArrowRight, FaLayerGroup, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';

const features = [
  {
    title: 'Senior Engineers',
    desc: 'Top 5% vetted developers with real production experience',
    icon: FaUsers,
    accent: 'from-[#c046ff] to-[#fc46c9]',
    border: 'border-[#bd43ff]',
    iconColor: 'text-[#c046ff]',
  },
  {
    title: 'Fast Delivery',
    desc: 'Rapid execution with optimized workflows',
    icon: FaRocket,
    accent: 'from-[#3f5efb] to-[#32b8ff]',
    border: 'border-[#4c73ff]',
    iconColor: 'text-[#32b8ff]',
  },
  {
    title: 'Scalable Teams',
    desc: 'Easily scale teams based on project needs',
    icon: FaLayerGroup,
    accent: 'from-[#3f5efb] to-[#23f0de]',
    border: 'border-[#23f0de]',
    iconColor: 'text-[#23f0de]',
  },
  {
    title: 'Secure by Design',
    desc: 'Security-first architecture and implementation',
    icon: FaShieldAlt,
    accent: 'from-[#fc46c9] to-[#FC466B]',
    border: 'border-[#fc46c9]',
    iconColor: 'text-[#fc46c9]',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 text-white">
      <div className="absolute -left-28 -top-32 h-72 w-72 rounded-full border border-[#FC466B]/40 bg-[#6318F1]/10 blur-sm" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full border border-[#FC466B]/30 bg-[#6318F1]/10 blur-sm" />
      <div className="absolute left-6 bottom-16 hidden h-28 w-28 bg-[radial-gradient(circle,#6318F1_2px,transparent_2px)] [background-size:18px_18px] opacity-50 sm:block" />
      <div className="absolute right-10 top-24 hidden h-28 w-28 bg-[radial-gradient(circle,#6318F1_2px,transparent_2px)] [background-size:18px_18px] opacity-50 lg:block" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="rounded-full border border-[#3F5EFB] bg-[#110D2E]/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_30px_rgba(99,24,241,0.35)]">
            Why Choose Us
          </span>
          <h2 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Why Companies{' '}
            <span className="bg-gradient-to-r from-[#c046ff] via-[#3F5EFB] to-[#23f0de] bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
            We deliver scalable, secure, and future-ready solutions.
          </p>
          <div className="mt-7 h-1 w-36 rounded-full bg-gradient-to-r from-[#c046ff] via-[#3F5EFB] to-[#23f0de]" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {features.map(({ title, desc, icon: Icon, accent, border, iconColor }) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-3xl border ${border} bg-[#080326]/80 px-6 py-8 text-center shadow-[0_0_40px_rgba(99,24,241,0.15)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_48px_rgba(99,24,241,0.32)]`}
            >
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle,#6318F1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-30" />
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-current bg-[#110D2E] text-4xl shadow-[inset_0_0_28px_rgba(63,94,251,0.2)]">
                <Icon className={iconColor} />
              </div>
              <h3 className="relative mt-7 text-2xl font-bold">{title}</h3>
              <div className={`relative mx-auto mt-6 h-1 w-14 rounded-full bg-gradient-to-r ${accent}`} />
              <p className="relative mt-6 text-base leading-7 text-gray-300">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-5 rounded-2xl bg-gradient-to-r from-[#6318F1] to-[#FC466B] px-10 py-4 text-lg font-bold text-white shadow-[0_0_35px_rgba(252,70,107,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(63,94,251,0.5)]"
          >
            Start Your Project
            <FaArrowRight aria-hidden="true" className="text-2xl" />
          </a>
          <p className="text-base text-gray-400">Let's build something amazing together.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
