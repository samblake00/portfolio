'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Paragraph } from '@/shared/components/paragraph';
import { Highlight } from '@/shared/components/highlight';
import { yearsOfExperience } from '@/shared/utils/years-experience';

export default function AboutMeView() {
  const images = [
    '/assets/images/eu.jpg',
    '/assets/images/json.jpg',
    '/assets/images/eu2.jpg',
    '/assets/images/penne.jpg',
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
          Olá! Meu nome é Yasmin e eu sou apaixonada por tecnologia e design.
          Com uma formação em Análise e Desenvolvimento de Sistemas pela UNIMAR
          e atualmente cursando pós-graduação em Engenharia de Software na PUC
          Minas, venho unindo essas duas paixões para criar ideias inovadoras e
          desenvolver soluções criativas.
        </Paragraph>

        <Paragraph className="mt-4">
          Com{' '}
          <Highlight>
            mais de {yearsOfExperience} anos de experiência em desenvolvimento
            de software
          </Highlight>{' '}
          e uma bagagem de mais de 4 anos na área de Design Gráfico, estou
          sempre em busca de novos desafios e aprendizados.
        </Paragraph>

        <Paragraph className="mt-4">
          Adoro explorar novas maneiras de criar melhores aplicações e estou
          constantemente aprendendo e me atualizando. Em meu blog, você pode
          conferir um artigo detalhado sobre a minha jornada na programação.
          Para ler, clique{' '}
          <a
            href="https://medium.com/@yasmin.lopes/do-zero-ao-full-stack-minha-jornada-na-programa%C3%A7%C3%A3o-6f79d264c8f7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            aqui
          </a>
          .
        </Paragraph>

        <Paragraph className="mt-4">
          Fora do trabalho, tenho vários hobbies que amo. Gosto muito de
          cozinhar, jogar (meu jogo favorito é The Last of Us), e sou apaixonada
          por animais. Tenho um cachorro adorável chamado JSON, que você pode
          seguir no Instagram em{' '}
          <a
            href="https://www.instagram.com/jsonthedog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            @jsonthedog
          </a>
          . Além disso, sou fã de música, viagens e finanças.
        </Paragraph>
      </div>
    </div>
  );
}
