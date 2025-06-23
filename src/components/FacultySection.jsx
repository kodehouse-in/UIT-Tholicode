import React from 'react';

const faculties = {
  'BSc Computer Science': [
    {
      name: 'Athira R S',
      role: 'Head of Department',
      photo: '/images/Athira.jpg',
    },
    {
      name: 'Muhammed Roshan A',
      role: 'Assistant Professor',
      photo: '/images/roshan.png',
    },
    {
      name: 'Remya S Das',
      role: 'Assistant Professor',
      photo: '/images/Remya.jpg',
    },
    {
      name: 'Rakhi Gopan R',
      role: 'Assistant Professor',
      photo: '/images/Rakhi.jpg',
    },
    {
      name: 'Lekshmi P',
      role: 'Lab Instructor',
      photo: '/images/lekshmi.jpg',
    },
  ],
  'BCom': [
    {
      name: 'Chandralekha K S',
      role: 'Head of Department',
      photo: '/images/Chandralekha.jpg',
    },
    {
      name: 'Reeja Vijayan',
      role: 'Assistant Professor',
      photo: '/images/Reeja.jpg',
    },
    {
      name: 'Shani Raj D',
      role: 'Assistant Professor',
      photo: '/images/shani.png',
    },
    {
      name: 'Sujitha I S',
      role: 'Assistant Professor',
      photo: '/images/sujitha.png',
    },
  ],
};

const FacultyCard = ({ name, role, photo }) => (
  <div className="bg-white shadow-lg rounded-2xl p-4 text-center hover:shadow-xl transition">
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
  return (
    <section className="px-6 md:px-20 py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="sm:text-3xl text-4xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Meet Our Faculties
        </h2>

        {Object.entries(faculties).map(([department, members]) => (
          <div key={department} className="mb-16">
            <div className="flex justify-center sm:justify-start">
                <h3 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block">
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
  );
};

export default FacultySection;
