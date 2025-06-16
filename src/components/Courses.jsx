import React from "react";
import { FaLaptopCode, FaFileInvoice } from "react-icons/fa";

const Courses = () => {
  const courseList = [
    {
      title: "BACHELOR OF SCIENCE",
      subtitle: "COMPUTER SCIENCE",
      icon: <FaLaptopCode size={40} />,
    },
    {
      title: "BACHELOR OF COMMERCE",
      subtitle: "COMPUTER APPLICATION",
      icon: <FaFileInvoice size={40} />,
    },
  ];

  return (
    <section className="bg-cover bg-center relative py-16 px-4" style={{ backgroundImage: "url('/images/courses.svg')" }}>
      <div className="">
        <p className="text-white text-4xl p-5 font-bold">COURSES WE OFFER</p>
        <div className="flex justify-between px-50 py-10">
            <div className="flex flex-col items-center border-4 border-blue-800 bg-white px-12 py-10">
                <img className="w-12 " src="/images/CS.svg" alt="" />
                <p className="mt-3 text-2xl font-serif font-semibold text-blue-900">BACHELOR OF SCIENCE</p>
                <p>COMPUTER SCIENCE</p>
            </div>
            <div className="flex flex-col items-center border-4 border-blue-800 bg-white px-12 py-10">
                <img className="w-12 " src="/images/Commerce.svg" alt="" />
                <p className="mt-3 text-2xl font-serif font-semibold text-blue-900">BACHELOR OF COMMERCE</p>
                <p>COMPUTER APPLICATION</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
