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
  title: {
    default: 'Samuel Blake',
    template: '%s | Samuel Blake',
  },
  description:
    'Portfolio of Samuel Blake, a staff software engineer focused on geospatial platforms, product engineering, and practical technical leadership.',
  keywords: [
    'Samuel Blake',
    'Software Engineer',
    'Geospatial',
    'Portfolio',
    'Next.js',
  ],
  openGraph: {
    title: 'Samuel Blake',
    description:
      'Portfolio of Samuel Blake, a staff software engineer focused on geospatial platforms, product engineering, and practical technical leadership.',
    siteName: 'Samuel Blake',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Blake',
    description:
      'Portfolio of Samuel Blake, a staff software engineer focused on geospatial platforms, product engineering, and practical technical leadership.',
  },
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
              &#8212; Samuel Blake
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
