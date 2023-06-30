import Header from "@/app/components/Header/Header";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";


const page = () => {
  return (
    <div>
      <Header></Header>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default page;