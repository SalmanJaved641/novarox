import React from "react";
import { Icon } from "@iconify/react";

const whatsappLink =
  "https://wa.me/923299865814?text=Hello%20NovaroX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
const emailAddress = "Sikandar.info5@gmail.com";

const ContactOptions = () => {
  return (
    <section className="bg-darkmode pt-8 pb-0">
      <div className="site-container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card flex h-full items-start gap-4 sm:gap-5 p-6 sm:p-7 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(255,90,31,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-darkmode">
              <Icon icon="mdi:whatsapp" width="28" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-lg sm:text-xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                WhatsApp
              </span>
              <span className="block text-sm text-grey mt-1 leading-relaxed">
                Chat with us directly on WhatsApp.
              </span>
            </span>
            <Icon
              icon="mdi:arrow-top-right"
              width="22"
              className="shrink-0 text-grey group-hover:text-primary transition-colors"
            />
          </a>

          <a
            href={`mailto:${emailAddress}`}
            className="group glass-card flex h-full items-start gap-4 sm:gap-5 p-6 sm:p-7 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(255,90,31,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-darkmode">
              <Icon icon="mdi:email-outline" width="28" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-lg sm:text-xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                Email Us
              </span>
              <span className="block text-sm text-grey mt-1 leading-relaxed">
                Send us an email and we&apos;ll get back to you.
              </span>
              <span className="block text-sm font-semibold text-primary mt-2 break-all">
                {emailAddress}
              </span>
            </span>
            <Icon
              icon="mdi:arrow-top-right"
              width="22"
              className="shrink-0 text-grey group-hover:text-primary transition-colors"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
