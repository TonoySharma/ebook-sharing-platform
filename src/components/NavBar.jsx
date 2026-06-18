"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import NavLink from "./NavLink";
// import { useSession , signOut} from "@/lib/auth-client";
// import { signOut } from "better-auth/api";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { data: session } = useSession();
//   const user = session?.user;

 
  const handleLogout = async () => {
    await signOut();
    // console.log("Logging out...");
  };

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-[75px] items-center justify-between px-6">
          
          {/* Left Side Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg text-gray-900 no-underline transition-opacity hover:opacity-90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 shadow-sm shadow-sky-200">
              <svg width="18" height="18" fill="none" viewBox="0 0 16 16">
                <path
                  d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <span className="tracking-tight">Ebook Hub</span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-8">
            {/* Desktop Nav Links */}
            <ul className="hidden border border-gray-200 px-6 py-3 rounded-full items-center gap-8 font-medium bg-gray-50/50 md:flex list-none">
              <li>
                <NavLink
                  href="/home"
                  className="block rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-white hover:text-sky-600 hover:shadow-sm no-underline"
                >
                 Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/e-books"
                  className="block rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-white hover:text-sky-600 hover:shadow-sm no-underline"
                >
                  Ebooks
                </NavLink>
              </li>
            </ul>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 md:flex">
             (
                <>
                  <span className="text-gray-700 text-sm font-medium">
                    {/* Hi, <span className="text-sky-600 font-semibold">{user.name} !</span> */}
                  </span>
                  <Button
                    onClick={handleLogout}
                    className="cursor-pointer rounded border  bg-gray-100 px-4 py-2 text-sm 
                    font-medium text-gray-700 transition-all hover:bg-sky-200 duration-300"
                  >
                    Log Out →
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="no-underline">
                    <Button className="cursor-pointer rounded border bg-transparent px-4 py-2
                     text-sm font-medium text-gray-600 transition-all hover:bg-sky-200">
                      Log In
                    </Button>
                  </Link>

                  <Link href="/register" className="no-underline">
                    <Button className="cursor-pointer rounded bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-sky-100 transition-all hover:bg-sky-600 hover:shadow-md">
                      Get Started →
                    </Button>
                  </Link>
                </>
              )
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="cursor-pointer rounded-xl bg-gray-50 p-2.5 text-gray-600 hover:bg-gray-100 md:hidden transition-colors border border-gray-100"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Premium Mobile Left Slider (Sidebar) --- */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        
        {/* Backdrop Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
          onClick={() => setIsMenuOpen(false)} 
        />

        {/* Sidebar Panel */}
        <div className={`absolute inset-y-0 left-0 w-4/5 max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          
          <div>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div className="flex items-center gap-2 font-bold text-lg text-gray-900">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500">
                  <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                    <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="white" stroke="white" strokeWidth="0.5" />
                  </svg>
                </div>
                <span>JobBoard</span>
              </div>
              
              {/* Close Button */}
              <button
                className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1.5 pt-6">
              <Link href="/browse-jobs" onClick={() => setIsMenuOpen(false)} className="no-underline">
                <Button className="w-full cursor-pointer rounded-xl bg-transparent px-4 py-3 text-left justify-start text-sm font-medium text-gray-600 transition-all hover:bg-sky-50 hover:text-sky-600">
                  📁 Browse Jobs
                </Button>
              </Link>

              <Link href="/company" onClick={() => setIsMenuOpen(false)} className="no-underline">
                <Button className="w-full cursor-pointer rounded-xl bg-transparent px-4 py-3 text-left justify-start text-sm font-medium text-gray-600 transition-all hover:bg-sky-50 hover:text-sky-600">
                  🏢 Company
                </Button>
              </Link>

              <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="no-underline">
                <Button className="w-full cursor-pointer rounded-xl bg-transparent px-4 py-3 text-left justify-start text-sm font-medium text-gray-600 transition-all hover:bg-sky-50 hover:text-sky-600">
                  💵 Pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar Footer (Auth Actions) */}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
        (
              <>
                <div className="px-2 text-sm text-gray-600 font-medium">
                  {/* Signed in as: <span className="block text-gray-900 font-semibold text-base mt-0.5">{user.name}</span> */}
                </div>
                <Button
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                  className="w-full cursor-pointer rounded-xl bg-red-50 text-red-600 hover:bg-red-100 py-3 text-sm font-semibold transition-all"
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="w-full no-underline">
                  <Button className="w-full cursor-pointer rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700 transition-all hover:bg-gray-100">
                    Log In
                  </Button>
                </Link>

                <Link href="/register" onClick={() => setIsMenuOpen(false)} className="w-full no-underline">
                  <Button className="w-full cursor-pointer rounded-xl bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-sky-100 transition-all hover:bg-sky-600">
                    Get Started →
                  </Button>
                </Link>
              </>
            )
          </div>

        </div>
      </div>
    </>
  );
};

export default NavBar;