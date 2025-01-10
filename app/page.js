import Image from "next/image";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="layout min-h-screen flex flex-col">
      <Navbar/>
      <Hero/>
      <Footer/>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  );
}
