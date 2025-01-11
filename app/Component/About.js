"use client"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const About = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <button onClick={()=>{toast("you are click");}}
                className='btn p-4 mb-3'>
                    Click
                </button>
            </div>
        </div>
    );
};

export default About;