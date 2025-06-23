import React from 'react'
import { useNavigate } from 'react-router-dom';

const FacultyIntro = () => {
    const navigateTo = useNavigate();
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 ">
      {/* Decorative background blob */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl "></div>

      <div className="max-w-6xl mx-auto relative ">
        <h2 className="sm:text-5xl text-4xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-950 to-black text-transparent bg-clip-text">
            Meet Our Faculty
          </span>
        </h2>

        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

          

          <div className="text-gray-700 text-lg flex flex-col items-center leading-relaxed relative">
            <p className="relative ">
              At <span className="font-semibold text-blue-800">UIT Tholicode</span>, we take pride in our team of dedicated, knowledgeable, and inspiring faculty members. With a strong commitment to academic excellence and student success, our educators bring a perfect blend of teaching experience and industry insights. They create a supportive and engaging learning environment that empowers students to grow intellectually, professionally, and personally.
            </p>

            <button 
                onClick={() => navigateTo('/Faculties')} 
                className="mt-6 sm:px-6 px-18 py-3 bg-blue-950 text-white rounded-full shadow hover:bg-blue-900 transition duration-300"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacultyIntro
