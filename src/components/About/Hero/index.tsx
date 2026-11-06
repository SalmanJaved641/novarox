import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Sparkles, TrendingUp } from "../icons";

type FloatingLabelProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  className: string;
  delay: string;
};

const FloatingLabel: React.FC<FloatingLabelProps> = ({
  children,
  icon,
  className,
  delay,
}) => (
  <div
    className={`absolute z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#1d1d1d]/95 px-3 py-2 shadow-lg backdrop-blur-md motion-safe:animate-float ${className}`}
    style={{ animationDelay: delay }}
  >
    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
      {icon}
    </span>
    <span className="whitespace-nowrap text-[10px] font-semibold text-white sm:text-xs">
      {children}
    </span>
  </div>
);

const HeroVisual: React.FC = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[520px]">
    <div
      aria-hidden="true"
      className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,90,31,0.3),rgba(255,90,31,0.06)_52%,transparent_70%)] blur-2xl motion-safe:animate-pulse"
    />
    <div
      aria-hidden="true"
      className="absolute inset-[7%] rounded-full border border-white/10"
    />
    <div
      aria-hidden="true"
      className="absolute inset-[17%] rounded-full border border-dashed border-primary/30 motion-safe:animate-[spin_60s_linear_infinite]"
    />
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
    />

    <div className="absolute left-1/2 top-1/2 z-10 w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-white/10 bg-[#191919]/95 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
            Growth Engine
          </span>
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-grey">
          Live
        </span>
      </div>

      <svg
        viewBox="0 0 200 96"
        className="mt-4 h-auto w-full"
        role="img"
        aria-label="Illustrative chart showing upward digital growth"
      >
        <defs>
          <linearGradient id="about-chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M4 84c22-4 34-24 54-21 22 3 34-25 54-19 20 6 34-22 54-18 14 3 24-10 30-16v82H4Z"
          fill="url(#about-chart-fill)"
        />
        <path
          d="M4 84c22-4 34-24 54-21 22 3 34-25 54-19 20 6 34-22 54-18 14 3 24-10 30-16"
          fill="none"
          stroke="#FF5A1F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="112" cy="44" r="3" fill="#FF5A1F" opacity="0.7" />
        <circle cx="196" cy="10" r="4" fill="#FF5A1F" />
      </svg>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-[10px] font-medium text-grey sm:text-xs">
          Ideas &rarr; Impact
        </span>
        <span className="text-xs font-bold text-primary sm:text-sm">
          Built to scale
        </span>
      </div>
    </div>

    <FloatingLabel
      className="left-0 top-[4%]"
      delay="0s"
      icon={<Sparkles className="h-4 w-4" />}
    >
      Creative Thinking
    </FloatingLabel>
    <FloatingLabel
      className="right-0 top-[4%]"
      delay="1.2s"
      icon={<Cpu className="h-4 w-4" />}
    >
      Smart Technology
    </FloatingLabel>
    <FloatingLabel
      className="bottom-[2%] left-[6%]"
      delay="2.1s"
      icon={<TrendingUp className="h-4 w-4" />}
    >
      Digital Growth
    </FloatingLabel>

    <span
      aria-hidden="true"
      className="absolute right-[42%] top-[28%] h-3 w-3 rotate-12 rounded-sm border border-primary/50"
    />
    <span
      aria-hidden="true"
      className="absolute bottom-[30%] left-[8%] h-2 w-2 rounded-full bg-primary/60"
    />
    <span
      aria-hidden="true"
      className="absolute bottom-[18%] right-[8%] h-5 w-5 rounded-full border border-white/15"
    />
  </div>
);

const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-darkmode pb-20 pt-36 sm:pt-40 md:pb-28 lg:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 top-8 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[110px] motion-safe:animate-pulse" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-mid/10 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="site-container relative z-10 max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right" data-aos-once="true">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-primary"
              />
              Who We Are
            </span>

            <h1 className="mt-6 text-[2.6rem] font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
              Turning Ideas Into{" "}
              <span className="text-primary">Digital Growth.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-grey sm:text-lg">
              NovaroX is a digital solutions agency combining creativity,
              technology and strategic thinking to help businesses build
              stronger digital experiences and achieve sustainable growth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#team"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-darkmode transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(255,90,31,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-darkmode"
              >
                Explore Our Team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-darkmode"
              >
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="150" data-aos-once="true">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;