import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import NewLoader from "../Components/Loader.jsx";

const Company = () => {
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
        <NewLoader />
      ) : (
        <>
          <Navbar />

          <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20 text-gray-800">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Header */}
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">About Advik Engineering</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Delivering excellence in engineering, precision, and innovation across industries for over a decade.
                </p>
              </div>

              {/* Our Journey */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">Our Journey</h2>
                <p className="text-lg mb-4 leading-relaxed">
                  Founded in 2010, Advik Engineering began as a small team of dedicated engineers with a passion for solving complex industrial problems. Over the years, we’ve grown into a trusted name in the engineering sector, partnering with clients across automotive, construction, manufacturing, and energy industries.
                </p>
                <p className="text-lg leading-relaxed">
                  Our journey has been driven by continuous innovation, strategic collaborations, and a deep understanding of engineering dynamics. Today, with a presence across multiple states and a growing global clientele, we are proud to be contributing to large-scale infrastructure and industrial projects across India and abroad.
                </p>
              </div>

              {/* Leadership */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">Leadership & Team</h2>
                <p className="text-lg mb-4 leading-relaxed">
                  Our leadership team comprises visionary engineers and industry veterans who bring decades of expertise and strategic foresight. Under their guidance, Advik Engineering fosters a culture of innovation, collaboration, and technical excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  Our diverse team includes structural engineers, mechanical designers, electrical specialists, CAD professionals, project managers, and skilled field technicians. Every member of our team is committed to delivering the highest standards of quality and precision.
                </p>
              </div>

              {/* What We Do */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">What We Do</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Custom machinery design and fabrication</li>
                  <li>Structural engineering and civil construction</li>
                  <li>Precision manufacturing and CNC machining</li>
                  <li>Industrial automation and control systems</li>
                  <li>HVAC and MEP (Mechanical, Electrical, Plumbing) services</li>
                  <li>Engineering consulting and project management</li>
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">Achievements & Milestones</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Successfully executed over 500+ engineering projects across India</li>
                  <li>ISO 9001:2015 certified for Quality Management Systems</li>
                  <li>Awarded “Best Industrial Engineering Partner” in 2022</li>
                  <li>Implemented automation systems for major automotive plants</li>
                  <li>Partnered with public sector companies on infrastructure development</li>
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">Industries We Serve</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Automotive and Transport</li>
                  <li>Construction and Infrastructure</li>
                  <li>Energy and Power</li>
                  <li>Aerospace and Defense</li>
                  <li>Food Processing and Packaging</li>
                  <li>Textile and Consumer Goods Manufacturing</li>
                </ul>
              </div>

              {/* Why Us */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">Why Choose Advik Engineering?</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Over a decade of engineering excellence</li>
                  <li>Dedicated R&D and innovation-driven solutions</li>
                  <li>Highly skilled technical workforce</li>
                  <li>Timely delivery with unmatched quality</li>
                  <li>Customer-centric approach with full lifecycle support</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-blue-100 rounded-xl py-10 px-6 text-center shadow-lg">
                <h3 className="text-3xl font-bold text-blue-700 mb-4">Let’s Build the Future Together</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you’re looking for a reliable engineering partner or want to discuss a project idea, we’re just a call away.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </>
  );
};

export default Company;
