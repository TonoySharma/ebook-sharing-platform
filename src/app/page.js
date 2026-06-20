import Banner from "@/components/Banner";
import EbookGenres from "@/components/EbookGenres";
import Marquee from "@/components/Marquee";
import TopWriters from "@/components/TopWriter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marquee />
      <TopWriters></TopWriters>
      <EbookGenres></EbookGenres>
    </div>
  );
}
