
import ResumeView from '@/features/resume/resume-view';
import { Container } from '@/shared/components/container';
import { Heading } from '@/shared/components/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Experience | Samuel Blake",
  };

export default function ResumePage() {
  return (
    <Container>
      <Heading className="font-black">Experience</Heading>
      <ResumeView />
    </Container>
  );
}
