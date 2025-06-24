import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { usePage } from "../contexts/PageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Academics() {
  const { page, setPage } = usePage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    setPage("/academics");
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      ).fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <section
        ref={sectionRef}
        className="bg-gradient-to-bl from-white to-indigo-50 py-16 px-6 min-h-screen"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl font-extrabold text-center text-blue-950 mb-10"
          >
            Academic Programs
          </h2>
          <div
            ref={contentRef}
            className="text-gray-800 text-sm sm:text-lg leading-relaxed text-justify"
          >
            <p>
              At UIT Tholicode, we offer specialized undergraduate programs that combine theoretical knowledge with practical exposure, ensuring our students are well-equipped to meet the challenges of the modern world.
            </p>

            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-2">B.Sc Computer Science with Artificial Intelligence</h3>
              <p>
                This program provides a strong foundation in computer science while integrating key concepts in Artificial Intelligence. It includes programming, data structures, machine learning, and project-based learning to help students solve real-world problems using AI.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-2">B.Com Finance with Minor in Computer Applications</h3>
              <p>
                This course blends core commerce subjects with essential computer skills. Students gain a strong understanding of finance, accounting, taxation, and management while learning tools like Tally, MS Office, and business software applications.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-2">Academic Environment</h3>
              <p>
                Our campus promotes academic excellence through modern teaching methods, experienced faculty, and well-equipped labs. Seminars, workshops, and peer learning sessions ensure continuous academic engagement.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-2">Internal Assessment & Examinations</h3>
              <p>
                Continuous internal assessments, model exams, and assignments help students stay prepared for university exams. Transparency in evaluation and timely feedback ensures holistic development.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
