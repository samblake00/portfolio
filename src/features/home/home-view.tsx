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
      <Heading className="font-black">Hi my name is Samuel Blake!</Heading>
      <Paragraph className="max-w-xl mt-4">
        I'm a software engineer at Maxar Technologies, with a passion for people, remote sensing, snowboarding, music, and software design.
        I utilize my diverse skill set to develop geospatial applications and extract meaningful patterns in data.
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
