import React, { useEffect, useRef } from 'react';
import { Mail, Phone, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const currentPath = location.pathname.toLowerCase();

  const desktopNavRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileMenuContentRef = useRef(null);
  const mobileMenuItemsRef = useRef([]);

  const menuItems = [
    { label: 'HOME', value: '/' },
    { label: 'ABOUT US', value: '/about-us' },
    { label: 'ACADEMICS', value: '/academics' },
    { label: 'FACULTIES', value: '/faculties' },
    { label: 'INFRASTRUCTURE', value: '/infrastructure' },
    { label: 'ADMISSION', value: '/admission' },
    { label: 'CAREERS', value: '/careers' },
    { label: 'CONTACT US', value: '/contact-us' },
  ];

  const handleNavigation = (item) => {
    if (item.label === 'ADMISSION') {
      window.open('https://admissions.keralauniversity.ac.in/', '_blank');
      return;
    }
    navigateTo(item.value);
    toggleMenu();
  };

  useEffect(() => {
    if (desktopNavRef.current) {
      gsap.fromTo(
        desktopNavRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current && mobileMenuContentRef.current) {
      const tl = gsap.timeline({ paused: true });

      tl.to(mobileMenuRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' }, 0);

      tl.to(mobileMenuContentRef.current, { x: 0, duration: 0.4, ease: 'power3.out' }, 0);

      tl.fromTo(
        [
          mobileMenuContentRef.current.querySelector('.contact-info-section'),
          mobileMenuItemsRef.current,
        ],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.3, ease: 'power2.out' },
        0.2
      );

      if (isMenuOpen) {
        gsap.set(mobileMenuRef.current, { display: 'block', opacity: 0 });
        gsap.set(mobileMenuContentRef.current, { x: '100%' });
        tl.play();
      } else {
        tl.reverse();
        tl.eventCallback('onReverseComplete', () => {
          gsap.set(mobileMenuRef.current, { display: 'none' });
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden lg:block px-4 md:px-30 py-2 w-screen h-auto bg-gradient-to-r from-blue-950 to-neutral-900">
        <ul className='flex justify-between text-white text-md font-semibold' ref={desktopNavRef}>
          {menuItems.map((item) => (
            <li
              key={item.value}
              className={`cursor-pointer transition-colors hover:text-blue-200 ${
                currentPath === item.value ? 'text-blue-200' : ''
              }`}
              onClick={() => handleNavigation(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={toggleMenu}
          style={{ display: 'none', opacity: 0 }}
        >
          <div
            ref={mobileMenuContentRef}
            className="absolute top-0 right-0 w-80 max-w-sm h-full bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end items-center p-4 border-b border-gray-200">
              <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-100">
                <X size={24} />
              </button>
            </div>

            <div className="p-4 border-b border-gray-200 bg-gray-50 contact-info-section">
              <h3 className="font-semibold text-gray-800 mb-3">Connect with us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="border-2 border-red-500 rounded-full p-1">
                    <Mail className='text-red-500 size-4'/>
                  </div>
                  <p className='text-sm text-gray-700'>uittholicode@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="border-2 border-red-500 rounded-full p-1">
                    <Phone className='text-red-500 size-4'/>
                  </div>
                  <p className='text-sm text-gray-700'>+99 9999999999</p>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto">
              <ul className="py-2">
                {menuItems.map((item, index) => (
                  <li
                    key={item.value}
                    ref={(el) => (mobileMenuItemsRef.current[index] = el)}
                    className={`px-4 py-3 cursor-pointer transition-colors hover:bg-blue-50 border-b border-gray-100 ${
                      currentPath === item.value ? 'bg-blue-100 text-blue-700 border-l-4 border-l-blue-500' : 'text-gray-700'
                    }`}
                    onClick={() => handleNavigation(item)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
