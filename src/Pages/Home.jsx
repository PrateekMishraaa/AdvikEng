import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
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

gsap.registerPlugin(useGSAP);

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Home = () => {
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
Advanced Diploma in Computer Science in System analysis from Symbiosis, Pune. He started Kaizen
Engineering's first unit in Pirangut in 1997. Bajaj Auto's Scooter rider seat assemblies was its first
product and Kaizen soon became their single source and DOL (Directly-On-Line) vendor. He established
his second unit of making press parts and fabrication in Chakan in 2001. Another plant was started in 2013.
In 2015, the Company entered the area of making Solar water heaters with Racold. He is active in an
entrepreneur club called TLC where he teaches management subjects like Business Strategy, Leadership,
Human Resources, World Class Processes, Lean etc. Teaching is his passion and hobby.`,
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
    {
      img: Metal1,
      title: "Sheet Metal",
      NavLink: "/sheet-metal",
    },
    {
      img: Metal2,
      title: "Fabricated Assemblies",
      NavLink: "/fabric-assemblies"
    },
    {
      img: Metal3,
      title: "Solar Water Heater",
      NavLink: "/solar-water"
    },
    {
      img: Metal4,
      title: "Kitchen Basket",
      NavLink: "/kitchen-basket"
    }
  ];

  useGSAP(() => {
    gsap.to('.box', { x: 40, duration: 2.5, ease: 'power2.out' });
  }, { scope: container });

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full">
        <img src={Engineering} alt="Engineering Banner" className="w-full h-auto object-cover" />
      </section>

      {/* About Section */}
      <section className="w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-20 bg-blue-200" ref={container}>
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-semibold font-serif text-gray-700">
            About <span className="text-gray-700">Advik Engineering</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-sans text-gray-700 leading-relaxed">
            Kaizen Engineering India Pvt Ltd was established in 1997 and operates in three verticals:
            sheet metal products/press parts and assemblies, solar water heaters, and kitchen baskets
            and wireform products. The company employs over 200 workmen and 35 staff, has three factories
            in Chakan, Pune, and a showroom in Karve Nagar, Pune. With a turnover of ₹50 Cr, it serves
            top clients including Brembo Brakes, Nelson Global, Ariston Thermo (Racold), LOHR (France),
            Godrej, ADR Axles, and Tata DLT. The vision is to reach ₹150 Cr by 2025 while ensuring customer
            and employee satisfaction.
          </p>
        </div>

        {/* Director Section */}
        {details.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between mt-16 gap-10 max-w-6xl mx-auto"
          >
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold font-serif text-gray-700">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                // src={item.img}
                alt="Director"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        ))}

        {/* Engineering Details */}
        <div className="w-full mt-20">
          {EngDetails.map((item, index) => (
            <div key={index} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-blue-500 font-semibold text-center">
                {item.title}
              </p>
              <div className="space-y-4 text-center">
                <p className="text-lg sm:text-xl text-red-600 font-semibold hover:text-red-400 transition">
                  {item.name}
                </p>
                <p className="text-base md:text-lg font-bold">{item.position}</p>
                <p className="italic">"{item.description}"</p>
                <img
                //   src={item.img}
                  alt="Engineering Detail"
                  className="mx-auto w-full max-w-3xl h-auto rounded-md shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Metal Products */}
        <div className="w-full px-4 sm:px-6 lg:px-24 py-16 bg-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {metalDetails.map((item, index) => (
              <NavLink
                to={item.NavLink}
                key={index}
                className="bg-white border rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4 text-center font-semibold text-gray-700 text-lg">
                  {item.title}
                </div>
              </NavLink>
            ))}
          </div>
        </div>

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
      </section>

      <Footer />
    </>
  );
};

export default Home;
