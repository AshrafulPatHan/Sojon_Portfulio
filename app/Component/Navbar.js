"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logo2.svg'

const Navbar = () => {
    return (
        <nav >
            <div className='flex flex-row items-center justify-between mx-[5vw] mt-3 '>
                <div className='flex flex-row items-center'>
                <Image src={Logo} alt="Logo"
                className='w-[35px] md:w-[40px] xl:w-[50px]  '></Image>
                <h4 className='text-xl hidden xl:flex font-medium'>Shojon houladar</h4>
                </div>
                <div className='flex flex-row items-center text-xl font-semibold gap-5'>
                    <Link href='/' >Home</Link>
                    <Link href='/' >About Me</Link>
                    <Link href='/' >Contact</Link>
                    <Link href='/' >Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;