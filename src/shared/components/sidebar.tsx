'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconLayoutSidebarRightCollapse } from '@tabler/icons-react';
import { useIsMobile } from '../utils/is-mobile';
import { Badge } from './badge';
import { Heading } from './heading';
import { SOCIALS } from '../assets/data/social';
import { NAV_LINKS } from '../assets/data/nav-data';

export type Navlink = {
  href: string;
  label: string;
  icon?: any;
};

export default function Sidebar() {
    const isMobile = useIsMobile();
  const [open, setOpen] = useState(!isMobile);

  useEffect(() => {
    setOpen(!isMobile); // Adjust the sidebar state when the screen size changes
  }, [isMobile]);

  const renderHead = (
    <div className="flex space-x-2 items-center">
      <div className="relative w-10 h-10"> 
        <Image
          src="/assets/images/headshot.jpg"
          alt="Avatar"
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>
  
      <div className="text-sm flex flex-col">
        <p className="font-bold text-primary">Samuel Blake</p>
        <p className="font-light text-secondary">Software Developer</p>
      </div>
    </div>
  );

  return (
    <>
      {open && (
        <div className="px-6 z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between">
          <div className="flex-1 overflow-auto">
            {renderHead}
            <Navigation setOpen={setOpen} />
          </div>
          <div onClick={() => isMobile && setOpen(false)}>
            <Badge href="/resume" text="See resume" />
          </div>
        </div>
      )}
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-[100]"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-primary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {NAV_LINKS.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            'text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm',
            isActive(link.href) && 'bg-white shadow-lg text-primary'
          )}
        >
          <link.icon
            className={twMerge(
              'h-4 w-4 flex-shrink-0',
              isActive(link.href) && 'text-primary'
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {SOCIALS.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            'text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm'
          )}
        >
          <link.icon
            className={twMerge('h-4 w-4 flex-shrink-0', 'text-primary')}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};


