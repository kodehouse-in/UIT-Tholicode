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
              Located in the serene village of Tholicode (Pulimoodu) in Tholicode
              in
              a peaceful and nature
              education
              quality
              is acenter of excellence dedicated to providing
              campus offers students a
              town, our
              rich environment. Just 13 kilometers from Nedumangad
              growth.
              calm and inspiring atmosphere for academic and personal
              goveraed by the Üniversity of Kerala
              Our college is one of the 34 iearning centers
              promote technology-focused
              (UOK), which established these institutions 25 ycars ago to
              programs such as
              education in rural areas. These centers offer specialized undergraduate Commerce with
              and B.Com.
              BBA, B.Sc. Computer Science, B.Sc. Electronics, BCA,
              access to modern
              Computer Applications, ensuring that students from remote
              locations have
              education and career opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50" ref={(el) => setRefs(el, 2)}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Join Us</h2>
          <div className="text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
              <p>
                We welcome students who aspire to learn, innovate, and grow in an institution that blends
                knowledgewith nature. Come, be apart of our journey toward excellence!
              </p>
              <p>
                Kur college has an active Career Guidance Cell dedicated to enpowering students with the
                knowiedge and resources they need to build successful careers. The cell plays a crucial role in
                guiding students toward higher education, skilldevelopment, and job opportunities by providing:
              </p>
            </div>
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

      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-white" ref={(el) => setRefs(el, 7)}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-16">Academic Programs</h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">B.Sc. Computer Science</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This program equips students with a solid foundation in computing, programming, and
                problem-solving, tailored for the fast-paced IT industry.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Course Highlights</h4>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>Core subjects: Programming, Data Structures, Algorithms, DBMS, Networks & Software Engineering.</li>
                  <li>Hands-on with modern languages like Python, Java, and C++.</li>
                  <li>Exposure to AI, ML, Cybersecurity, and Cloud Computing.</li>
                  <li>Real-world training via projects, coding labs, and internships.</li>
                  <li>Focus on logical thinking, analytical skills, and software development.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">B.Com with Computer Applications</h3>
              <p className="text-gray-700 leading-relaxed">
                The B.Com. Finance with Minor in
                Science program is designed to provide
                students with a strong foundation in Computer
                financial
                management,
                accounting, and businesSs
                operations, along with essential computer science
                skills. This unique combination prepares
                students for careers in finance, banking,
                fintech, and data-driven business
                management
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Course Highlights</h4>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>Core subjects in Accounting,Financial Management,Investment Analysis,and Taxation.</li>
                  <li>Minor in Computer Science,covering Programming,Data Analytics and Financial Technology(FinTech)</li>
                  <li>Hands-on training in business analytics,digital bnking and accounting software</li>
                  <li>Practical exposure through internships,case studies and financial modeling</li>
                  <li>Industry-relevant skills in data-driven decision-making and business automation</li>
                </ul>
              </div>
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
