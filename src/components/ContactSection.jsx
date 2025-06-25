import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out.
          </p>

          <div className="space-y-6 text-gray-800">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-700 mt-1" />
              <div>
                <p className="font-semibold text-blue-800">Address</p>
                <p>UIT Tholicode, Pulimoodu, Kerala, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-700 mt-1" />
              <div>
                <p className="font-semibold text-blue-800">Phone</p>
                <p>+91 9999999999</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-blue-700 mt-1" />
              <div>
                <p className="font-semibold text-blue-800">Email</p>
                <p>uittholicode@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase">Get In Touch</h2>
          <form className="space-y-6">
            {['Name', 'Email', 'Phone number', 'Message'].map((placeholder, i) =>
              placeholder === 'Message' ? (
                <textarea
                  key={i}
                  placeholder={placeholder}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-600 transition text-gray-800 placeholder-gray-500 py-2"
                ></textarea>
              ) : (
                <input
                  key={i}
                  type={placeholder === 'Email' ? 'email' : placeholder === 'Phone number' ? 'tel' : 'text'}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-600 transition text-gray-800 placeholder-gray-500 py-2"
                />
              )
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

