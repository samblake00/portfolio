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
      <Heading className="font-black">Olá, me chamo Yasmin!</Heading>
      <Paragraph className="max-w-xl mt-4">
        Sou desenvolvedora de sofware com
        <Highlight>mais de {yearsOfExperience} anos de experiência</Highlight>.
        Amo a tecnologia e estou sempre buscando aprimorar minhas habilidades
        com boas práticas de programação, arquiteturas de sistemas e UI/UX.
      </Paragraph>

      <GithubCalendar/>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Projetos mais recentes
      </Heading>

      <ProjectsView />
    </Container>
  );
}
