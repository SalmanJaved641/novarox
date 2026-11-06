import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Sikandar Abbas",
    role: "Chief Executive Officer",
    image: "/images/team%20pics/1.jpeg",
    background: "#D8D4D1",
    responsibilities: ["Business Vision & Strategy", "Leadership & Growth"],
  },
  {
    name: "Muhammad Aashir",
    role: "CFO",
    image: "/images/team%20pics/2.jpeg",
    background: "#D9CEC5",
    responsibilities: ["Financial Planning", "Budget & Financial Management"],
  },
  {
    name: "Salman Javed",
    role: "Web & E-commerce Specialist",
    image: "/images/team%20pics/3.png",
    background: "#C9CED5",
    responsibilities: ["Website & Shopify Development", "E-commerce Solutions"],
  },
  {
    name: "Ayeza Arain",
    role: "AI Automation Specialist",
    image: "/images/team%20pics/4.jpeg",
    background: "#E4D7CE",
    responsibilities: ["AI Workflow Automation", "Intelligent Process Solutions"],
  },
  {
    name: "Ayesha Sajjad",
    role: "Frontend Developer",
    image: "/images/team%20pics/5.jpeg",
    background: "#C7D0DC",
    responsibilities: ["Responsive UI Development", "Interactive Web Interfaces"],
  },
  {
    name: "Zarnigar Sarwar",
    role: "Web Developer",
    image: "/images/team%20pics/6.jpeg",
    background: "#D6D6D6",
    responsibilities: [
      "Website Development",
      "Web Functionality & Integration",
    ],
  },
];

const Team: React.FC = () => {
  return (
    <section
      id="team"
      aria-labelledby="about-team-heading"
      className="relative scroll-mt-28 overflow-hidden bg-darkmode py-20 md:scroll-mt-32 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-80 w-[38rem] max-w-full -translate-x-1/2 rounded-full bg-primary/5 blur-[110px]"
      />

      <div className="site-container relative z-10 max-w-7xl">
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary sm:text-[11px]">
            The People Behind NovaroX
          </span>
          <h2
            id="about-team-heading"
            className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Meet The <span className="text-primary">Team.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-grey sm:text-[17px]">
            Behind every great digital experience is a team of creative
            thinkers, problem-solvers and technology enthusiasts working
            together to turn ideas into reality.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={member.name}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 80}
              data-aos-once="true"
              className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#151515] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(255,90,31,0.12)]"
            >
              <div
                className="relative h-[250px] w-full overflow-hidden min-[360px]:h-[200px] min-[420px]:h-[225px] sm:h-[285px] xl:h-[305px]"
                style={{ backgroundColor: member.background }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.35),transparent_62%)]"
                />
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 360px) 50vw, 100vw"
                  className="object-contain object-bottom px-2 pt-3 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 min-[420px]:p-5 sm:p-6">
                <h3 className="text-base font-bold text-white min-[420px]:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold text-primary min-[420px]:text-xs sm:text-sm">
                  {member.role}
                </p>
                <ul className="mt-4 space-y-2">
                  {member.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-2 text-[11px] leading-relaxed text-grey min-[420px]:text-xs sm:text-[13px]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                      />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;