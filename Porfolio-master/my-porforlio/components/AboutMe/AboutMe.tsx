// components/AboutMe.tsx

import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

import Statistics from '@/components/AboutMe/Stastics';
import Connaissance from '@/components/AboutMe/Connaissance';
const AboutMe: React.FC = () => {

  return (
    
    <main className='bg-white dark:bg-black overflow-hidden"'>
    <div className="grid  about-full grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Section Texte */}
      <div>
        <h1 className="mb-4 text-4xll font-bold text-gray-900 dark:text-gray-100">À propos de moi</h1>
        <div className="space-y-4 text-lg text-lgg  leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            Je m'appelle <strong>Votre Nom</strong>, et je suis un développeur passionné basé à Votre Ville.
          </p>
          <p>
            Je suis spécialisé en <strong>développement full-stack</strong>, avec une expertise en{' '}
            <a href="https://reactjs.org/" className="text-blue-600 hover:underline">
              React.js
            </a>
            ,{' '}
            <a href="https://nextjs.org/" className="text-blue-600 hover:underline">
              Next.js
            </a>
            , et{' '}
            <a href="https://nodejs.org/" className="text-blue-600 hover:underline">
              Node.js
            </a>
            . J'aime créer des applications web dynamiques et réactives offrant une excellente expérience utilisateur.
          </p>
          <p>
            Pendant mon temps libre, j'aime contribuer à des projets open-source, explorer de nouvelles technologies, et partager mes connaissances avec la communauté.
          </p>
        </div>
        {/* Boutons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/CV.pdf"
            target="_blank"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Télécharger mon CV
          </a>
          <a
            href="https://github.com/votreusername"
            target="_blank"
            className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Profil GitHub
          </a>
        </div>
      </div>

      {/* Section Image */}
      <div className="flex justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64">
          <Image 
            src="Avatar.svg"
            alt="Votre Nom"
            width={1000}
            height={1000}
            className="bg-white"
          />
        </div>
      </div>
    </div>
    
    <Statistics></Statistics>
    
    <Connaissance></Connaissance>
    </main>
  );
  
};

export default AboutMe;