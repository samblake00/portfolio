'use client';
import GitHubCalendar from 'react-github-calendar';
import { useState } from 'react';
import { getGitHubYears } from '@/shared/utils/calculate-years';
import { github } from '@/shared/assets/data/contribution-graph-theme';
import EmptyState from '@/shared/components/empty-state';
import YearButton from '@/shared/components/year-button';

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(undefined);

  const today = new Date().getFullYear();
  const username = 'samblake00';
  const joinYear = Number(2017);
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear)
    return (
      <EmptyState
        title="Não foi possível carregar o gráfico de contribuições"
        message="Não conseguimos encontrar nenhuma credencial do GitHub adicionada ao arquivo .env. Para exibir o gráfico, forneça seu nome de usuário e o ano em que você se juntou ao GitHub"
      />
    );

  return (
    <div className="flex xl:flex-row flex-col gap-4">
      <div className="bg-secondary-bg borderborder-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
        <GitHubCalendar
          username={username}
          theme={github}
          colorScheme="light"
          blockSize={13}
          year={calendarYear}
        />
      </div>
      <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))}
      </div>
    </div>
  );
}
