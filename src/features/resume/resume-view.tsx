"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { EXPERIENCES } from '@/shared/assets/data/resume';
import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';

export default function ResumeView() {
  return (
    <div className="space-y-20">
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
