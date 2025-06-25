import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePage } from "../contexts/PageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChatBot from "../components/ChatBot";
import { FaWhatsapp } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const { setPage } = usePage();
  const sectionsRef = useRef([]);

  useEffect(() => {
    setPage("/about-us");
  }, []);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  const setRefs = (el, i) => (sectionsRef.current[i] = el);

  return (
    <div className="">
      <div className="overflow-x-hidden">
      <Header />
      <Navbar />

      <section className="relative bg-gradient-to-r from-blue-950 to-indigo-950 text-white" ref={(el) => setRefs(el, 0)}>
        <div className="relative z-10 px-6 py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About UIT Tholicode</h1>
          <p className="text-lg max-w-3xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white" ref={(el) => setRefs(el, 1)}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/campusPic.avif"
              alt="Campus View"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text... [lorem trimmed]
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50" ref={(el) => setRefs(el, 2)}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">What Makes Us Unique</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {["Strong Community Roots", "Student-Centered Learning", "Technology-Enabled Campus"].map((title, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md"
                ref={(el) => setRefs(el, i + 3)}
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
                <p className="text-gray-700">
                  There are many variations of passages of Lorem Ipsum available...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white" ref={(el) => setRefs(el, 6)}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be a center of excellence in computer science education, research, and innovation,
                empowering students to become leaders in technology-driven industries.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
              <ul className="list-disc list-inside text-gray-700  space-y-2">
                <li>
                  To provide a strong foundation in computer science concepts and emerging
                  technologies.
                </li>
                <li>
                  To equip students with practical skills in programming, software development,
                  and AIapplications.
                </li>
                <li>
                  To promote research, innovation, and industry collaborations.
                </li>
                <li>
                  Toprepare students for successfulcareers in IT,entrepreneurship, and higher
                  education.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50" ref={(el) => setRefs(el, 7)}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Academic Programs</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">B.Sc. Computer Science</h3>
              <p className="text-gray-700">
                There are many variations of passages of Lorem Ipsum available...
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">B.Com with Computer Applications</h3>
              <p className="text-gray-700">
                There are many variations of passages of Lorem Ipsum available...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white" ref={(el) => setRefs(el, 8)}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Campus Life</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["students", "Tour", "sports"].map((img, i) => (
              <img
                key={i}
                src={`/images/${img}.avif`}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
                ref={(el) => setRefs(el, 9 + i)}
              />
            ))}
          </div>
        </div>
      </section>
      <ChatBot/>
      <Footer />
    </div>
    <a
      href="https://wa.me/919074311597"
      target="_blank"
      className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
    >
      <FaWhatsapp size={30} />
    </a>
    </div>
  );
}
