import Image from "next/image";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Contact from "./Component/Contact";
import About from "./Component/About";

export default function Home() {
  return (
    <div className="layout min-h-screen flex flex-col">
      <Navbar/>
      <Hero/>
      <About/>
      <div className="flex flex-col items-center">
        <Contact/>
      </div>
      <Footer/>
      
    </div>
  );
}
