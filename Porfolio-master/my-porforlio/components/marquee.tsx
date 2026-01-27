import React from 'react';
import Footer from "@/components/footer";
import { div, main } from 'framer-motion/client';
import { AuroraBackground } from "./ui/aurora-background";
import { AuroraBackgroundmarque } from './ui/aurora-background-marque';


const Marquee: React.FC = () => {
  return (

      
    <><AuroraBackgroundmarque>
      <div className=" box-textt   margin-text grid grid-cols-3  margin: auto; gap-4 items-center justify-center space-y-4 w-full h-screen flex">

        <h2 className="text-xs opacity-70 col-span-4 sm:col-span-3">Développeur Full-Stack</h2>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline fill-current" width="21" height="21" viewBox="0 0 256 256">
            <g>
              <path d="m213.27 104l-18-31.18a20 20 0 0 0-34.64 20l-28-48.5A20 20 0 0 0 98 64.31l-8-13.85a20 20 0 0 0-34.64 20l12 20.83l-1.17 1a20 20 0 0 0-29.49 25.88l38 65.83a80 80 0 0 0 138.57-80Zm-57.59 60.64l.17-.1l.14.24Z" opacity=".2"></path>
              <path d="m220.2 100l-18-31.18a28 28 0 0 0-47.3-1.92l-15.34-26.59a28 28 0 0 0-48.12-.63a28 28 0 0 0-43 34.78l3.34 5.79a28 28 0 0 0-22 41.92l38 65.82a87.46 87.46 0 0 0 53.43 41a88.56 88.56 0 0 0 22.92 3A88 88 0 0 0 220.2 100Z"></path>
            </g>
          </svg>
          <span>Hey, bienvenue dans mon petit coin du web !</span>
        </p>

        <p>
          Je suis développeur autodidacte spécialisé dans les solutions logicielles. Passionné de programmation, je m'efforce d'utiliser une architecture logicielle optimale et un code propre et maintenable. J'apprécie particulièrement travailler avec les technologies des écosystèmes suivants :{' '}
          <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(240,219,79,.5)] hover:bg-[rgba(240,219,79,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(240,219,79,.5)] dark:hover:bg-[rgba(240,219,79,.1)]">
            <svg width="1em" height="1em" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736..."></path></svg>
            <span className="text-base">JavaScript</span>
          </a>,{' '}
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(0,122,204,.5)] hover:bg-[rgba(0,122,204,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(0,122,204,.5)] dark:hover:bg-[rgba(0,122,204,.1)]">
            <svg width="1em" height="1em" viewBox="0 0 128 128"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91..."></path></svg>
            <span className="text-base">TypeScript</span>
          </a>, et d'autres langages.
        </p>
        <p>
          Voir plus{' '}
          <a className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50" href="/experience">
            à propos de moi
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
          </a>{' '}
          ou consultez{' '}
          <a className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50" href="/projects">
            mes projets
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
          </a>.
        </p>
        <p>
          Vous pouvez également apprendre quelque chose de nouveau sur mon{' '}
          <a className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50" href="/blog">
            blog
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
          </a>
        </p>
        <p>
          J’aimerais beaucoup découvrir vos idées et collaborer dès que l’occasion se présente.
        </p>








        <div className="relativee">
          <div className="h-fit md:sticky md:top-24 md:w-[23rem]">
            <div className="w-full space-y-4 rounded-xl border border-neutral-200 p-5 text-sm shadow-md dark:border-neutral-800">
              <header className="flex justify-between gap-3">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path>
                  </svg>
                  <span>en train de travailler </span>
                </div>
                <a className="opacity-80 hover:opacity-100" href="/projects">Voir mes projets</a>
              </header>
              <div className="space-y-3 rounded-xl border border-neutral-200 p-2 dark:border-neutral-800">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <div className="font-medium">voxio.fr</div>
                      <div className="text-xs opacity-80">
                        <time dateTime={new Date().toISOString()}>
                          {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </time>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base">
                      <a href="https://github.com/mohed-abbas/collaboard" target="_blank" className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z" opacity="0.2"></path>
                          <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                        </svg>
                      </a>
                      <a href="" target="_blank" className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  Le projet dont je suis le plus fier est réalisé en équipe :  {' '}
                  <a 
                    href="https://github.com/mohed-abbas/collaboard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70"
                  >
                    ici
                  </a>
                  {' '}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"></path>
                      </svg>
                    </span>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-700/10 p-3 leading-none text-neutral-700 transition hover:bg-neutral-700 hover:text-white dark:bg-neutral-400/10 dark:text-neutral-400 dark:hover:bg-neutral-400 dark:hover:text-black" target="_blank" href="cv.pdf">
                  Download CV
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
                  </svg>
                </a>
                <a className="flex items-end justify-center rounded-xl p-3 leading-none underline opacity-70 hover:opacity-100" target="_blank" href="cv.pdf">
                  <span>lire</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs">
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                  </svg>
                </a>
              </div>

            </div>

          </div>

        </div>









      </div>

    </AuroraBackgroundmarque><Footer></Footer></>
    
  );
};

export default Marquee;
