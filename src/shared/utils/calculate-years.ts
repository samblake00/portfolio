/*
  Esta função gera uma matriz de anos desde o ano inicial em que um usuário ingressa no GitHub até o ano atual.
  se joinYear = 2020, resultado = [2020, 2021, 2022, 2023, 2024] 
*/
export function getGitHubYears(joinYear: number | undefined): number[] {
  if (!joinYear) return [];

  const currentYear = new Date().getFullYear();

  const duration = currentYear - joinYear + 1;

  const years = Array.from({ length: duration }, (_year, i) => currentYear - i);

  return years;
}
