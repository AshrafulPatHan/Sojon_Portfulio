"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logo2.svg'
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user } = useAuth();


    return (
        <nav >
            <div className='flex flex-row items-center justify-between mx-[5vw] mb-16 mt-3 '>
                <div className='flex flex-row items-center'>
                <Image src={Logo} alt="Logo"
                className='w-[35px] md:w-[40px] xl:w-[50px]  '></Image>
                <h4 className='text-xl hidden xl:flex font-medium'>Shojon houladar</h4>
                </div>
                <div className='flex flex-row items-center text-xl font-semibold gap-5'>
                    <Link href='/' >Home</Link>
                    <Link href='/' >About Me</Link>
                    <Link href='/' >Contact</Link>
                    <p> {user ? (`${user.displayName || "User"}`) : (<Link href='/login' >Login</Link>)} </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;