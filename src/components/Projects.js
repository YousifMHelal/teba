import React, { useState, useEffect } from "react";
import chImg from "../assets/Chimg.png";
import mImg from  "../assets/Mimg.png"
import sImg from  "../assets/Simg.png"
import shImg from  "../assets/Shimg.png"
import { Data } from "../Data";

const Projects = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const newData = Data.filter((item) => {
      return item.cat === "tebach";
    });
    setItem(newData);
  }, []);

  const updateCat = (cat) => {
    const newData = Data.filter((item) => {
      return cat === item.cat;
    });
    setItem(newData);
  };

  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-white to-gray2">
      <div className="container mx-auto max-w-[1172px] px-4 py-8" id="project">
        {/* -----Heading----- */}
        <h1 className="text-center font-bold text-4xl text-heading">
          منتجاتنــــــا
        </h1>
        {/* -----Buttons----- */}
        <div className="flex justify-center flex-wrap mt-12">
          <div
            onClick={() => updateCat("tebach")}
            className="flex my-4 items-center  flex-col mx-4 cursor-pointer bg-gray2 p-4 rounded-lg">
            <img className="w-[50px]" src={chImg} alt="" />
            <h3 className="text-2xl font-bold text-heading">سوائل</h3>
          </div>
          <div
            onClick={() => updateCat("tebak")}
            className="flex my-4 items-center  flex-col mx-4 cursor-pointer bg-gray2 p-4 rounded-lg">
            <img className="w-[30px]" src={mImg} alt="" />
            <h3 className="text-2xl font-bold text-heading">خامات</h3>
          </div>
          <div
            onClick={() => updateCat("tebam")}
            className="flex my-4 items-center  flex-col mx-4 cursor-pointer bg-gray2 p-4 rounded-lg">
            <img className="w-[50px]" src={chImg} alt="" />
            <h3 className="text-2xl font-bold text-heading">منظفات</h3>
          </div>
          <div
            onClick={() => updateCat("tebash")}
            className="flex my-4 items-center  flex-col mx-4 cursor-pointer bg-gray2 p-4 rounded-lg">
            <img className="w-[30px] " src={shImg} alt="" />
            <h3 className="text-2xl font-bold text-heading">شكاير</h3>
          </div>
          <div
            onClick={() => updateCat("tebas")}
            className="flex my-4 items-center  flex-col mx-4 cursor-pointer bg-gray2 p-4 rounded-lg">
            <img className="w-[40px]" src={sImg} alt="" />
            <h3 className="text-2xl font-bold text-heading">عطور زيتية</h3>
          </div>
        </div>

        <ul className="mt-12 flex justify-center items-center flex-wrap ">
          {item.map((item) => {
            return (
              <li
                key={item.id}
                className="font-semibold duration-200 text-xl bg-gray w-[27%] rounded-md py-2 text-center mx-8 m-2 max-md:w-full">
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
