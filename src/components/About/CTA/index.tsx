import React from "react";
import Link from "next/link";
import { ArrowRight } from "../icons";

const AboutCTA: React.FC = () => {
  return (
    <section className="relative bg-darkmode py-20 md:py-28">
      <div className="site-container max-w-7xl">
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-darklight px-6 py-14 text-center sm:px-10 md:py-20 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-28 left-1/2 h-64 w-[34rem] max-w-full -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full border border-primary/10" />
            <div className="absolute -bottom-16 -right-8 h-40 w-40 rounded-full border border-white/5" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Have An Idea?{" "}
              <span className="text-primary">
                Let&apos;s Build Something Great.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-grey sm:text-lg">
              Whether you&apos;re launching something new or improving an
              existing digital presence, our team is ready to help you take the
              next step.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-darkmode transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_35px_rgba(255,90,31,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-darklight"
            >
              Start A Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;