import Banner from "@/components/Banner";
import BookFeatures from "@/components/BookFeatures";
import EbookGenres from "@/components/EbookGenres";
import LatestEbooks from "@/components/LatestEbooks";
import Marquee from "@/components/Marquee";
import TopWriters from "@/components/TopWriter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marquee />
      <LatestEbooks></LatestEbooks>
      <TopWriters></TopWriters>
      <EbookGenres></EbookGenres>
      <BookFeatures></BookFeatures>
    </div>
  );
}
