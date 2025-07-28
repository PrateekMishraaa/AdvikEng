import React, { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from '../Components/Footer.jsx';
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    Message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    if(!formData.FirstName || !formData.LastName || !formData.Email || !formData.PhoneNumber || !formData.Password || !formData.Message){
        toast.error("All fields are required")
    }
    try{
        const response = await axios.post("http://localhost:3000/api/enquiry",formData,{
          headers:{
            "Content-Type":"application/json"
          }
        })
        console.log(response.data)
        toast.success("Form Submitted successfully",response.data)
    }catch(error){
      console.log(error)
      toast.error("something went wrong")
    }
   
  };
// http://localhost:3000/api/enquiry
  const handleVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full px-4 py-20 bg-[#212932] flex justify-center items-center">
        <div className="w-full max-w-4xl bg-[#2a3441] rounded-3xl border-2 border-white p-10 shadow-lg">
          <h1 className="text-white text-4xl font-bold text-center uppercase">Contact Us</h1>
          <p className="text-white text-center font-medium mt-2 mb-8">Get in touch with us</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              placeholder="First Name"
              className="h-12 px-4 border-2 border-white rounded-2xl text-white bg-transparent placeholder-white font-medium"
            />
            <input
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="h-12 px-4 border-2 border-white rounded-2xl text-white bg-transparent placeholder-white font-medium"
            />
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email"
              className="h-12 px-4 border-2 border-white rounded-2xl text-white bg-transparent placeholder-white font-medium"
            />
            <input
              type="text"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="h-12 px-4 border-2 border-white rounded-2xl text-white bg-transparent placeholder-white font-medium"
            />
            <div className="relative flex items-center">
              <input
                type={isVisiblePassword ? "text" : "password"}
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full h-12 px-4 border-2 border-white rounded-2xl text-white bg-transparent placeholder-white font-medium pr-10"
              />
              <span
                className="absolute right-4 text-white cursor-pointer"
                onClick={handleVisiblePassword}
              >
                {isVisiblePassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="md:col-span-2 px-4 py-3 border-2 border-white rounded-2xl text-white bg-transparent placeholder-white font-medium resize-none"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-white text-[#212932] font-bold py-3 rounded-2xl hover:bg-gray-300 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer/>
      <ToastContainer/>
    </>
  );
};

export default Contact;
