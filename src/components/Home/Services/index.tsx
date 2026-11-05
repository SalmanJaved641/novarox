import React from "react";
import Link from "next/link";
import { Servicebox } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Image from "next/image";

type ServicesProps = {
  variant?: "all" | "home";
};

const Services = ({ variant = "all" }: ServicesProps) => {
  const isHome = variant === "home";
  // Home page shows 9 on desktop and 8 on mobile; the 9th is hidden below md.
  const services = isHome ? Servicebox.slice(0, 9) : Servicebox;

  return (
    <section className="bg-darkmode py-20 md:py-24" id="services">
      <div className="site-container max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl space-y-6">
            <h2
              className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter"
              data-aos="fade-right"
            >
              Expertise <br />
              <span className="text-primary">Redefined.</span>
            </h2>
            <p className="text-xl text-grey font-medium">
              We don't just provide services; we engineer growth engines for the
              digital age.
            </p>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-4 text-xl text-white font-bold hover:text-primary transition-all"
            data-aos="fade-left"
          >
            View All Services
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-darkmode transition-all">
              <Icon icon="mdi:arrow-top-right" width="24" />
            </div>
          </Link>
        </div>

        <div
          className={
            isHome
              ? "grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
              : "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          }
        >
          {services.map((item, index) => (
            <Link
              href={`/services/${item.slug}`}
              key={item.slug}
              className={`group glass-card flex flex-col h-full overflow-hidden rounded-2xl! cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(255,90,31,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                isHome && index === 8 ? "max-md:hidden" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 60}
              data-aos-once="true"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <Icon
                      icon="mdi:star"
                      width="48"
                      className="text-primary/20"
                    />
                  </div>
                )}
              </div>

              <div className="p-4 md:p-5 flex flex-1 flex-col gap-2.5">
                <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tight leading-snug line-clamp-3 md:line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-grey font-medium leading-relaxed line-clamp-2 md:line-clamp-3">
                  {item.description}
                </p>

                <span className="service-card-cta mt-auto inline-flex items-center gap-1.5 pt-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">
                  View Details
                  <Icon icon="mdi:arrow-right" width="14" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
