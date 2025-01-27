'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Paragraph } from '@/shared/components/paragraph';
import { Highlight } from '@/shared/components/highlight';
import { yearsOfExperience } from '@/shared/utils/years-experience';

export default function AboutMeView() {
  const images = [
    '/assets/images/headshot.jpg',
    '/assets/images/kailena.jpg',
    '/assets/images/london.jpg',
    '/assets/images/cake.jpg'
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">

        <Paragraph className="mt-4">
          With over {' '}
          <Highlight>
           {yearsOfExperience} years of experience in software design and development
          </Highlight>{' '}
          and 4+ years in remote sensing/GIS, I&apos;m always seeking new challenges and opportunities to learn and
          grow.
        </Paragraph>

        <Paragraph className="mt-4">
          I&apos;m passionate about finding innovative ways to create better applications, and I enjoy staying updated with the latest in tech.
          If you&apos;re interested in my learning more about what I&apos;m focusing on or recent projects I&apos;ve completed, check out my GitHub profile{' '}
          <a
            href="https://github.com/samblake00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            here!
          </a>
        </Paragraph>

        <Paragraph className="mt-4">
          When I&apos;m not working, I enjoy a variety of hobbies. I love cooking and baking with my fiancé,
          playing games (especially Settlers of Catan and Jackbox games), and I&apos;m a big animal lover.
          My cat, Kailena, is my furry companion and keeps me company during all my coding sessions.
          I&apos;m also into music, travelling, snowboarding, and geocaching.
        </Paragraph>
      </div>
    </div>
  );
}
