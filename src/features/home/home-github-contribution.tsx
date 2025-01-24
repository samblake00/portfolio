import { Heading } from '@/shared/components/heading';
import ContributionGraph from './home-contribution-graph';

export default function GithubCalendar() {
  return (
    <section>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Contributions
      </Heading>

      <ContributionGraph />
    </section>
  );
}
