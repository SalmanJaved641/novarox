"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
];

const blogLinks = [
  { label: "Blog List", href: "/blog" },
  { label: "Blog Details", href: "/blog/Blog_1" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Novarox",
    icon: (
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.09 16.09 2 14.93 2 12.2 2 10.5 3.66 10.5 6.7v2.8H8v4h2.5V22H14Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/novarox/",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3V21H9Z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@novarox_",
    icon: (
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.04.87.13V9.4a6.33 6.33 0 0 0-5.06 1.56A6.36 6.36 0 0 0 3 15.9a6.33 6.33 0 0 0 6.31 6.32 6.33 6.33 0 0 0 6.33-6.32V9.7a8.16 8.16 0 0 0 4.77 1.52V7.77a4.85 4.85 0 0 1-.82-1.08Z" />
    ),
  },
];

const Footer: FC = () => {
  const pathname = usePathname();
  const [blogOpen, setBlogOpen] = useState(false);
  const [year] = useState(() => new Date().getFullYear());

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <footer className="bg-darkmode border-t border-white/5 relative z-1">
      <div className="site-container max-w-7xl">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-16 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="NovaroX home" className="inline-flex">
              <Image
                src="/logo-novarox.png"
                alt="NovaroX"
                width={1544}
                height={606}
                className="h-auto w-[175px] object-contain"
              />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-grey">
              Building digital experiences and{" "}
              <strong className="font-semibold text-white">
                Engineering the future of digital marketing
              </strong>
              .
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NovaroX on ${social.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-grey transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white"
            >
              Quick Links
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-block text-[15px] transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-grey hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget as Node | null
                    )
                  ) {
                    setBlogOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={blogOpen}
                  aria-controls="footer-blog-menu"
                  onClick={() => setBlogOpen((open) => !open)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setBlogOpen(false);
                    }
                  }}
                  className={`flex items-center gap-1.5 text-[15px] transition-colors ${
                    isActive("/blog")
                      ? "text-primary"
                      : "text-grey hover:text-primary"
                  }`}
                >
                  Blog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      blogOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m7 10 5 5 5-5" />
                  </svg>
                </button>
                <ul
                  id="footer-blog-menu"
                  hidden={!blogOpen}
                  className="mt-3 ml-1 space-y-2.5 border-l border-white/10 pl-4"
                >
                  {blogLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`inline-block text-sm transition-colors ${
                          pathname === link.href
                            ? "text-primary"
                            : "text-grey hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`inline-block text-[15px] transition-colors ${
                    isActive("/contact")
                      ? "text-primary"
                      : "text-grey hover:text-primary"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal-links">
            <h2
              id="footer-legal-links"
              className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white"
            >
              Legal &amp; Policies
            </h2>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-block text-[15px] transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-grey hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 py-8 text-center">
          <p className="text-sm text-grey">
            Copyright © {year} |{" "}
            <Link
              href="/"
              className="text-white transition-colors hover:text-primary"
            >
              NovaroX
            </Link>
          </p>
          <p className="mt-2 text-sm text-grey">
            Powered by{" "}
            <a
              href="https://s-solutions-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-primary"
            >
              S Solutions
            </a>{" "}
            | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
