import Sidebar from '@/shared/components/sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Samuel Blake',
  description:
  'Yasmin Lopes é uma apaixonada por tecnologia e design, com formação em Análise e Desenvolvimento de Sistemas e atualmente cursando pós-graduação em Engenharia de Software. Com mais de 3 anos de experiência em desenvolvimento de software e uma sólida bagagem em Design Gráfico, Yasmin utiliza sua criatividade para criar soluções inovadoras e eficazes. Além de seu trabalho, ela adora cozinhar, jogar, e é amante de animais, especialmente do seu cachorro JSON. Acompanhe sua jornada e descobertas no blog e nas redes sociais.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          'flex antialiased h-screen overflow-hidden bg-gray-100'
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
              <span className="font-semibold">{new Date().getFullYear()} </span>
              &#8212; Yasmin Lopes
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
