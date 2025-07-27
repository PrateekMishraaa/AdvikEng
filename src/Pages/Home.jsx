import React, { useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Engineering from "../assets/engineering.jpg";
import GoogleMapReact from 'google-map-react';
import DirectorImg from "../assets/image.jpg";
import VideoPhoto from "../assets/video.jpg";
import Metal1 from "../assets/metalone.jpg";
import Metal2 from "../assets/metaltwo.jpg";
import Metal3 from "../assets/metalthree.jpg";
import Metal4 from "../assets/metalfour.jpg";
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import SliderCards from "../Components/SliderCards.jsx";
import axios from "axios";

gsap.registerPlugin(useGSAP);

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Home = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Message: ""
  });

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const container = useRef();

  const details = [
    {
      title: "Managing Director's Message",
      description: `Your Name is heading the organization as Chairman and Managing Director.
He has 33 years of experience in the field of Engineering, manufacturing, Product Development,
setting up Greenfield Ventures, machining and sheet metal activities. He is a Mechanical Engineering
graduate from Government College of Engineering, has done his MBA from Newport University and has an
Advanced Diploma in Computer Science in System analysis from Symbiosis, Pune...`,
      img: DirectorImg
    }
  ];

  const EngDetails = [
    {
      title: "Advik Engineering",
      name: "Vikash Mishra",
      position: "Managing Director Kaizen Engineering",
      description: "an inspirational story of a first generation entrepreneur",
      img: VideoPhoto
    }
  ];

  const metalDetails = [
    { img: Metal1, title: "Sheet Metal", NavLink: "/sheet-metal" },
    { img: Metal2, title: "Fabricated Assemblies", NavLink: "/fabric-assemblies" },
    { img: Metal3, title: "Solar Water Heater", NavLink: "/solar-water" },
    { img: Metal4, title: "Kitchen Basket", NavLink: "/kitchen-basket" }
  ];

  useGSAP(() => {
    gsap.to('.box', { x: 40, duration: 2.5, ease: 'power2.out' });
  }, { scope: container });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.FullName || !formData.Email || !formData.Message) {
      return toast.error("All fields are required");
    }
    try {
      const res = await axios.post("http://localhost:3000/api/contact-us", formData, {
        headers: { "Content-Type": "application/json" }
      });
      toast.success("Form submitted successfully");
      setFormData({ FullName: "", Email: "", Message: "" });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full">
        <img
          src={Engineering}
          alt="Engineering Banner"
          className="w-full h-[60vh] sm:h-[80vh] md:h-[100vh] object-cover object-center"
        />
      </section>

      {/* About Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-20 bg-blue-100" ref={container}>
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-blue-600">Advik Engineering</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Kaizen Engineering India Pvt Ltd was established in 1997 and operates in three verticals:
            sheet metal products/press parts and assemblies, solar water heaters, and kitchen baskets.
          </p>
        </div>

        {/* Director Section */}
        {details.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-between mt-16 gap-10 max-w-6xl mx-auto">
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.description}</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={item.img} alt="Director" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        ))}

        {/* Engineering Details */}
        <div className="w-full mt-20">
          {EngDetails.map((item, index) => (
            <div key={index} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
              <p className="text-4xl font-semibold text-center text-blue-500">{item.title}</p>
              <div className="space-y-4 text-center">
                <p className="text-xl text-red-600 font-semibold">{item.name}</p>
                <p className="text-lg font-bold">{item.position}</p>
                <p className="italic">"{item.description}"</p>
                <img src={item.img} alt="Engineering Detail" className="mx-auto w-full max-w-3xl h-auto rounded-md shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {metalDetails.map((item, index) => (
            <NavLink
              key={index}
              to={item.NavLink}
              className="bg-white border border-gray-200 shadow hover:shadow-lg transition rounded-xl overflow-hidden"
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-4 text-center text-lg font-medium text-gray-800">{item.title}</div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Slider Cards */}
      <SliderCards />

      {/* Map Section */}
      <div className="w-full px-4 sm:px-10 py-16">
        <div className="h-[400px] sm:h-[500px] w-full rounded-md overflow-hidden shadow-md">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={10.99835602} lng={77.01502627} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>

      {/* Contact Form */}
      <section className="w-full py-20 px-6 bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center">
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-6xl">
          {/* Left Form */}
          <div className="bg-black w-full md:w-1/2 p-8 md:p-12 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-2 uppercase text-gray-300">Contact Us</h2>
            <h3 className="text-2xl font-semibold mb-8 uppercase">Advik Engineering</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="FullName"
                value={formData.FullName}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                name="Email"
                type="email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-md w-full transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center text-black text-3xl sm:text-4xl font-bold p-6 text-center">
            We’d love to hear from you!
          </div>
        </div>
      </section>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;
