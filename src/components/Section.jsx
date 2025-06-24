import { MoveRight } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const navigateTo = useNavigate();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50, rotationX: 45 },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1,
          ease: "power3.out"
        }
      )
      .fromTo(paragraphRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.5"
      )
      .fromTo(buttonRef.current,
        { opacity: 0, scale: 0.5, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, "-=0.3");

      const highlights = paragraphRef.current?.querySelectorAll('span') || [];
      gsap.fromTo(highlights,
        { backgroundColor: "transparent", scale: 1 },
        {
          backgroundColor: "#dbeafe",
          scale: 1.02,
          duration: 0.4,
          stagger: 0.15,
          delay: 1.5,
          yoyo: true,
          repeat: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
          }
        }
      );

    }, containerRef);

    const button = buttonRef.current;
    if (button) {
      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          backgroundColor: "#1e3a8a",
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(button.querySelector('svg'), {
          x: 8,
          rotate: 10,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          backgroundColor: "#1e40af",
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(button.querySelector('svg'), {
          x: 0,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        ctx.revert();
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex flex-col justify-center items-center max-w-3xl sm:px-15 px-8 py-10">
        <p ref={titleRef} className='sm:text-[30px] text-xl sm:font-bold font-extrabold font-serif text-[#6E260E]'>
          A FEW WORDS ABOUT US....
        </p>
        <p ref={paragraphRef} className='mt-5 sm:text-lg text-sm sm:text-justify'>
          Located in the serene village of Tholicode(Pulimoodu) in Tholicode Panchayath, Our college is a center of excelence dedicated to providing quality education in a peacefull and nature rich environment. Just 13 kilometeres from Nedumangad town, our campus offers students a calm and inspiring atmosphere for academic and personal growth.
          Our college is one of the  
           <span className='font-extrabold text-blue-950'> 30 learning centers governed by the University of Kerala(UOK)</span>
          ,Which established these institutions 25 years ago to 
          <span className='font-extrabold text-blue-950'> promote technology-focused education in rural areas.</span> 
          These centers offers specialized undergraduate programs such as 
          <span className='font-extrabold text-blue-950'> B.Sc Computer Science and BCom. Commerce with Computer Applications</span>
          ,ensuring that students from remote locations have access to modern education and career opputunities. 
        </p>
        <button 
          ref={buttonRef}
          onClick={() => navigateTo('/about-us')} 
          className='hover:bg-blue-900 cursor-pointer sm:text-lg text-sm  flex gap-2 mt-5 border px-25 py-3 rounded-3xl bg-blue-950 text-white items-center'
        >
          LEARN MORE<MoveRight size={16} />
        </button>
      </div> 
    </div>
  )
}

export default Section
