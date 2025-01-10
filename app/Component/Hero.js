"use client"
import Image from 'next/image';
import React from 'react';
import { FaDownload } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DownloadI from '@/public/watsap.jpg'

const Hero = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col-reverse items-center lg:flex-row lg:items-start'>
                <div className='flex flex-col items-start gap-3'>
                    <h2 className='text-2xl sm:text-4xl font-bold'>Hello, I‘m Shojon Houladar</h2>
                    <p className='text-lg sm:text-xl font-medium'>I‘am the student of Govt. Tolaram College </p>
                    <a href='watsap.jpg' download='watsap.jpg'
                    className="text-xl box-border border-4 border-blue-400 w-60 h-14 
                        bg-sky-600 text-white relative group text-center">
                            <span className="pr-8  ">Download Resume</span>
                            <span className="bg-sky-900 absolute right-0 top-0  h-full flex 
                            items-center justify-center px-1 group-hover:duration-300 
                            group-hover:w-full w-10 duration-300">
                                <FaDownload />
                            </span>
                    </a>
                </div>
                <div >
                    <Image src="https://i.ibb.co.com/pjVtnBj/Vindicator-JE3.webp" 
                    alt="My Photo"   width={200} height={200}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;