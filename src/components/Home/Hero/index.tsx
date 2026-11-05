"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 bg-darkmode overflow-hidden flex flex-col justify-center">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="glow-blob top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20"></div>
        <div
          className="glow-blob bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-mid/20"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div
            className="space-y-8 lg:space-y-10 order-2 lg:order-1 text-center lg:text-left"
            data-aos="fade-right"
          >
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[70px] font-black text-white leading-[1.1] md:leading-[1]   uppercase">
                GROW BRAND <br />
                <span className="bg-gradient-to-r from-primary via-accent-mid to-accent-light bg-clip-text text-transparent">
                  FASTER
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-grey max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Novarox transforms your digital presence into a growth engine
                through data-driven strategies and high-impact creatives.
              </p>
            </div>

            {/* CTA Group */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-6 lg:pt-8"
            >
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-primary text-darkmode rounded-full font-bold text-lg sm:text-xl overflow-hidden transition-all hover:scale-105 hover:bg-primary-hover active:scale-95 shadow-[0_0_50px_rgba(255,90,31,0.25)]"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-primary font-bold text-lg sm:text-xl rounded-full border border-primary hover:bg-primary/10 transition-all backdrop-blur-sm"
              >
                Our Expertise
              </Link>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div
            className="relative lg:ml-auto w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] mx-auto order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 group">
              <Image
                src="https://images.pexels.com/photos/6476785/pexels-photo-6476785.jpeg"
                alt="Digital Excellence"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Stat Cards - Adjusted for mobile */}
            <div className="absolute -top-4 -right-4 glass-card bg-primary/90 p-4 sm:p-6 shadow-2xl animate-float z-20">
              <p className="text-2xl sm:text-3xl font-black text-darkmode">98%</p>
              <p className="text-[9px] sm:text-[10px] font-bold text-darkmode/70 uppercase tracking-widest">
                Client Satisfaction
              </p>
            </div>

            {/* Meta Ads Card */}
            <div
              className="absolute top-[-3%] -left-6 sm:-left-12 glass-card p-3 sm:p-5 shadow-2xl animate-float z-20"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Icon icon="logos:meta-icon" className="text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-black text-white">
                    Meta Ads
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-primary uppercase flex items-center gap-1">
                    Optimized <Icon icon="solar:bolt-bold" />
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Ads Card */}
            <div
              className="absolute top-[35%] -left-8 sm:-left-16 glass-card p-3 sm:p-5 shadow-2xl animate-float z-20"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Icon
                    icon="mdi:instagram"
                    className="text-white text-xl sm:text-2xl"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-black text-white">
                    Instagram
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-primary uppercase flex items-center gap-1">
                    Growth <Icon icon="solar:graph-up-bold" />
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Ads Card */}
            <div
              className="absolute bottom-[5%] -left-6 sm:-left-10 glass-card p-3 sm:p-5 shadow-2xl animate-float z-20"
              style={{ animationDelay: "2.5s" }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0077b5] rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Icon
                    icon="logos:linkedin-icon"
                    className="text-white brightness-200"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-black text-white">
                    LinkedIn
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-primary uppercase flex items-center gap-1">
                    B2B Lead <Icon icon="solar:user-bold" />
                  </p>
                </div>
              </div>
            </div>

            {/* Google Ads Card */}
            <div
              className="absolute top-1/2 -right-6 sm:-right-12 glass-card p-4 sm:p-6 shadow-2xl animate-float z-20"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Icon
                    icon="logos:google-ads"
                    className="text-xl sm:text-2xl"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-black text-white">
                    Google Ads
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-green-500 uppercase flex items-center gap-1">
                    Certified <Icon icon="solar:check-circle-bold" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
