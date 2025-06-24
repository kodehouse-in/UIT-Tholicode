import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { usePage } from "../contexts/PageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const { page, setPage } = usePage();
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    setPage("/about-us");
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      ).fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <section
        ref={containerRef}
        className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 min-h-screen py-16 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2
            ref={headingRef}
            className="sm:text-5xl text-3xl font-extrabold text-blue-950 mb-10"
          >
            About UIT Tholicode
          </h2>
          <p
            ref={paragraphRef}
            className="sm:text-lg text-sm text-gray-800 text-justify leading-relaxed"
          >
            Located in the peaceful village of Tholicode (Pulimoodu), UIT Tholicode is a hub of excellence under the University of Kerala. Our institution is committed to providing modern education rooted in strong academic values, serving students from rural communities for over 25 years.
            <br /><br />
            Just 13 km from Nedumangad town, our college offers a serene and inspiring atmosphere for academic and personal development. As one of the <span className="font-bold text-blue-900">30 learning centers governed by the University of Kerala</span>, UIT Tholicode plays a key role in delivering technology-focused education to underserved regions.
            <br /><br />
            We offer specialized undergraduate programs including <span className="font-bold text-blue-900">B.Sc Computer Science</span> and <span className="font-bold text-blue-900">B.Com Commerce with Computer Applications</span>, equipping students with skills to thrive in the modern world. Our experienced faculty, strong infrastructure, and student-focused learning environment make UIT Tholicode an ideal choice for aspirants seeking both academic excellence and holistic growth.
          </p>
        </div>
      </section>
    </div>
  );
}
