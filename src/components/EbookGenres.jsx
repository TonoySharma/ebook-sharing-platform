"use client";
import React from "react";
import { Card } from "@heroui/react";
import Link from "next/link";


import { 
  FaBookOpen, 
  FaHeart, 
  FaGhost, 
  FaBriefcase, 
  FaHistory 
} from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { BsCompass, BsShieldShaded } from "react-icons/bs";
import FadeUp from "./FadeUp";

export default function EbookGenres() {

  const genres = [
    {
      id: "fiction",
      name: "Fiction",
      count: "1,240+ Ebooks",
      icon: FaBookOpen,
      bgClass: "bg-blue-500/10 text-blue-500",
    },
    {
      id: "mystery",
      name: "Mystery & Thriller",
      count: "850+ Ebooks",
      icon: BiSearchAlt,
      bgClass: "bg-purple-500/10 text-purple-500",
    },
    {
      id: "romance",
      name: "Romance",
      count: "980+ Ebooks",
      icon: FaHeart,
      bgClass: "bg-pink-500/10 text-pink-500",
    },
    {
      id: "sci-fi",
      name: "Sci-Fi",
      count: "640+ Ebooks",
      icon: BsCompass, 
      bgClass: "bg-cyan-500/10 text-cyan-500",
    },
    {
      id: "fantasy",
      name: "Fantasy",
      count: "710+ Ebooks",
      icon: BsShieldShaded, 
      bgClass: "bg-amber-500/10 text-amber-500",
    },
    {
      id: "horror",
      name: "Horror",
      count: "430+ Ebooks",
      icon: FaGhost,
      bgClass: "bg-red-500/10 text-red-500",
    },
    {
      id: "business",
      name: "Business & Finance",
      count: "520+ Ebooks",
      icon: FaBriefcase,
      bgClass: "bg-emerald-500/10 text-emerald-500",
    },
    {
      id: "history",
      name: "History",
      count: "310+ Ebooks",
      icon: FaHistory,
      bgClass: "bg-orange-500/10 text-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-divider">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeUp className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Explore Ebook Genres
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Find your next favorite read by browsing through our top categories.
            </p>
          </div>
          <div>
            <Link 
              href="/browse" 
              className="text-sm font-semibold text-primary hover:underline"
            >
              View All Categories &rarr;
            </Link>
          </div>
        </FadeUp>

        {/* Genres Grid */}
        <FadeUp className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genres.map((genre) => {
            const IconComponent = genre.icon;
            //  `/browse?genre=${genre.id}`
            return (
              <Link 
                key={genre.id} 
                href={'#'}   
                className="block group"
              >
                <Card 
                  variant="default"
                  className="p-6 h-full flex flex-col items-start justify-between border border-divider shadow-sm group-hover:shadow-md group-hover:border-primary/40 group-hover:scale-[1.02] transition-all duration-200 rounded-2xl bg-content1"
                >
                  <Card.Content className="w-full flex flex-col gap-4 p-0">
                    {/* Icon Wrapper with Dynamic Colors */}
                    <div className={`p-3 rounded-xl w-fit flex items-center justify-center ${genre.bgClass}`}>
                      <IconComponent size={24} />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                        {genre.name}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {genre.count}
                      </p>
                    </div>
                  </Card.Content>
                </Card>
              </Link>
            );
          })}
        </FadeUp>
      </div>
    </section>
  );
}