import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-900">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-semibold text-white">
                        Ebook Platform
                    </h2>
                    <p className="mt-3 text-sm text-zinc-500">
                        Discover, read, and share ebooks anytime.
                    </p>
                </div>

                {/* Quick Links + Social (LEFT MIDDLE COLUMN UPDATED) */}
                <div>
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-sm mb-6">
                        <li><Link href="/about" className="hover:text-white">About</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* 👇 SOCIAL ADDED HERE (RIGHT SIDE OF QUICK LINKS SECTION) */}
                <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-300 mb-5 font-semibold">
                        Social
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-white transition">
                            <FaFacebookF size={25} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaTwitter size={25} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaInstagram size={25} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaInstagram size={25} />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase mb-3">
                        Newsletter
                    </h3>

                    <p className="text-sm text-zinc-500 mb-4">
                        Get updates about new ebooks.
                    </p>

                    <form className="flex w-full">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-3 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-l-md focus:outline-none focus:border-zinc-600"
                        />
                        <button
                            type="button"
                            className="px-4 py-2 text-sm bg-white text-black rounded-r-md hover:bg-zinc-200 transition"
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-zinc-800 py-5 text-center text-xs text-zinc-500">
                © {new Date().getFullYear()} Ebook Sharing Platform. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;