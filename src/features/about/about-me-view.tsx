'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Paragraph } from '@/shared/components/paragraph';
import { Highlight } from '@/shared/components/highlight';
import { yearsOfExperience } from '@/shared/utils/years-experience';

export default function AboutMeView() {
  const images = [
    '/assets/images/me.jpg',
    '/assets/images/kailena.jpg',
    '/assets/images/travel.jpg',
    '/assets/images/mountains.jpg'
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
          I&apos;m a{' '}
          <Highlight>
            software engineer
          </Highlight>{' '}
          who enjoys building things that are reliable, fast, and occasionally a little over-engineered (in the best way).
          Most of my professional work is in the cloud, where I focus on distributed systems, automation, and infrastructure
          for a commercial satellite imaging company.
        </Paragraph>

        <Paragraph className="mt-4">
          Outside of work, I love building side projects, learning new technologies, and helping small businesses improve
          their online presence through my website studio,{' '}
          <a
            href="https://blakebyte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            BlakeByte
          </a>
          . I&apos;m always looking for better ways to build thoughtful,
          useful applications and stay current with what&apos;s happening in tech. If you&apos;d like to see what I&apos;m currently
          exploring, you can check out my profile{' '}
          <a
            href="https://github.com/samblake00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            on GitHub.
          </a>
        </Paragraph>

        <Paragraph className="mt-4">
          When I&apos;m not writing code, you&apos;ll probably find me snowboarding in the mountains, working on my house,
          planning the next trip, or trying to make something slightly better than it was before.
        </Paragraph>
      </div>
    </div>
  );
}
