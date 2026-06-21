"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import NavLink from "./NavLink";
import { useSession, signOut } from "@/lib/auth-client";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  // console.log(user);

  const handleLogout = async () => {
    await signOut();
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
            <div>
              <Image
                src="/logos.png"
                alt="Ebook Hub Logo"
                width={40}
                height={40}
                className="w-auto h-auto rounded-full"
              />
            </div>
            <span className="tracking-tight text-2xl font-semibold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Ebook Hub
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            {/* Desktop Nav Links */}
            <ul className="hidden border border-gray-200 px-6 py-2 rounded-full items-center gap-8 font-medium bg-gray-50/50 md:flex list-none">
              <li>
                <NavLink
                  href="/"
                  className="block rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-white hover:text-sky-600 hover:shadow-sm no-underline"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                href="/browse-ebook"
                className="block rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-white hover:text-sky-600 hover:shadow-sm no-underline"
              >
                Browse Ebooks
              </NavLink>
              </li>
              <li>
            { session && session?.user && ( <NavLink
                href={`/dashboard/${user?.role}`}
                className="block rounded-full px-4 py-2 text-sm text-gray-600 transition-all hover:bg-white hover:text-sky-600 hover:shadow-sm no-underline">
              DashBoard
              </NavLink>
            )}
              </li>
            </ul>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 md:flex">
              {user ? (
                /* --- Modern Dropdown on Hover --- */
                <div className="relative group py-2">
                  <button className="flex items-center gap-2 focus:outline-none cursor-pointer">
                    {user.image ? (
                      <Image
                        width={25}
                        height={25}
                        src={user.image}
                        alt={user.name}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-sky-100 transition-all group-hover:ring-sky-400"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-semibold text-white ring-2 ring-sky-100 transition-all group-hover:ring-sky-400">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <svg
                      className="h-4 w-4 text-gray-500 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-1 w-52 origin-top-right rounded-2xl border border-gray-100 bg-white p-2 shadow-xl opacity-0 scale-95 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-50">
                    <div className="px-3 py-2.5 border-b border-gray-50">
                      <p className="text-xs font-medium text-gray-400">Signed in as</p>
                      <p className="truncate text-sm font-semibold text-gray-800">{user.name}</p>
                      {user.email && <p className="truncate text-xs text-gray-500">{user.email}</p>}
                    </div>

                    <div className="mt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50/50 transition-colors cursor-pointer text-left"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/logIn" className="no-underline">
                    <Button className="cursor-pointer rounded border bg-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-sky-200">
                      Log In
                    </Button>
                  </Link>

                  <Link href="/signUp" className="no-underline">
                    <Button className="cursor-pointer rounded bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-sky-100 transition-all hover:bg-sky-600 hover:shadow-md">
                      Get Started →
                    </Button>
                  </Link>
                </>
              )}
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
                <span>Ebook Hub</span>
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
              <Link href="/browse-ebook" onClick={() => setIsMenuOpen(false)} className="no-underline">
                <Button className="w-full cursor-pointer rounded-xl bg-transparent px-4 py-3 text-left justify-start text-sm font-medium text-gray-600 transition-all hover:bg-sky-50 hover:text-sky-600">
                  Browse Ebooks
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar Footer (Auth Actions) */}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                  {user.image ? (
                    <Image
                      width={20}
                      height={20}
                      src={user.image}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover" />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-semibold text-white">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                    {user.email && <p className="text-xs text-gray-500">{user.email}</p>}
                  </div>
                </div>
                <Button
                  onClick={handleLogout}
                  className="w-full cursor-pointer rounded-xl bg-red-50 text-red-600 px-4 py-2.5 text-sm font-medium transition-all hover:bg-red-100 duration-300"
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/logIn" className="no-underline">
                  <Button className="w-full cursor-pointer rounded border bg-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-sky-200">
                    Log In
                  </Button>
                </Link>

                <Link href="/signUp" className="no-underline">
                  <Button className="w-full cursor-pointer rounded bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-sky-100 transition-all hover:bg-sky-600 hover:shadow-md">
                    Get Started →
                  </Button>
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default NavBar;