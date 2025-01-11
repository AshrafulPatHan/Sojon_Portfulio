"use client"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';


const About = () => {
    return (
        <div className='flex flex-col items-center mb-16'>
            <div className='flex flex-col-reverse md:flex-row items-center border-2 border-blue-300 p-6 
            rounded-2xl gap-5 md:gap-44 mx-3'>
                <div>
                    <h2 className='text-4xl font-semibold text-blue-400'>About me</h2>
                    <div className='flex gap-5 text-lg font-medium sm:text-2xl mt-3'>
                        <p>Name :</p>
                        <p>Shojon Houlader</p>
                    </div>
                    <div className='flex gap-5 text-lg font-medium sm:text-2xl'>
                        <p>Aeg :</p>
                        <p>16 year old</p>
                    </div>
                    <div className='flex text-lg sm:text-2xl'>
                        <p>Read in government tolaram college</p>
                    </div>
                </div>
                <div>
                    <Image src="https://i.ibb.co.com/k4DRWv5/307980038-465892945577099-276903225081285812-n.jpg" 
                    width={200} height={200} className='rounded-full ' alt="Tolaram Collage" />
                </div>
            </div>
        </div>
    );
};

export default About;