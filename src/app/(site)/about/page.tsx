import React from "react";
import { Metadata } from "next";
import AboutHero from "@/components/About/Hero";
import OurStory from "@/components/About/Story";
import Philosophy from "@/components/About/Philosophy";
import Team from "@/components/About/Team";
import Process from "@/components/About/Process";
import AboutCTA from "@/components/About/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet NovaroX, a digital solutions agency combining creativity, technology and strategic thinking to help businesses achieve sustainable digital growth.",
};

const AboutPage = () => {
  return (
    <main className="about-page">
      <AboutHero />
      <OurStory />
      <Philosophy />
      <Team />
      <Process />
      <AboutCTA />
    </main>
  );
};

export default AboutPage;