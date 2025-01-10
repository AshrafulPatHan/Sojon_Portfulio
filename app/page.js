import Image from "next/image";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
