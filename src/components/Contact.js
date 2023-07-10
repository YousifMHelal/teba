import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiPhoneCall, BiLogoGmail } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-20 bg-gradient-to-b to-white from-gray">
      <div className="container mx-auto max-w-[1172px] px-4 py-8" id="contact">
        {/* -----Heading----- */}
        <h1 className="text-center font-bold text-4xl text-heading">
          تواصل معنـــــا
        </h1>
        {/* -----contant----- */}
        <div className="container mx-auto h-[100%] max-w-[1172px] px-4 flex justify-between mt-32 max-md:mt-10 items-center max-md:pt-5 max-md:flex-col-reverse max-md:items-center">
          <div className="flex flex-col">
            <div className="flex items-center text-2xl text-heading py-3 max-sm:flex-wrap">
              <BiPhoneCall className="text-3xl" />
              <p className="font-bold px-4">0201110292946+</p>
              <span className="font-bold max-sm:hidden">-</span>
              <p className="font-bold px-4 max-sm:mr-7">0201110092920+</p>
            </div>
            <div className="flex items-center text-2xl text-heading py-3">
              <BiLogoGmail className="text-3xl" />
              <p className="font-bold px-4">tiba.offical@gmail.com</p>
            </div>
            <div className="flex items-center text-2xl text-heading py-3">
              <MdLocationPin className="text-3xl" />
              <p className="font-bold px-4">
                قليوب البلد جامع محمد سليمان - القليوبية
              </p>
            </div>
            <div className="flex text-3xl pb-6 text-main mt-16 ">
              <a href="https://www.facebook.com/Tiba.official">
                <FaFacebook className="mx-3 cursor-pointer hover:scale-125 duration-300" />
              </a>
              <a href="https://www.facebook.com/messages/t/294034367388558">
                <FaFacebookMessenger className="mx-3 cursor-pointer hover:scale-125 duration-300" />
              </a>
              <a href="mailto:tiba.offical@gmail.com">
                <SiGmail className="mx-3 cursor-pointer hover:scale-125 duration-300" />
              </a>
              <a href="https://wa.me/+201110292946">
                <FaWhatsapp className="mx-3 cursor-pointer hover:scale-125 duration-300" />
              </a>
            </div>
          </div>
          <img className="w-[40%]" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
