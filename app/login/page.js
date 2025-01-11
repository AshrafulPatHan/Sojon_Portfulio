"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { auth } from "../firebase/config";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Sign in with email and password
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to the homepage or dashboard
            router.push("/");
        } catch (err) {
            setError("Failed to log in. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };
    // sign in with google
    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError(null);

        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            // Redirect to the homepage or dashboard
            router.push("/");
        } catch (err) {
            setError("Failed to log in with Google.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 items-center justify-center mb-40 md:p-0">
                <div className="flex h-full w-[70vw] overflow-hidden rounded-xl shadow-md">
                    {/* Design side */}
                    <div className="relative hidden items-center justify-center bg-blue-300 md:flex md:w-[50%]">
                        <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
                        <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
                        <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400 transition-all"></div>
                        <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
                        <div className="z-10 space-y-2 text-center">
                            <h2 className="text-3xl font-medium text-white/80">Welcome Back</h2>
                            <p className="animate-pulse text-sm text-white/60">Please Enter Your Information</p>
                        </div>
                    </div>
                    {/* Form side */}
                    <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
                        <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-blue-400">Sign In</h2>
                        <form className="flex w-full flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
                            <input
                                className="w-[80%] rounded-lg border border-blue-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                className="w-[80%] rounded-lg border border-blue-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <p className="text-[14px] text-gray-400">
                                Do not have an account? <Link href="/registration" className="text-blue-400">Create one</Link>
                            </p>
                            <button
                                className="uppercase w-[80%] rounded-lg bg-blue-400 px-6 py-2 font-medium text-white outline-none hover:bg-blue-500 md:w-[60%]"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Submit"}
                            </button>
                        </form>
                        <div className="my-8 flex items-center px-8">
                            <hr className="flex-1 border-blue-400" />
                            <div className="mx-4 text-blue-400">OR</div>
                            <hr className="flex-1 border-blue-400" />
                        </div>
                        {/* Sign in with Google */}
                        <button
                            className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-blue-400"
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                        >
                            <div className="relative z-20 flex h-full items-center bg-blue-400 px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-blue-400">
                                Sign in with
                            </div>
                            <span className="flex h-full items-center px-4 text-xl font-bold text-blue-400 duration-300 group-hover:bg-blue-400 group-hover:text-white">
                                Google
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
