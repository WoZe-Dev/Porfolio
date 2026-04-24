import React from 'react';
import { NavbarDemo } from "@/components/navbar-menu";
import { Github, Globe } from 'lucide-react';
import Footer from "@/components/footer";
import Image from 'next/image';

function App() {
  return (
    <div className="min-h-screen  bg-white dark:bg-black bg-gray-100">
      <NavbarDemo/>
      <div className="container bg-white dark:bg-black mx-auto px-4 py-8">
        <div className='flex flex-col items-center md:items-start projet'>
          <h1 className=' dark:text-white h-fit w-fit bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-900/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent dark:from-neutral-300 dark:via-neutral-300/90 dark:to-neutral-300/70'>
            Projects
          </h1>
        </div>
        
        {/* Projects Grid - Main Projects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Project Card 1 */}
           <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-900 dark:bg-black">
            <div className="h-48 w-full">
              <Image 
                alt="Vexilon Esport Website"
                className="h-full w-full object-cover object-top"
                src="/vexilon-esport.jpg"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-col flex-1">
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className="text-center text-lg font-bold dark:text-white md:text-left">
                    Vexilon Esport
                  </h2>
                </div>
                <p className="flex-1 text-justify text-sm dark:text-white md:text-left">
                  🎮 <span className="font-semibold text-indigo-600 dark:text-indigo-400">Vexilon Esport</span> est un site vitrine développé pour une <span className="font-semibold text-purple-500 dark:text-purple-400">association esport</span> afin de présenter ses équipes, ses joueurs et son univers.
                  <br /><br />
                  ⚡ Réalisé avec <span className="font-medium text-blue-500 dark:text-blue-400">Next.js</span> et <span className="font-medium text-cyan-500 dark:text-cyan-400">React</span> pour de bonnes performances, avec <span className="font-medium text-teal-500 dark:text-teal-400">Tailwind CSS</span> pour un design <span className="font-semibold italic">responsive</span>.
                  <br /><br />
                  ✨ Des animations <span className="font-medium text-green-500 dark:text-green-400">GSAP</span> améliorent l&apos;expérience utilisateur et <span className="font-medium text-purple-500 dark:text-purple-400">Lucide React</span> est utilisé pour les icônes.
                </p>
              </div>
              <div className="mt-9 flex flex-1 flex-col justify-end gap-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Next.js</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">React</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">GSAP</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Tailwind CSS</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Lucide React</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <a 
                  href="#"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://vexilon-esport.fr/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl p-2 text-neutral-700 hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-600/5 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
                </div>
              </div>
            </div>
          </div>
        

          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-900 dark:bg-black">
            <div className="h-48 w-full">
              <Image
                alt="Hackathon Michelin"
                className="h-full w-full object-cover object-top"
                src="/michelin.jpg"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-col flex-1">
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className="text-center text-lg font-bold dark:text-white md:text-left">
                    Hackathon Michelin
                  </h2>
                </div>
                <p className="flex-1 text-justify text-sm dark:text-white md:text-left">
                  🏆 Projet conçu lors d&apos;un hackathon autour d&apos;une expérience digitale immersive inspirée de l&apos;univers du <span className="font-semibold text-red-500">Guide Michelin</span>.
                  <br /><br />
                  🍽️ Cette application invite les utilisateurs à devenir de véritables <span className="font-semibold italic">&laquo; chasseurs d&apos;étoiles &raquo;</span> : explorer des restaurants, partager leurs expériences, valider leurs visites et construire une collection de souvenirs culinaires.
                  <br /><br />
                  ✨ Pensée pour la <span className="font-semibold">Gen Z</span>, l&apos;interface propose un parcours fluide et engageant, mêlant <span className="font-medium text-yellow-500 dark:text-yellow-400">découverte</span>, <span className="font-medium text-blue-500 dark:text-blue-400">gamification</span> et <span className="font-medium text-purple-500 dark:text-purple-400">storytelling</span> de la marque.
                  <br /><br />
                  🛠️ Architecture <span className="font-semibold">monorepo</span> avec <span className="font-medium">Next.js</span>, <span className="font-medium">Express</span> et <span className="font-medium">Prisma</span>, déployé avec <span className="font-medium">Docker</span> et optimisé en tant que <span className="font-medium">React</span>.
                </p>
              </div>
              <div className="mt-9 flex flex-1 flex-col justify-end gap-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Next.js</span>
                   <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">React</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Express</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Prisma</span>
                 
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Docker</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <a href="https://github.com/mohed-abbas/leguidemichelin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]">
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://github.com/mohed-abbas/leguidemichelin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-2xl p-2 text-neutral-700 hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-600/5 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900">
                  Website
                  <Globe className="h-5 w-5" />
                </a>
                </div>
              </div>
            </div>
          </div>

            <div className="flex h-full bg-white dark:bg-black flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <Image 
                alt="Smart Home Dashboard" 
                className="h-full w-full object-cover object-top"
                src="/kanboard.png"
                width={500}
                height={500}
              />
            </div>
            
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-col flex-1">
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className="dark:text-white text-center text-lg font-bold md:text-left">
                    Collaboration ( Trello )
                  </h2>
                </div>
                <p className="flex-1 dark:text-white text-justify text-sm md:text-left">
                  🎓 <span className="font-semibold text-indigo-500 dark:text-indigo-400">Projet annuel</span> réunissant l&apos;ensemble des compétences acquises autour d&apos;un <span className="font-semibold italic">projet complet et professionnalisant</span>.
                  <br /><br />
                  🤝 Une application de <span className="font-medium text-blue-500 dark:text-blue-400">collaboration type Trello</span> développée avec <span className="font-medium text-red-500 dark:text-red-400">Laravel</span>, <span className="font-medium text-yellow-500 dark:text-yellow-400">JavaScript</span> et <span className="font-medium text-cyan-500 dark:text-cyan-400">SQL</span>, pour offrir une expérience de <span className="font-semibold text-purple-500 dark:text-purple-400">gestion de projet</span> fluide et intuitive.
                </p>
              </div>
              <div className="mt-9 flex flex-1 flex-col justify-end gap-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Laravel</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">SQL</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">JavaScript</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">HTML/CSS</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <a 
                  href="https://github.com/mohed-abbas/collaboard" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="/collaboard" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl p-2 text-neutral-700 hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-600/5 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
                </div>
              </div>
            </div>
          </div>


            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <Image 
                alt="E-commerce Platform" 
                className="h-full w-full object-cover object-top"
                src="/recherche-img.png"
                width={500}
                height={500}
              />
            </div>
            <div className="bg-white dark:bg-black flex flex-1 flex-col p-5">
              <div className="flex flex-col flex-1">
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className="dark:text-white text-center text-lg font-bold md:text-left">
                    Recherche d&apos;images
                  </h2>
                </div>
                <p className="flex-1 dark:text-white text-justify text-sm md:text-left">
                  🔍 Développement d&apos;un outil d&apos;<span className="font-semibold text-blue-500 dark:text-blue-400">analyse d&apos;image</span> basé sur l&apos;<span className="font-semibold text-purple-500 dark:text-purple-400">intelligence artificielle</span>, permettant d&apos;associer une photo à une <span className="font-semibold text-indigo-500 dark:text-indigo-400">référence produit</span>.
                  <br /><br />
                  ⚡ Extraction de <span className="font-medium text-cyan-500 dark:text-cyan-400">caractéristiques visuelles</span> et mise en place d&apos;un <span className="font-semibold text-green-500 dark:text-green-400">cache</span> pour accélérer les recherches.
                </p>
              </div>
              <div className="mt-9 flex flex-1 flex-col justify-end gap-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Python</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">HTML/CSS</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Javascript</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <a 
                  href="https://github.com/WoZe-Dev/tricycle-research" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="tricycle-office-img" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl p-2 text-neutral-700 hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-600/5 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="flex h-full flex-col bg-white dark:bg-black overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <Image 
                alt="AI Chat Application" 
                className="h-full w-full object-cover object-top"
                src="/betweenus.png"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-col flex-1">
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className="dark:text-white text-center text-lg font-bold md:text-left">
                    BetweenUs
                  </h2>
                </div>
                <p className="flex-1 dark:text-white text-justify text-sm md:text-left">
                  📸 Projet de groupe à l&apos;<span className="font-semibold text-indigo-500 dark:text-indigo-400">ESGi</span>, une <span className="font-semibold text-blue-500 dark:text-blue-400">application web de galerie photo</span> avec système d&apos;<span className="font-medium text-purple-500 dark:text-purple-400">authentification</span> permettant aux utilisateurs de télécharger et gérer leurs photos.
                  <br /><br />
                  🛠️ Développée avec un <span className="font-medium text-cyan-500 dark:text-cyan-400">framework PHP</span>, stylisée en <span className="font-medium text-pink-500 dark:text-pink-400">SCSS</span> et animée en <span className="font-medium text-yellow-500 dark:text-yellow-400">JavaScript</span>, le tout conteneurisé avec <span className="font-semibold text-green-500 dark:text-green-400">Docker</span>.
                </p>
              </div>
              <div className="mt-9 flex flex-1 flex-col justify-end gap-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Framework / PHP</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">SCSS</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Javascript</span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Docker</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <a 
                  href="https://github.com/mohedabbas/betweenus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="betweenus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl p-2 text-neutral-700 hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-600/5 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
                </div>
              </div>
            </div>
          </div>

          

          {/* Project Card 3 */}
          <div className="flex h-full flex-col bg-white dark:bg-black overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <Image 
                alt="Fitness Tracker" 
                className="h-full w-full object-cover object-top"
                src="/retouche-photo.png"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-col flex-1">
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className="dark:text-white text-center text-lg font-bold md:text-left">
                    PhotoRoom  Studio
                  </h2>
                </div>
                <p className="flex-1 dark:text-white text-justify text-sm md:text-left">
                  🖼️ <span className="font-semibold text-indigo-500 dark:text-indigo-400">Détourage automatique</span> d&apos;images via l&apos;<span className="font-semibold text-blue-500 dark:text-blue-400">API PhotoRoom</span>.
                  <br /><br />
                  ✂️ <span className="font-medium text-cyan-500 dark:text-cyan-400">Redimensionnement d&apos;image</span> avec ajout d&apos;un <span className="font-medium text-purple-500 dark:text-purple-400">logo personnalisé</span> centré en bas pour une mise en page <span className="font-semibold italic">soignée</span>.
                </p>
              </div>
              <div className="mt-9 flex flex-1 flex-col justify-end gap-2">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">Python</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                <a 
                  href="https://github.com/WoZe-Dev/Retouche-image.git" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                </div>
              </div>
            </div>
          </div>


          {/* Vexilon Esport */}
         

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
