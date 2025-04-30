import React from 'react';
import { NavbarDemo } from "@/components/navbar-menu";
import { Github, Globe } from 'lucide-react';
import Footer from "@/components/footer";

function App() {
  return (
    <div className="min-h-screen  bg-white dark:bg-black bg-gray-100">
      <NavbarDemo/>
      <div className="container bg-white dark:bg-black mx-auto px-4 py-8">
        <div className='flex flex-col items-center md:items-start'>
          <h1 className=' dark:text-white h-fit w-fit bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-900/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent dark:from-neutral-300 dark:via-neutral-300/90 dark:to-neutral-300/70'>
            Projects
          </h1>
        </div>
        
        {/* Projects Grid - Main Projects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Project Card 1 */}
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <img 
                alt="E-commerce Platform" 
                className="h-full w-full object-cover object-top"
                src="recherche-img.PNG"
              />
            </div>
            <div className=" bg-white dark:bg-black flex flex-1 flex-col p-5">
              <div>
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className=" bg-white dark:bg-black   dark:text-white text-center text-lg font-bold md:text-left">
                  Recherche d'images
                  </h2>
                </div>
                <p className=" dark:text-white  text-justify text-sm md:text-left">
                Développement d'un outil d'analyse d'image basé sur l'intelligence artificielle, permettant d'associer une photo à une référence produit. 
                <br />
                Extraction de caractéristiques visuelles, et mise en place d'un cache pour accélérer les recherches.
                </p>
                <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    Python
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    HTLM/CSS
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                  Javascript  
                  </span>
                </div>
              </div>
              <div className="mt-9 flex flex-1 items-end justify-center gap-2">
                <a 
                  href="https://github.com/WoZe-Dev/tricycle-research" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="tricycle-office-img" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl p-2 text-neutral-700 hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-600/5 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          

          {/* Project Card 2 */}
          <div className="flex h-full flex-col bg-white dark:bg-black overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <img 
                alt="AI Chat Application" 
                className="h-full w-full object-cover object-top"
                src="betweenus.PNG"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div>
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className="dark:text-white text-center text-lg font-bold md:text-left">
                    BetweenUs
                  </h2>
                </div>
                <p className="dark:text-white text-justify text-sm md:text-left">
                  Projet de groupe à l'ESGi, une application web de galerie photo avec système d'authentification permettant aux utilisateurs de télécharger et gérer leurs photos.
                </p>
                <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
                  <span className=" dark:text-white rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    Framework / PHP
                  </span>
                  <span className=" dark:text-white rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                  SCSS
                  </span>
                  <span className=" dark:text-white rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                  Javascript
                  </span>
                  <span className=" dark:text-white rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                  Docker
                  </span>
                </div>
              </div>
              <div className=" mt-9 flex flex-1 items-end justify-center gap-2">
                <a 
                  href="https://github.com/mohedabbas/betweenus" 
                  target="_blank" 
                  rel="noreferrer" 
                  className=" dark:text-white flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="betweenus" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl p-2 text-neutral-700 hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-600/5 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                >
                  Website
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="flex h-full flex-col bg-white dark:bg-black overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <img 
                alt="Fitness Tracker" 
                className="h-full w-full object-cover object-top"
                src="retouche-photo.png"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div>
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className=" dark:text-white text-center text-lg font-bold md:text-left">
                    Photoroom studio 
                  </h2>
                </div>
                <p className=" dark:text-white text-justify text-sm md:text-left">
                 Détourage automatique d'images via l'API PhotoRoom,
                 redimensionnement d'image avec ajout d'un logo personnalisé centré en bas.
                </p>
                <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    Python
                  </span>
                </div>
              </div>
              <div className="mt-9 flex flex-1 items-end justify-center gap-2">
                <a 
                  href="https://github.com/WoZe-Dev/Retouche-image.git" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="flex h-full bg-white dark:bg-black flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-900 dark:bg-neutral-1000">
            <div className="h-48 w-full">
              <img 
                alt="Smart Home Dashboard" 
                className="h-full w-full object-cover object-top"
                src="Kanboard.png"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div>
                <div className="mb-10 flex flex-col items-center gap-2 md:mb-4 md:flex-row">
                  <h2 className=" dark:text-white text-center text-lg font-bold md:text-left">
                   Kanboard ( en cours de développement )
                  </h2>
                </div>
                <p className="dark:text-white text-justify text-sm md:text-left">
                  Projet annuel est un projet qui chaque année réuni l'ensemble des compétences acquises
                  autour d'un projet afin de donner aux étudiants l'opportunité de créer un projet complet et
                  professionnalisant
                </p>
                <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                    Laravel 
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                  SQL
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                  JavaScript
                  </span>
                  <span className="rounded-xl bg-neutral-700/10 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200">
                  HTML/CSS
                  </span>
                </div>
              </div>
              <div className="mt-9 flex flex-1 items-end justify-center gap-2">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl bg-[rgba(24,23,23,0.1)] p-2 text-[rgb(24,23,23)] hover:bg-[rgb(24,23,23)] hover:text-[rgb(246,248,250)] dark:bg-[rgb(246,248,250,0.1)] dark:text-[rgb(246,248,250)] dark:hover:bg-[rgb(246,248,250)] hover:dark:text-[rgb(24,23,23)]"
                >
                  Source
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 rounded-2xl p-2 text-neutral-700 hover:bg-neutral-900 hover:text-neutral-50 dark:bg-neutral-600/5 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                >
                  Website ( bientôt )
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
    
        
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;