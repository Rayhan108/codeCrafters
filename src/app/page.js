import Header from "@/app/components/Header/Header";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import About from "./components/About/About";


const page = () => {
  return (
    <div>
      <Header></Header>
      {/* <Works></Works> */}
      <About></About>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default page;