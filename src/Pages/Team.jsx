import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loader from "../Components/Loader.jsx";

const Team = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000); // simulate 2 second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <section className="min-h-screen w-full px-6 md:px-20 py-12 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">Meet Our Team</h1>

              <p className="text-lg md:text-xl mb-12 text-center">
                At <span className="font-semibold text-black">Advik Engineering</span>, our strength lies in the collective expertise, dedication, and innovation of our team.
                We are a group of passionate engineers, designers, project managers, and problem-solvers committed to delivering excellence in every project we undertake.
              </p>

              {/* Leadership Team */}
              <h2 className="text-3xl font-semibold mt-10 mb-6 text-gray-900">Leadership Team</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border rounded-lg shadow">
                  <p className="text-sm text-gray-600 italic">Founder & Managing Director</p>
                  <p className="mt-2 text-gray-700">
                    With over 20 years of experience in civil and mechanical engineering, Rajeev founded Advik Engineering to bring innovative and sustainable
                    solutions to the industry. His vision and leadership continue to guide the company to new heights.
                  </p>
                </div>

                <div className="p-6 border rounded-lg shadow">
                  <p className="text-sm text-gray-600 italic">Chief Operations Officer</p>
                  <p className="mt-2 text-gray-700">
                    Anjali leads our operations with unmatched precision. She ensures all projects are delivered on time, within budget, and exceed client expectations.
                    Her leadership in cross-functional project execution makes her a pillar of our team.
                  </p>
                </div>
              </div>

              {/* Engineering Experts */}
              <h2 className="text-3xl font-semibold mt-16 mb-6 text-gray-900">Our Engineering Experts</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg shadow">
                  <p className="text-sm text-gray-600 italic">Senior Mechanical Engineer</p>
                  <p className="mt-2 text-gray-700">
                    Saurav specializes in precision design, prototyping, and development. He has led several complex manufacturing projects across India.
                  </p>
                </div>

                <div className="p-6 border rounded-lg shadow">
                  <p className="text-sm text-gray-600 italic">Structural Engineer</p>
                  <p className="mt-2 text-gray-700">
                    Ritika is known for her innovative structural designs and a keen eye for sustainability. Her approach has led to award-winning projects.
                  </p>
                </div>

                <div className="p-6 border rounded-lg shadow">
                  <p className="text-sm text-gray-600 italic">Electrical Engineer</p>
                  <p className="mt-2 text-gray-700">
                    Amaan leads our electrical and power systems division. He ensures safe and efficient energy management in every project we undertake.
                  </p>
                </div>
              </div>

              {/* Closing Section */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Why Our Team Stands Out</h2>
                <p className="text-gray-700 mb-4">✓ Cross-disciplinary expertise</p>
                <p className="text-gray-700 mb-4">✓ Commitment to safety and quality</p>
                <p className="text-gray-700 mb-4">✓ Culture of collaboration and growth</p>

                <p className="text-gray-800 text-lg font-medium mt-8">
                  We're always looking for passionate professionals who want to make a difference in the engineering world. <br />
                  <span className="text-blue-600 underline cursor-pointer">Explore careers with us →</span>
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </>
  );
};

export default Team;
