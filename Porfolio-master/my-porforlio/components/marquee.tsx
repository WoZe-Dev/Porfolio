import React from 'react';
import Footer from "@/components/footer";
import { div, main } from 'framer-motion/client';
import { AuroraBackground } from "./ui/aurora-background";
import { AuroraBackgroundmarque } from './ui/aurora-background-marque';


const Marquee: React.FC = () => {
  return (

      
    <><AuroraBackgroundmarque>
      <div className=" box-textt   margin-text grid grid-cols-3  margin: auto; gap-4 items-center justify-center space-y-4 w-full h-screen flex">

        <h2 className="text-xs opacity-70 responsive col-span-4 sm:col-span-3 ">Développeur Full-Stack</h2>
        <p className='responsive'>

        <svg className="mr-1 inline fill-current text-black dark:text-white" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="m18.6575 19.2409c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.742l11.5324 15.0998 2.6883 3.3878-7.8906-10.3314c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.7421l7.8906 10.3312 6.2707 7.899c5.467 6.2731 14.5147 5.9306 20.7863.465 3.6045-3.1684 5.9226-7.5482 6.5154-12.3105.3858-4.2326.807-15.301.807-15.301-.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939 9.7575-3.3657-4.2224 3.3657 4.2224-3.3657-4.2224-13.4651-17.2086c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.742l4.2488 5.5631 6.4234 8.48-13.419-17.6801c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3116 4.8183c.1552.2714.3458.5209.5667.7421l14.6716 19.0145"/>
            <g stroke-miterlimit="10">
              <path d="m11.6726 42.8719c0 2.5663 1.747 4.6428 3.9059 4.6428"/>
              <path d="m7.0614 42.4369c0 5.5959 3.8094 10.1241 8.5171 10.1241"/>
              <path d="m45.2619 21.2377c0-2.5663-1.747-4.6428-3.9059-4.6428"/>
              <path d="m49.8731 21.6727c0-5.5959-3.8094-10.1241-8.5171-10.1241"/>
            </g>
          </g>
        </svg>

            
          <span>Hey, bienvenue dans mon petit coin sur le web !</span>
        </p>

        <p className='responsive'>
          Je suis un programmeur autodidacte passionné par le développement. <br />
          J'accorde une grande importance à l'architecture web, <br /> ainsi qu'à l'écriture d'un code propre et maintenable. <br />
          J'aime travailler avec les technologies de l'écosystème : {' '}
                    <a href="https://www.javascript.com/" target="_blank" className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(240,219,79,.5)] hover:bg-[rgba(240,219,79,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(240,219,79,.5)] dark:hover:bg-[rgba(240,219,79,.1)]">
              <svg className="logo-svg hover:border-logo-color" width="1em" height="1em" viewBox="0 0 128 128">
                  <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                  <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
              </svg>

        
              
              <span className="text-base">Javascript</span>
              
          </a>

          <a href="https://www.typescriptlang.org/" target="_blank" className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(0,122,204,.5)] hover:bg-[rgba(0,122,204,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(0,122,204,.5)] dark:hover:bg-[rgba(0,122,204,.1)]">
        <svg className="logo-svg-ts" width="1em" height="1em" viewBox="0 0 128 128">
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
            <path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
        </svg>
        <span className="text-base">TypeScript</span>
    </a>


<a href="https://nextjs.org/" target="_blank" className="inline-flex items-center gap-px rounded-md border border-neutral-200 bg-neutral-200/30 px-1 text-sm transition hover:border-[rgba(0,0,0,.5)] hover:bg-[rgba(0,0,0,.1)] dark:border-neutral-800 dark:bg-neutral-800/30 dark:hover:border-[rgba(0,0,0,.5)] dark:hover:bg-[rgba(0,0,0,.1)]">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
    <path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
  </svg>
  <span className="text-base">Next.js</span>
</a>


        </p>
        <p className='responsive'>
          See more{' '}
          <a className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50" href="/about">
            about me
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
          </a>{' '}
          or check out{' '}
          <a className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50" href="/projects">
            my projects
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
          </a>.
        </p>
        <p className='responsive'>
          You can also learn something new on my{' '}
          <a className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50" href="/blog">
            blog posts
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
          </a>{' '}
          or my{' '}
          <a className="inline-flex items-center rounded-md px-1 font-medium text-black transition hover:bg-neutral-200/50 dark:text-white dark:hover:bg-neutral-800/50" href="/blog/til">
            "Today I Learn"
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
          </a>{' '}
          notes!
        </p>
        <p className='responsive'>
          I'd love to hear your ideas and collaborate where possible!
        </p>








        <div className="relativee phone ">
          <div className="h-fit md:sticky md:top-24 md:w-[23rem]">
            <div className="w-full space-y-4 rounded-xl border border-neutral-200 p-5 text-sm shadow-md dark:border-neutral-800">
              <header className="flex justify-between gap-3">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path>
                  </svg>
                  <span>Currently making...</span>
                </div>
                <a className="opacity-80 hover:opacity-100" href="/projects">see projects</a>
              </header>
              <div className="space-y-3 rounded-xl border border-neutral-200 p-2 dark:border-neutral-800">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <div className="font-medium">mateusf.com</div>
                      <div className="text-xs opacity-80">
                        <time dateTime="2024-10-28T14:18:42Z">Oct 28, 2024</time>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base">
                      <a href="https://github.com/mateusfg7/mateusf.com" target="_blank" className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z" opacity="0.2"></path>
                          <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                        </svg>
                      </a>
                      <a href="https://mateusf.com" target="_blank" className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>🏡 My corner of internet, a.k.a Personal Homepage & Portfolio.</div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                      </svg>
                    </span>
                    <span>50</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"></path>
                      </svg>
                    </span>
                    <span>11</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-700/10 p-3 leading-none text-neutral-700 transition hover:bg-neutral-700 hover:text-white dark:bg-neutral-400/10 dark:text-neutral-400 dark:hover:bg-neutral-400 dark:hover:text-black" target="_blank" href="/assets/cv-mateus-felipe.pdf">
                  Download CV
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
                  </svg>
                </a>
                <a className="flex items-end justify-center rounded-xl p-3 leading-none underline opacity-70 hover:opacity-100" target="_blank" href="https://read.cv/mateusfelipe/?ref=https://mateusf.com">
                  <span>read.cv</span>
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
