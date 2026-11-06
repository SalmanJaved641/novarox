import React from "react";
import { Cpu, Sparkles, TrendingUp } from "../icons";

const features = [
  {
    title: "Creative Thinking",
    description:
      "We approach every challenge with fresh ideas and purposeful design.",
    icon: Sparkles,
  },
  {
    title: "Smart Technology",
    description:
      "We use modern tools and technologies to create effective digital solutions.",
    icon: Cpu,
  },
  {
    title: "Growth Mindset",
    description:
      "We focus on solutions that help businesses move forward.",
    icon: TrendingUp,
  },
];

const OurStory: React.FC = () => {
  return (
    <section
      aria-labelledby="about-story-heading"
      className="relative overflow-hidden bg-darkmode py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="site-container relative z-10 max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-aos="fade-right" data-aos-once="true">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <span aria-hidden="true" className="h-px w-8 bg-primary" />
              Our Story
            </span>

            <h2
              id="about-story-heading"
              className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Built Around Ideas.
              <br />
              <span className="text-primary">Driven By Innovation.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-grey sm:text-[17px]">
              <p>
                Every great business deserves a strong digital presence.
                NovaroX brings together creative thinking, modern technology and
                strategic execution to help businesses turn their ideas into
                meaningful digital experiences.
              </p>
              <p>
                Our approach is simple: understand the vision, create the right
                solution and continuously improve the experience to support
                long-term growth.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;

              return (
                <div
                  key={feature.title}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  data-aos-once="true"
                  className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-darklight/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-darklight sm:p-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-4 left-0 w-0.5 origin-top scale-y-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-y-100"
                  />
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-darkmode">
                    <FeatureIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-grey">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;