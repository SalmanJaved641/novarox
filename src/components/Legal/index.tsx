import React, { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  content: ReactNode;
};

type LegalPageProps = {
  lastUpdated: string;
  sections: LegalSection[];
};

const LegalPage: React.FC<LegalPageProps> = ({ lastUpdated, sections }) => {
  return (
    <section className="dark:bg-darkmode pb-24 pt-8">
      <div className="site-container max-w-4xl">
        <p className="mb-12 text-sm text-grey">Last updated: {lastUpdated}</p>
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-4 text-2xl font-bold text-primary sm:text-[28px]">
                {section.heading}
              </h2>
              <div className="space-y-4 text-[15.5px] leading-7 text-white/90 [&_a]:text-primary [&_a:hover]:underline [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
