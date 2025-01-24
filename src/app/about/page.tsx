import { Metadata } from "next";

import AboutMeView from '@/features/about/about-me-view';
import { Heading } from '@/shared/components/heading';
import { Container } from '@/shared/components/container';

export const metadata: Metadata = {
  title: "About | Samuel Blake",
};

export default function AboutPage() {
  return (
    <Container>
      <Heading className="font-black">About Me</Heading>
      <AboutMeView />
    </Container>
  );
}
