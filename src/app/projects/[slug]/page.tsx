import SingleProject from '@/features/projects/single-project';
import { PROJECTS } from '@/shared/assets/data/projects';
import { Container } from '@/shared/components/container';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (project) {
    return {
      title: project.title,
      description: project.description,
    };
  } else {
    return {
      title: 'Projetos | Yasmin Lopes',
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    redirect('/projects');
  }
  return (
    <Container>
      <SingleProject project={project} />
    </Container>
  );
}
