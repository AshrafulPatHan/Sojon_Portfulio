"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo2.svg";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config"; 
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { user } = useAuth();
    const router = useRouter(); 

    const handleLogout = async () => {
        try {
            await signOut(auth); 
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

    return (
        <nav>
            <div className="flex flex-row items-center justify-between mx-[5vw] mb-16 mt-3">
                <div className="flex flex-row items-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-[35px] md:w-[40px] xl:w-[50px]"
                    />
                    <h4 className="text-xl hidden xl:flex font-medium">
                        Shojon houladar
                    </h4>
                </div>
                <div className="flex flex-row items-center text-xl font-semibold gap-5">
                    <Link href="/">Home</Link>
                    <Link href="/">About Me</Link>
                    <Link href="/">Contact</Link>
                    <div>
                        {user ? (
                            <div className="flex flex-row items-center gap-1 md:gap-2">
                                <div
                                    className="tooltip tooltip-bottom"
                                    data-tip={user.displayName || "User"}
                                >
                                    <Image
                                        src={user.photoURL || "/default-avatar.png"}
                                        alt={user.displayName || "User"}
                                        width={40} // Add width
                                        height={40}
                                        className="w-8 md:w-10 h-8 md:h-10 rounded-full"
                                    />
                                </div>
                                <button
                                    className="btn text-sky-600"
                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
                            </div>
                        ) : (
                            <Link href="/login">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
