import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Career = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full p-10 md:p-20">
        <div className="text-gray-700 font-sans">
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-8">Careers at Advik Engineering</h1>
          <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
            Join our mission to build a better future. At Advik Engineering, we are looking for passionate individuals who want to be a part of cutting-edge engineering projects and grow with us.
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Why Work With Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Innovative projects across diverse domains</li>
              <li>Hands-on learning, mentorship, and career development</li>
              <li>Collaborative and inclusive team culture</li>
              <li>Opportunities for growth and leadership</li>
              <li>Work-life balance and flexible schedules</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">1. Civil Engineer</h3>
                <p>📍 Pune | 🕒 2–5 years experience | 🔧 Site execution, AutoCAD, structural analysis</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">2. Mechanical Design Engineer</h3>
                <p>📍 Remote / On-Site | 🕒 1–3 years experience | 🔧 SolidWorks, Creo, product development</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">3. Project Manager</h3>
                <p>📍 Mumbai | 🕒 5+ years experience | 🔧 Project planning, stakeholder management</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">4. Internships (Engineering & Design)</h3>
                <p>📍 Hybrid | 🕒 3–6 months | 🔧 Hands-on learning with experienced mentors</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How to Apply</h2>
            <p className="text-base">
              📧 Send your resume and cover letter to <strong>careers@advikengineering.com</strong><br />
              💬 Include the <strong>Job Title</strong> in your subject line.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Employee Testimonials</h2>
            <blockquote className="italic border-l-4 border-blue-600 pl-4 mb-4">
              “Advik Engineering gave me the opportunity to work on large-scale projects and build a meaningful career with constant learning.”<br />
              {/* <span className="font-semibold">— Priya S., Design Engineer</span> */}
            </blockquote>
            <blockquote className="italic border-l-4 border-blue-600 pl-4">
              “The supportive culture and exciting challenges keep me motivated every day.”<br />
              {/* <span className="font-semibold">— Rahul T., Project Manager</span> */}
            </blockquote>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg font-semibold text-gray-800">Be a part of something great. Your future starts here at Advik Engineering.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Career;
