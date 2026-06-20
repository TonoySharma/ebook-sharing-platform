"use client";
import React from "react";
import { Card, Avatar } from "@heroui/react";
import FadeUp from "./FadeUp";

export default function TopWriters() {

  const writers = [
    {
      id: 1,
      name: "Humayun Ahmed",
      sales: "45,200+ Sales",
      // Professional elderly gentleman portrait
      avatar: "data:image/jpeg;base64,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",
      initials: "HA",
    },
    {
      id: 2,
      name: "Rabindranath Tagore",
      sales: "38,900+ Sales",
      // Professional classic portrait
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8bnGU5xuhlMw14GPFen_m89KERb6mPiCgw&s",
      initials: "RT",
    },
    {
      id: 3,
      name: "Kazi Nazrul Islam",
      sales: "31,400+ Sales",
      // Modern smart looking portrait
      avatar: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/05/25/kazi-nazrul_0.png",
      initials: "KN",
    },
    {
      id: 4,
      name: "Sarat Chandra",
      sales: "28,150+ Sales",
      // Premium corporate/writer portrait
      avatar: "https://en.banglapedia.org/images/d/d0/ChattopadhyaySharatChandra.jpg",
      initials: "SC",
    },
  ];

  return (
    <FadeUp className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Top Writers
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Meet our best-selling authors who are shaping the world of literature.
          </p>
        </div>

        {/* Writers Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {writers.map((writer) => (
            <Card 
              key={writer.id} 
              variant="default"
        
              className="py-8 px-6 flex flex-col items-center text-center justify-center border border-divider shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300 rounded-2xl"
            >
              <Card.Content className="flex flex-col items-center gap-5 w-full">
                {/* HeroUI v3 Avatar - Size increased to w-24 h-24 */}
                <Avatar className="w-24 h-24 ring-4 ring-primary/10 shadow">
                  <Avatar.Image 
                    src={writer.avatar} 
                    alt={writer.name} 
                    className="object-cover"
                  />
                  <Avatar.Fallback delayMs={500} className="text-xl font-bold">
                    {writer.initials}
                  </Avatar.Fallback>
                </Avatar>

                {/* Text Info - Font size increased */}
                <div className="space-y-2 mt-2">
                  <h3 className="font-bold text-lg md:text-xl text-foreground tracking-tight line-clamp-1">
                    {writer.name}
                  </h3>
                  <div className="pt-1">
                    <span className="text-xs md:text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block tracking-wide">
                      {writer.sales}
                    </span>
                  </div>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}