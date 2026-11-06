import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
import Portfolio from "@/components/SharedComponent/portfollio";
import Blog from "@/components/SharedComponent/Blog";
import FAQ from "@/components/Home/FAQ";
import Newsletter from "@/components/Layout/Newsletter";
export const metadata: Metadata = {
  title: "novarox | Strategic Digital Marketing Agency",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Services variant="home" />
      {/* <Blog /> */}
      <Progresswork isColorMode={false} />
      <Portfolio />
      <FAQ />
      {/* <Newsletter /> */}
    </main>
  );
}
