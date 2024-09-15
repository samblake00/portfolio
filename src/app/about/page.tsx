import { Metadata } from "next";

import AboutMeView from '@/features/about/about-me-view';
import { Heading } from '@/shared/components/heading';
import { Container } from '@/shared/components/container';

export const metadata: Metadata = {
  title: "Sobre | Yasmin Lopes",
};

export default function AboutPage() {
  return (
    <Container>
      <Heading className="font-black">Sobre mim</Heading>
      <AboutMeView />
    </Container>
  );
}
