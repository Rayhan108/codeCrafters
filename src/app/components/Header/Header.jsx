import React from 'react';
import img from '@/assets/austin-distel-wD1LRb9OeEo-unsplash.jpg'
import Image from 'next/image';
const Header = () => {
    return (

    <div className="bg-gradient-to-r via-purple-500 from-cyan-800 to-purple-700 py-16 px-4 mb-10">
        <div>
          <div className="flex flex-col lg:flex-row items-center  justify-evenly" >
            <div
          
             className="lg:w-1/2 overflow-x-hidden">
              <h1 className="text-4xl  font-extrabold text-white  md:text-6xl">
                Welcome to the codeCrafters
              </h1>
              <p className="mt-3   text-xl text-white ">
              Your solution for all things development!
              </p>
            </div>
            <Image
              className="w-full  max-w-lg mt-10 lg:mt-0"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Header;