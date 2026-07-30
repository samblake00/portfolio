'use client';

import { Heading } from '@/shared/components/heading';
import { Paragraph } from '@/shared/components/paragraph';
import ProjectsView from '../projects/projects-view';
import { Container } from '@/shared/components/container';
import { Highlight } from '@/shared/components/highlight';
import { yearsOfExperience } from '@/shared/utils/years-experience';
import GithubCalendar from './home-github-contribution';

export default function HomeView() {
  return (
    <Container>
      <Heading className="font-black">Hi my name is Sam Blake!</Heading>
      <Paragraph className="max-w-xl mt-4">
        Welcome to my personal portfolio! I&apos;m a Staff Software Development Engineer at Vantor with a passion for geospatial software design and solving complex technical challenges.
        Outside of work, you&apos;ll usually find me snowboarding, playing guitar, or spending time outdoors.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
          Feel free to explore my projects, learn more about my interests and experience, and don&apos;t hesitate to reach out. I&apos;d love to connect!
      </Paragraph>

      <GithubCalendar/>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
       Recent Projects
      </Heading>

      <ProjectsView />
    </Container>
  );
}
