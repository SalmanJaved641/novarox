import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import LegalPage, { LegalSection } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms that apply when you use the NovaroX website and engage our digital marketing, design, and web development services.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    content: (
      <>
        <p>
          These Terms of Service govern your use of the NovaroX website and the
          general terms under which we offer our services. By accessing or using
          this website, you agree to these terms. If you do not agree, please do
          not use the website.
        </p>
        <p>
          Where you engage NovaroX for a project, the specific proposal,
          quotation, or written agreement for that project will apply alongside
          these terms. If there is a conflict, the project-specific agreement
          will take precedence for that project.
        </p>
      </>
    ),
  },
  {
    heading: "About NovaroX",
    content: (
      <>
        <p>
          NovaroX is a digital marketing and web development agency based in
          Lahore, Pakistan. We work with businesses and organisations on digital
          strategy, advertising, design, and website projects.
        </p>
        <p>
          References to &quot;NovaroX&quot;, &quot;we&quot;, &quot;us&quot;, and
          &quot;our&quot; in these terms refer to the NovaroX team. References to
          &quot;you&quot; or &quot;client&quot; refer to the person or business
          using the website or engaging our services.
        </p>
      </>
    ),
  },
  {
    heading: "Services We Provide",
    content: (
      <>
        <p>
          NovaroX provides digital services that may include digital marketing
          strategy, Meta and Google advertising, social media management, UI/UX
          and graphic design, website design and development, email marketing,
          analytics and conversion tracking, funnel optimisation, and market
          research.
        </p>
        <p>
          The exact services, deliverables, and availability for your project are
          set out in the applicable proposal or written agreement. Information on
          this website is general in nature and does not by itself create an
          obligation to provide a particular service.
        </p>
      </>
    ),
  },
  {
    heading: "Website Usage",
    content: (
      <>
        <p>You agree to use this website lawfully and responsibly. You must not:</p>
        <ul>
          <li>
            Attempt to gain unauthorised access to the website, its servers, or
            any connected systems;
          </li>
          <li>
            Introduce malware, harmful code, or interfere with the operation,
            security, or availability of the website;
          </li>
          <li>
            Use automated tools to scrape, copy, or collect content or data from
            the website without our prior written permission;
          </li>
          <li>
            Use the website in a way that infringes the rights of NovaroX or any
            third party, or that violates applicable law.
          </li>
        </ul>
        <p>
          We may restrict or suspend access to the website where we reasonably
          believe these rules have been broken or where necessary to protect the
          website and its users.
        </p>
      </>
    ),
  },
  {
    heading: "Client Responsibilities",
    content: (
      <>
        <p>
          Successful projects depend on timely input from both sides. When you
          engage us, you agree to:
        </p>
        <ul>
          <li>
            Provide accurate and complete information about your business,
            goals, and requirements;
          </li>
          <li>
            Respond to requests for feedback, approvals, and materials within
            reasonable timeframes;
          </li>
          <li>
            Ensure that any content, logos, images, data, or other materials you
            provide may lawfully be used for the project;
          </li>
          <li>
            Comply with applicable laws and the terms of any third-party
            platforms connected with your project.
          </li>
        </ul>
        <p>
          Delays or issues caused by missing information, late feedback, or
          third-party restrictions may affect project timelines.
        </p>
      </>
    ),
  },
  {
    heading: "Project Scope and Deliverables",
    content: (
      <>
        <p>
          The scope of each project, including deliverables, milestones,
          timelines, and any acceptance criteria, is defined in the applicable
          proposal or written agreement. Work that is not expressly included in
          that scope is considered out of scope.
        </p>
        <p>
          Any addition or change to the agreed scope should be confirmed in
          writing. Depending on the change, we may adjust the timeline, fees, or
          both. Deliverables are considered accepted when you confirm acceptance
          or when the project is completed in line with the agreed scope,
          whichever applies under the project agreement.
        </p>
      </>
    ),
  },
  {
    heading: "Pricing and Payments",
    content: (
      <>
        <p>
          Fees for our services are set out in the applicable proposal or
          invoice. Any deposit, payment schedule, invoicing terms, or refund
          arrangement will be stated in that proposal, invoice, or written
          agreement.
        </p>
        <p>
          Unless expressly agreed otherwise, third-party costs such as
          advertising spend, software subscriptions, hosting, domains, or
          licences are separate from our service fees and are your
          responsibility. Applicable taxes will be handled as required by law
          and as stated in the relevant invoice or agreement.
        </p>
        <p>
          If an invoice remains unpaid, we may pause or suspend work and related
          services until the matter is resolved, without affecting any other
          rights available to us.
        </p>
      </>
    ),
  },
  {
    heading: "Revisions and Modifications",
    content: (
      <>
        <p>
          The number and scope of revisions included in a project are described
          in the applicable agreement. Revisions beyond the agreed scope, or
          changes requested after approval or delivery, may require additional
          fees and time.
        </p>
        <p>
          We will confirm material changes with you before proceeding where
          practicable. Minor corrections needed to align a deliverable with the
          agreed scope will be handled in line with the project agreement.
        </p>
      </>
    ),
  },
  {
    heading: "Intellectual Property",
    content: (
      <>
        <p>
          The NovaroX name, logo, website design, text, graphics, and other
          content on this website are owned by NovaroX or used with permission.
          You may not copy, reproduce, modify, or redistribute this content for
          commercial purposes without our prior written consent.
        </p>
        <p>
          Materials you provide for a project remain yours, and you grant us the
          rights needed to use them for that project. Ownership of final
          deliverables is governed by the applicable proposal or written
          agreement. Unless otherwise agreed, ownership of completed,
          project-specific deliverables transfers to you upon full payment,
          while our pre-existing tools, templates, methods, and know-how remain
          the property of NovaroX.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Tools and Services",
    content: (
      <>
        <p>
          Our services may involve third-party platforms and tools, such as
          advertising networks, hosting providers, analytics tools, email
          services, and software platforms. These services are governed by their
          own terms, policies, and availability.
        </p>
        <p>
          We are not responsible for changes to third-party features, pricing,
          policies, account decisions, or outages. Where a project depends on a
          third-party platform, continued performance may be affected by factors
          outside our control.
        </p>
      </>
    ),
  },
  {
    heading: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, NovaroX will not be
          liable for indirect, incidental, special, or consequential losses,
          including lost profits, lost revenue, lost data, or business
          interruption, arising from your use of this website or our services.
        </p>
        <p>
          We do not guarantee specific business, marketing, ranking, or revenue
          results, as outcomes depend on many factors outside our control. Where
          liability cannot be excluded, our total liability for a service will be
          limited to the amount provided in the applicable agreement or, if no
          amount is stated, to the fees paid to us for the specific service
          giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    heading: "Service Availability",
    content: (
      <>
        <p>
          We aim to keep this website available and functioning, but it is
          provided on an &quot;as available&quot; basis. We do not guarantee
          uninterrupted, error-free, or secure access at all times.
        </p>
        <p>
          We may suspend, modify, or withdraw part of the website for
          maintenance, updates, security, or other operational reasons. We are
          not liable for temporary unavailability caused by maintenance,
          technical issues, or third-party service interruptions.
        </p>
      </>
    ),
  },
  {
    heading: "Termination of Services",
    content: (
      <>
        <p>
          Either party may terminate a project in accordance with the applicable
          proposal or written agreement. If no termination process is specified,
          either party may end the engagement by written notice.
        </p>
        <p>
          On termination, you remain responsible for fees for work completed and
          authorised commitments up to the termination date, and we will provide
          deliverables or materials as set out in the agreement, subject to
          payment. Provisions that by their nature should survive termination,
          including intellectual property, payment, and liability provisions,
          will continue to apply.
        </p>
      </>
    ),
  },
  {
    heading: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms of Service from time to time. When we do, we
          will revise the &quot;Last updated&quot; date at the top of this page.
          The updated terms will apply to your use of the website from the date
          they are posted.
        </p>
        <p>
          Project-specific agreements are not automatically changed by updates
          to these general terms. We encourage you to review this page
          periodically.
        </p>
      </>
    ),
  },
  {
    heading: "Contact Information",
    content: (
      <>
        <p>
          If you have questions about these Terms of Service, please contact us:
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
          For details about how we handle personal information, please read our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
];

const TermsOfServicePage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/terms-of-service", text: "Terms of Service" },
  ];

  return (
    <>
      <HeroSub
        title="Terms of Service"
        description="The terms that apply when you use the NovaroX website and engage our services."
        breadcrumbLinks={breadcrumbLinks}
      />
      <LegalPage lastUpdated="5 November 2026" sections={sections} />
    </>
  );
};

export default TermsOfServicePage;
