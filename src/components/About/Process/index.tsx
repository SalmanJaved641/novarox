import React from "react";
import { Compass, PenTool, Refresh, Search } from "../icons";

const steps = [
  {
    title: "Discover",
    description:
      "We understand your business, goals, audience and project requirements.",
    icon: Search,
  },
  {
    title: "Strategize",
    description:
      "We plan the right approach, define priorities and identify the best solutions.",
    icon: Compass,
  },
  {
    title: "Create",
    description:
      "Our team designs, develops and implements the agreed digital solution.",
    icon: PenTool,
  },
  {
    title: "Improve",
    description:
      "We review the outcome, refine the experience and identify opportunities for improvement.",
    icon: Refresh,
  },
];

const Process: React.FC = () => {
  return (
    <section
      aria-labelledby="about-process-heading"
      className="relative overflow-hidden bg-darkmode py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="site-container relative z-10 max-w-7xl">
        <div
          className="mx-auto max-w-2xl text-center"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Our Workflow
          </span>
          <h2
            id="about-process-heading"
            className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            From Vision To{" "}
            <span className="text-primary">Execution.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-grey sm:text-[17px]">
            A clear and collaborative process that turns ideas into practical
            digital solutions.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-10 md:mt-16 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon;

            return (
              <li
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-once="true"
                className="group relative flex gap-5 md:block"
              >
                {index < steps.length - 1 && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-[-2.5rem] left-7 top-14 w-px bg-white/10 md:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-14 right-[-1.5rem] top-7 hidden h-px bg-gradient-to-r from-primary/40 via-white/10 to-white/5 md:block"
                    />
                  </>
                )}

                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-darkmode text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-darkmode">
                  <StepIcon className="h-6 w-6" />
                </span>

                <div className="min-w-0 pb-2 md:pb-0">
                  <span className="block text-4xl font-black leading-none text-primary/80 transition-colors duration-300 group-hover:text-primary sm:text-5xl">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Process;