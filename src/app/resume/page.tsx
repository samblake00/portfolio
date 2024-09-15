
import ResumeView from '@/features/resume/resume-view';
import { Container } from '@/shared/components/container';
import { Heading } from '@/shared/components/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Experiências | Yasmin Lopes",
  };

export default function ResumePage() {
  return (
    <Container>
      <Heading className="font-black">Experiências</Heading>
      <ResumeView />
    </Container>
  );
}
