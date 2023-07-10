import React from "react";
import img from "../assets/Teba.png";
import { FaFacebook, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div>
      <div
        className="container mx-auto max-w-[1172px] px-4 py-20 mt-4"
        id="about">
        {/* -----Page header----- */}
        <div>
          <h1 className="text-center font-bold text-4xl text-main">
            مؤسسة طيبــــــــة
          </h1>
          <p className="text-center text-3xl font-semibold pt-2 text-heading ">
            من نحن؟
          </p>
        </div>

        {/* -----Page content----- */}
        <div className="flex max-md:flex-col items-center justify-between py-12">
          {/* -----Photo----- */}
          <div>
            <img
              src={img}
              alt="Avatar"
              className="p-3 w-[320px] max-md:mb-8 "
            />
          </div>
          {/* -----About me paragraph----- */}

          <div className="w-[732px] max-md:w-[100%] mr-16 max-md:text-center max-md:mr-0">
            <p className="text-p text-xl">
              مؤسسة طيبة لتجارة وتوزيع خامات المنظفات! نحن شركة رائدة في مجال
              تجارة وتوزيع خامات المنظفات ذات الجودة العالية. مؤسسة طيبة تفخر
              بخبرتها التي تمتد لمدة اكثر من عشرون عامًا في صناعة المنظفات. لقد
              بنينا سمعتنا على أساس تميزنا واستمرارنا في تقديم منتجات عالية
              الجودة وخدمة متميزة لعملائنا. خلال هذه الفترة، اكتسبنا المعرفة
              والخبرة اللازمة لتلبية احتياجات عملائنا بشكل متفوق وتحقيق رضاهم
              التام. يمكنك التواصل معنا اليوم لمعرفة المزيد عن خدماتنا
              ومنتجاتنا.
            </p>
            <div className="flex justify-center w-full p-6 text-3xl text-main">
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
        </div>
      </div>
    </div>
  );
};

export default About;
