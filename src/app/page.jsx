import Banner from "@/components/Home/Banner";
import FriendSection from "@/components/Home/FriendSection";
import SummaryCards from "@/components/Home/SummaryCards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <SummaryCards />
      <FriendSection/>
    </div>
  );
}
