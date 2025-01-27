import CartographyView from '@/features/cartography/cartography-view';
import { Container } from '@/shared/components/container';
import { Heading } from '@/shared/components/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cartography Projects | Samuel Blake',
};

export default function CartographyPage() {
  return (
    <Container>
      <Heading className="font-black mb-10">Cartography</Heading>
      <CartographyView />
    </Container>
  );
}
