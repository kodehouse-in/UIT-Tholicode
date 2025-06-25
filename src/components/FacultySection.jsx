import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faculties = {
  'Department of Computer Science': [
    { name: 'Athira R S', role: 'Head of Department', photo: '/images/athira.jfif' },
    { name: 'Muhammed Roshan A', role: 'Assistant Professor', photo: '/images/roshan.png' },
    { name: 'Remya S Das', role: 'Assistant Professor', photo: '/images/remya.jfif' },
    { name: 'Rakhi Gopan R', role: 'Assistant Professor', photo: '/images/rakhi.jfif' },
    { name: 'Lekshmi P', role: 'Lab Instructor', photo: '/images/lekshmi.jfif' },
  ],
  'Department of Commerce': [
    { name: 'Chandralekha K S', role: 'Head of Department', photo: '/images/principal.png' },
    { name: 'Reeja Vijayan', role: 'Assistant Professor', photo: '/images/reeja.jfif' },
    { name: 'Shani Raj D', role: 'Assistant Professor', photo: '/images/shani.png' },
    { name: 'Sujitha I S', role: 'Assistant Professor', photo: '/images/sujitha.png' },
  ],
};

const FacultyCard = ({ name, role, photo }) => (
  <div className="faculty-card bg-white shadow-lg rounded-2xl p-4 text-center transition duration-300 hover:shadow-2xl cursor-pointer">
    <img
      src={photo}
      alt={name}
      className="w-35 sm:w-40 h-35 sm:h-40 mx-auto rounded-full object-cover mb-4"
    />
    <h3 className="text-lg mt-3 font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

const FacultySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.faculty-title').forEach((title) => {
        gsap.from(title, {
          x: -100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
          },
        });
      });

      gsap.utils.toArray('.faculty-card').forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
          },
        });

        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -5, duration: 0.3, ease: 'power1.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  

  return (
    <>
      <section ref={sectionRef} className="relative bg-gradient-to-r from-blue-950 to-indigo-950 text-white">
        <div className="relative z-10 px-6 py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About UIT Tholicode</h1>
          <p className="text-lg max-w-3xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority.
          </p>
        </div>
      </section>
      <section ref={sectionRef} className="px-6 md:px-20 py-10 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="sm:text-3xl text-4xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Meet Our Faculties
          </h2>

          {Object.entries(faculties).map(([department, members]) => (
            <div key={department} className="mb-16">
              <div className="flex justify-center sm:justify-start">
                <h3 className="faculty-title sm:text-2xl text-xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block">
                  {department}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                {members.map((faculty, idx) => (
                  <FacultyCard key={idx} {...faculty} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FacultySection;
