"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { EXPERIENCES } from '@/shared/assets/data/resume';
import { EDUCATION } from '@/shared/assets/data/resume';
import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';

export default function ResumeView() {
  return (
      <div className="space-y-10">
 {/* Experiences Title and Download Button */}
  <div className="flex justify-between items-center">
    <Heading as="h4" className="black">
      Experience
    </Heading>
    <a
      href="/assets/Samuel_Blake_Resume.pdf" // Adjust the path to where your resume is hosted
      download="Samuel_Blake_Resume.pdf"
      className="inline-block bg-emerald-500 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-emerald-600 transition"
      aria-label="Download resume"
    >
      Download Resume
    </a>
  </div>
      {/* Experiences Section */}
      {EXPERIENCES.map((item, index) => (
        <div
          className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 relative"
          key={`timeline-${index}`}
        >
          <div className="flex-shrink-0 w-40">
            <Paragraph className="text-sm">{item.date}</Paragraph>
          </div>
          <div className="flex-1">
            <Heading as="h5" className="text-lg md:text-lg lg:text-lg text-emerald-500">
              {item.company}
            </Heading>
            <Paragraph className="text-base font-semibold">
              {item.title}
            </Paragraph>
            {item.responsibilities.map((responsibility, index) => (
              <Step key={index}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
      {/* Divider line */}
      <div className="border-t border-gray-300 my-10"></div>
      {/* Education section */}
      <div>
        <Heading as="h4" className="text-2xl text-emerald-500">Education</Heading>
        {/* You can add your education items here */}
        {EDUCATION.map((education, index) => (
        <div key={`education-${index}`} className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-start my-6"> {/* Flex layout */}
          <div className="flex-1 space-y-1">
            <Paragraph className="text-lg font-semibold">{education.degree}</Paragraph>
            <Paragraph className="text-sm text-gray-500">{education.institution}</Paragraph>
            <Paragraph className="text-sm text-gray-500">
                {education.descriptionLink ? (
                  <a
                    href={education.descriptionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 hover:underline"
                  >
                    {education.description}
                  </a>
                ) : (
                  education.description
                )}
            </Paragraph>
          </div>
          <div className="flex-shrink-0">
            <Paragraph className="text-sm text-gray-500">{education.date}</Paragraph>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start space-x-3 my-2">
      <IconCircleCheckFilled className="h-5 w-5 text-neutral-300" />
      <Paragraph className="text-sm flex-1">
        {children}
      </Paragraph>
    </div>
  );
};
