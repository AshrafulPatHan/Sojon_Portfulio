"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center">
        <hr className="w-[80vw]" />
        <div className="flex flex-row items-center">
            <div>Shojon Houlader || Live in Bangladesh</div>
            <div className="flex flex-row items-center">
            <a href="https://www.facebook.com" 
            target="_blank" rel="noopener noreferrer">
                <Image
                src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                alt="LinkedIn link"
                width={24}
                height={24}
                />
            </a>
            <a href="https://www.facebook.com" 
            target="_blank" rel="noopener noreferrer">
                <Image
                src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
                alt="Github link"
                width={24}
                height={24}
                />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090953234693" 
            target="_blank" 
            rel="noopener noreferrer">
                <Image
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt="Facebook link"
                width={24}
                height={24}
                />
            </a>
            </div>
            <div>
            <p>Copyright &copy; 2025 Shojon. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
    };

export default Footer;
