import React from 'react';
import Navbar from '../Components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import { Carousel } from 'react-responsive-carousel';

// Images
import Banner from '../assets/bannerone.jpg';
import BannerTwo from '../assets/banner2.jpg';
import BannerThree from '../assets/banner3.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen w-full">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          interval={3000}
          className="h-full"
        >
          <div>
            <img src={Banner} alt="Banner 1" className="object-cover h-screen w-full" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={BannerTwo} alt="Banner 2" className="object-cover h-screen w-full" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={BannerThree} alt="Banner 3" className="object-cover h-screen w-full" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default Home;
