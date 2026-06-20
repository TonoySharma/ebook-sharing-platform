"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@heroui/react";

const slides = [
  {
    id: 1,
    author: "H.G. Wells",
    title: "Empire Of The Ants",
    description:
      "Discover thousands of ebooks shared by readers worldwide.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    author: "Book Universe",
    title: "Digital Library",
    description:
      "Read, share and explore your favorite ebooks anytime.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200",
  },
  {
    id: 3,
    author: "Readers Club",
    title: "Knowledge Hub",
    description:
      "Explore thousands of books from every category.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200",
  },
  {
    id: 4,
    author: "Ebook World",
    title: "Learn Everyday",
    description:
      "Join the largest ebook sharing platform today.",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200",
  },
{
  id: 5,
  author: "Jules Verne",
  title: "Journey To The Center Of The Earth",
  description:
    "An epic adventure through mysterious underground worlds.",
  image:
    "https://images.unsplash.com/photo-1544822688-c5f41d2c1972?q=80&w=1119&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#f3f3f3] flex items-center">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 z-30 h-14 w-14 rounded-full
         bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 z-30 h-14 w-14 
        rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <FaChevronRight size={20} />
      </button>

      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-[1fr_1.3fr] items-center gap-5"
          >
            {/* Left Side */}
            <div className="space-y-6 text-center lg:text-left">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-light text-gray-700"
              >
                {slides[current].author}
              </motion.h3>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold leading-none text-gray-900"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-3xl italic text-gray-500 max-w-xl"
              >
                {slides[current].description}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-lime-500 rounded-xl cursor-not-allowed text-lime-600 px-10 py-4
                 font-semibold hover:bg-lime-500 hover:text-white transition-all duration-300"
              >
               Browse Ebooks
              </motion.button>
            </div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="
                rounded-2xl
                  w-[350px]
                  md:w-[500px]
                  lg:w-[700px]
                  xl:w-[850px]
                  object-contain
                  drop-shadow-[0_35px_80px_rgba(0,0,0,0.25)]
                "
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((slide, index) => (
          <Button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`h-4 w-4 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-lime-500 scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}