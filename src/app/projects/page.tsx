import ProjectsView from '@/features/projects/projects-view';
import { Container } from '@/shared/components/container';
import { Heading } from '@/shared/components/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos | Yasmin Lopes',
};

export default function ProjectsPage() {
  return (
    <Container>
      <Heading className="font-black mb-10">Projetos</Heading>
      <ProjectsView />
    </Container>
  );
}
