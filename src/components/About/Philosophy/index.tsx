import React from "react";
import { Code, Lightbulb, Target } from "../icons";

const principles = [
  {
    title: "Creativity First",
    description:
      "We believe great digital experiences begin with creative thinking, thoughtful design and a clear understanding of business goals.",
    icon: Lightbulb,
  },
  {
    title: "Technology With Purpose",
    description:
      "We use modern technologies and practical solutions to create digital experiences that are useful, scalable and effective.",
    icon: Code,
  },
  {
    title: "Results That Matter",
    description:
      "We focus on meaningful improvements, strategic execution and solutions designed around real business needs.",
    icon: Target,
  },
];

const Philosophy: React.FC = () => {
  return (
    <section
      aria-labelledby="about-philosophy-heading"
      className="relative overflow-hidden bg-darkmode py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="site-container relative z-10 max-w-7xl">
        <div
          className="mx-auto max-w-2xl text-center"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Our Philosophy
          </span>
          <h2
            id="about-philosophy-heading"
            className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            What Makes Us Different?
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {principles.map((principle, index) => {
            const PrincipleIcon = principle.icon;

            return (
              <article
                key={principle.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="true"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-darklight/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_18px_45px_rgba(255,90,31,0.12)] sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 text-5xl font-black leading-none text-white/5 transition-colors duration-300 group-hover:text-primary/10"
                >
                  0{index + 1}
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-darkmode">
                  <PrincipleIcon className="h-6 w-6" />
                </span>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-grey">
                  {principle.description}
                </p>

                <div className="mt-auto pt-6">
                  <span
                    aria-hidden="true"
                    className="block h-px w-full bg-gradient-to-r from-primary/40 via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;