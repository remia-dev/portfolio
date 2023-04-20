import React from "react";
import { motion } from "framer-motion";
import { black } from "../util/animations";
import pizza from "../assets/pizza.png";
import ecom from "../assets/ecom.png";

const Skill = () => {
  return (
    <div className="py-20 mt-[300px]">
      <div className="flex justify-center">
        <h2 className="text-[70px] font-serif">Projects</h2>
      </div>
      <div className="flex justify-center gap-10 mt-20 flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-[105%] transition ease-in duration-200 cursor-pointer">
          <img className="w-full" src={pizza} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Pizza Palooza</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-[105%] transition ease-in duration-200 cursor-pointer">
          <img className="w-full" src={ecom} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Ecommerce</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-[105%] transition ease-in duration-200 cursor-pointer">
          <img className="w-full" src={pizza} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
      {/* Noteworthy projects*/}
      <div className="text-[30px] flex justify-center my-8 font-extralight">Other Projects</div>
      <div className="flex justify-center mt-10 gap-10 flex-wrap">
        <a
          href="#"
          className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-white hover:scale-[105%] ease-in transition duration-200"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            Project 1
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-white hover:scale-[105%] ease-in transition duration-200"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            Project 2
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise
          </p>
        </a>
      </div>
    </div>
  );
};

export default Skill;
