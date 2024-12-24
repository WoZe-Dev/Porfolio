// components/Statistics.tsx

import React, { useEffect, useState } from 'react';

const Statistics: React.FC = () => {
  // Date de naissance en millisecondes
  const birthTime = new Date('2000-07-18T00:00:00Z').getTime();

  const [preciseAge, setPreciseAge] = useState('0.000000000');

  useEffect(() => {
    // Fonction pour calculer l'âge
    const updateAge = () => {
      const now = new Date().getTime(); // Timestamp actuel
      const differenceInMilliseconds = now - birthTime; // Différence depuis la naissance
      const years = differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000); // Convertir en années
      setPreciseAge(years.toFixed(12)); // Précision à 12 décimales
    };

    // Démarrer une boucle rapide
    const interval = setInterval(updateAge, 16); // ~60 FPS pour un affichage fluide

    return () => clearInterval(interval); // Nettoyage lors du démontage
  }, []);

  const data = [
    { label: 'My Age', value: preciseAge }, // Mise à jour dynamique de l'âge
    { label: 'Github Stars', value: '414', icon: 'git.svg' },
    { label: 'Github Followers', value: '+237', link: 'https://github.com/mateusfg7?tab=followers' , icon: 'git.svg'},
    { label: 'Blog posts', value: '45' , icon: 'blog.svg' },
    { label: 'Spotify Plays', value: '4681' , icon: 'music.svg' },
    {
      label: 'Top Artist',
      value: 'Charlie Brown Jr.',
      link: 'https://www.last.fm/music/Charlie+Brown+Jr.',
      icon: 'music.svg'
    },
  ];

  return (
    <div className="dark:text-white space-y-4 dark:bg-black">
      <div className="grid about-full  grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-neutral-200 p-5 leading-none dark:bg-neutral-950 md:p-7 lg:items-start lg:gap-2"
          >
            <span className="inline-flex items-center gap-2 text-neutral-600">
              {item.label}
              {item.icon && (
                <img src={item.icon} alt={`${item.label} icon`} className="w-4 h-4" />
              )}
            </span>
            <div className="flex w-full justify-center text-xl lg:justify-start">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-end">
      </div>
    </div>
  );
};

export default Statistics;
