import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import LegalPage, { LegalSection } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how NovaroX collects, uses, and protects the personal information you share through our website and contact forms.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    content: (
      <>
        <p>
          NovaroX provides digital marketing, design, and web development
          services. This Privacy Policy explains how we handle information when
          you visit this website or contact us through the channels available
          here. In this policy, &quot;NovaroX&quot;, &quot;we&quot;,
          &quot;us&quot;, and &quot;our&quot; refer to the NovaroX team based in
          Lahore, Pakistan.
        </p>
        <p>
          We have written this policy to reflect how the website currently
          operates. By using this website, you acknowledge the practices
          described below.
        </p>
      </>
    ),
  },
  {
    heading: "Information We Collect",
    content: (
      <>
        <p>
          We only collect information that is necessary to respond to your
          enquiries and provide our services. This generally falls into two
          categories: information you choose to submit to us, and limited
          technical information processed by the systems that deliver this
          website.
        </p>
        <p>
          Like most websites, our hosting environment may process basic
          technical data such as your IP address, browser type, device
          information, and the pages you request. This data is used for the
          security, reliability, and normal operation of the website.
        </p>
      </>
    ),
  },
  {
    heading: "Personal Information",
    content: (
      <>
        <p>
          Personal information means information that can identify you or be
          reasonably linked to you. We collect personal information when you
          voluntarily provide it, for example by submitting a contact form,
          sending us an email, or messaging us through WhatsApp.
        </p>
        <p>
          The type of information we receive depends on what you provide. It
          may include your name, email address, and details about your business
          or project. We do not require you to create an account to browse this
          website, and we do not intentionally collect sensitive personal
          information. Please do not send sensitive information unless it is
          necessary for your enquiry.
        </p>
      </>
    ),
  },
  {
    heading: "Information Submitted Through Contact Forms",
    content: (
      <>
        <p>
          Our contact form collects the following fields: first name, last
          name, email address, the service or specialist you are interested in,
          and an optional preferred date and time. The form may also include an
          optional message and country field depending on how you submit your
          enquiry.
        </p>
        <p>
          When you submit the form, the information is sent to our contact API
          and delivered to NovaroX by email through our email service provider.
          We do not maintain a separate customer database for form submissions;
          the information is received and handled through our email inbox so
          that we can respond to you.
        </p>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    content: (
      <>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Respond to your enquiry and communicate with you;</li>
          <li>Understand your requirements and prepare relevant services;</li>
          <li>Provide, manage, and improve our services;</li>
          <li>Maintain business records and comply with applicable law;</li>
          <li>Protect the website and our business from misuse or fraud.</li>
        </ul>
        <p>
          We do not sell or rent your personal information. We only use it for
          the purposes for which it was provided or for purposes that are
          compatible with them.
        </p>
      </>
    ),
  },
  {
    heading: "Cookies and Website Analytics",
    content: (
      <>
        <p>
          This website does not currently set cookies for analytics,
          advertising, or tracking, and we do not currently use third-party
          analytics or advertising pixels on the site.
        </p>
        <p>
          Some third-party services you reach through links on this website,
          such as social media platforms or WhatsApp, may use their own cookies
          or similar technologies. Those practices are governed by the
          respective third party&apos;s policies, not this Privacy Policy.
        </p>
        <p>
          If we introduce analytics, cookies, or similar tools in the future,
          we will update this policy and, where required, provide an appropriate
          notice or consent mechanism.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Services",
    content: (
      <>
        <p>
          We rely on a small number of service providers to operate this website
          and communicate with you. These currently include an email service
          provider used to deliver contact form submissions and general
          correspondence, and a hosting provider that serves the website.
        </p>
        <p>
          Information submitted through the contact form is transmitted through
          our email service provider solely to deliver your message to us. We do
          not control these providers&apos; own data practices, which are
          governed by their respective terms and policies.
        </p>
        <p>
          When you choose to contact us through WhatsApp, email, or social media
          platforms linked on this website, your use of those services is
          subject to their terms and privacy policies.
        </p>
      </>
    ),
  },
  {
    heading: "Data Security",
    content: (
      <>
        <p>
          We take reasonable administrative and technical measures to protect
          the information we receive. Access to project and enquiry information
          is limited to people who need it for their work.
        </p>
        <p>
          Please note that no method of transmission over the internet or
          storage is completely secure. While we work to protect your
          information, we cannot guarantee absolute security, and you share
          information with us at your own discretion.
        </p>
      </>
    ),
  },
  {
    heading: "Data Retention",
    content: (
      <>
        <p>
          We retain personal information for as long as necessary to respond to
          your enquiry, provide services, maintain appropriate business records,
          and comply with legal obligations. When information is no longer needed
          for these purposes, we will delete or otherwise dispose of it in a
          reasonable manner.
        </p>
        <p>
          If you ask us to delete your information, we will consider and act on
          your request in accordance with applicable law, subject to any records
          we are required or entitled to retain.
        </p>
      </>
    ),
  },
  {
    heading: "User Rights",
    content: (
      <>
        <p>
          Depending on your circumstances and applicable law, you may have the
          right to request access to the personal information we hold about you,
          ask us to correct inaccurate information, request deletion, or object
          to or restrict certain processing.
        </p>
        <p>
          To exercise these rights, please contact us using the details below.
          We may need to verify your identity before acting on a request. Some
          requests may be limited where we have a lawful reason or obligation to
          retain or process the information.
        </p>
      </>
    ),
  },
  {
    heading: "External Website Links",
    content: (
      <>
        <p>
          This website contains links to external websites and platforms,
          including WhatsApp, social media profiles, and our development
          partner&apos;s website. We provide these links for convenience and do
          not control the content, availability, or privacy practices of those
          external websites.
        </p>
        <p>
          We are not responsible for the information you share with third-party
          websites. We encourage you to review their privacy policies before
          providing personal information.
        </p>
      </>
    ),
  },
  {
    heading: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, the website, or applicable requirements. When we do,
          we will revise the &quot;Last updated&quot; date at the top of this
          page.
        </p>
        <p>
          We encourage you to review this page periodically. Your continued use
          of the website after an updated policy is posted means you acknowledge
          the updated policy.
        </p>
      </>
    ),
  },
  {
    heading: "Contact Information",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, please contact us:
        </p>
        <ul>
          <li>
            <strong>Business Name:</strong> NovaroX
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:Sikandar.info5@gmail.com">
              Sikandar.info5@gmail.com
            </a>
          </li>
          <li>
            <strong>Location:</strong> Lahore, Pakistan
          </li>
        </ul>
        <p>
          For information about the rules that apply when using our website and
          services, please read our{" "}
          <Link href="/terms-of-service">Terms of Service</Link>.
        </p>
      </>
    ),
  },
];

const PrivacyPolicyPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/privacy-policy", text: "Privacy Policy" },
  ];

  return (
    <>
      <HeroSub
        title="Privacy Policy"
        description="How NovaroX collects, uses, and protects the information you share with us."
        breadcrumbLinks={breadcrumbLinks}
      />
      <LegalPage lastUpdated="5 November 2026" sections={sections} />
    </>
  );
};

export default PrivacyPolicyPage;
