import SingleCartography from '@/features/cartography/single-cartography';
import { CARTOGRAPHY } from '@/shared/assets/data/cartography';
import { Container } from '@/shared/components/container';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type CartProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: CartProps): Promise<Metadata> {
  const slug = params.slug;
  const cartography = CARTOGRAPHY.find((item) => item.slug === slug);
  if (cartography) {
    return {
      title: cartography.title,
      description: cartography.description,
    };
  } else {
    return {
      title: 'Cartography | Samuel Blake',
    };
  }
}

export default function SingleCartographyPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const cartography = CARTOGRAPHY.find((item) => item.slug === slug);

  if (!cartography) {
    redirect('/cartography');
  }
  return (
    <Container>
      <SingleCartography cartography={cartography} />
    </Container>
  );
}
