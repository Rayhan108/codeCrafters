
import img from '@/assets/annie-spratt-QckxruozjRg-unsplash.jpg'
import Image from 'next/image';
const About = () => {

    return (
        <>
    <p className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
       About Us
      </p>
      <h1 className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></h1>

   
   <div id="about"
      className={`xl:mt-12 flex md:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
     
        <div className="text-center md:mt-16 mt-1  md:w-1/3">
        <Image
              className="w-full  max-w-lg mt-10 lg:mt-0"
              src={img}
              alt=""
            />
      </div>
  
      <div
        
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-1/2 my-5'
      >
       <div className="p-3 leading-6 ">
        <p className="text-black  font-serif ">  
        In the rapidly evolving digital landscape, businesses and individuals alike seek reliable partners to bring their ideas to life. Enter codeCrafters, a dynamic and innovative development startup that aims to revolutionize the world of software and digital solutions. With a dedicated team of skilled professionals and a passion for pushing boundaries, codeCrafters is poised to be your go-to partner for all things development.</p>
<p className="mt-3 text-black  font-serif">
At codeCrafters, we understand the importance of creating impactful and cutting-edge digital experiences. We believe that every business, regardless of its size or industry, deserves access to top-notch development solutions that drive growth and deliver exceptional results. Our mission is to empower our clients by transforming their ideas into reality through our expertise in web and mobile application development, software engineering, and digital transformation.</p>



        <a href="#contact">
        <button className="btn hover:-hue-rotate-90  text-black btn-primary bg-gradient-to-r via-purple-300 from-cyan-500 to to-purple-800">Contact Us </button>
        </a>
       </div>

      
      </div>
    </div>
   
   
   </>
    );
};

export default About;