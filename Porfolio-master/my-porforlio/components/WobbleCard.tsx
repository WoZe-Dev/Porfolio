// components/WobbleCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import LogoCarousel from '../components/LogoCarousel';
import { CardStackDemo } from '../components/card-stack'
import Image from 'next/image';

const WobbleCard: React.FC = () => {
  return (
    <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
      <div className="col-span-1">
        <a
          className="groupe relatif flex h-full w-full transform-gpu flex-col justify-between gap-5 overflow-hidden rounded-xl text-white transition-all duration-500 will-change-[border,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100"
          href="https://github.com/WoZe-Dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true" className="pointer-events-none absolute inset-1 -z-20">
            <Image
              alt="cat img"
              loading="lazy"
              width={564}
              height={642}
              className="absolute inset-1 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
              src="/home.png"
              style={{ color: "transparent" }}
            />
            <span aria-hidden="true" className="absolute inset-1 bg-gradient-to-t  to-neutral-900/20 dark:bg-neutral-900/50"></span>
          </span>
          <span aria-hidden="true" className="px-6 pt-6">
            <span className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xl">
               
              </svg>
            </span>
          </span>
          <span className="space-y-0.5 px-6 pb-6">
            <span className="block font-semibold">GitHub</span>
            <span className="block text-sm">Mes expériences</span>
          </span>
        </a>
      </div>

      <div className="col-span-2">
        <div className="groupe relatif h-full w-full transform-gpu overflow-hidden rounded-xl bg-[#f7f2f2] duration-500 hover:scale-[.97] dark:bg-[#0d1117]">
          <a href="https://github.com/WoZe-Dev" target="_blank" rel="noopener noreferrer">
            <div className="z-0 grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1 opacity-90">
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="size-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(0, 109, 50)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(14, 68, 41)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(22, 27, 34)' }}></div>
              <div className="taille-3 rounded" style={{ background: 'rgb(57, 211, 83)' }}></div>
            </div>
            <div className="absolute bottom-1 flex flex-row flex-wrap gap-x-6 p-2 sm:gap-x-4 md:gap-x-6">
              <div>
                <span className="mr-1 text-sm text-zinc-600 dark:text-zinc-400">Étoiles :</span> 1
              </div>
              <div>
                <span className="mr-1 text-sm text-zinc-600 dark:text-zinc-400">Abonnés :</span> 2
              </div>
              <div>
                <span className="mr-1 text-sm text-zinc-600 dark:text-zinc-400">Dépôts :</span> 10
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-span-3">
        <a 
          target="_blank" 
          className="relative flex h-36 transform-gpu items-center justify-center overflow-hidden rounded-lg bg-[#000] text-white duration-500 hover:scale-95" 
          href="https://www.last.fm/music/Louise+Attaque/Louise+Attaque/J%27T%27Emm%C3%A8ne+Au+Vent">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="absolute left-0 top-0 text-[50px] text-red-800">
            <path d="M248,160a40,40,0,0,1-40,40H190.57a56.22,56.22,0,0,1-50.75-32.32l-30.14-64.6A40.15,40.15,0,0,0,73.43,80H64a40,40,0,0,0-40,40v24a40,40,0,0,0,40,40h8a32,32,0,0,0,29.34-19.2A8,8,0,1,1,116,171.2,48,48,0,0,1,72,200H64A56.06,56.06,0,0,1,8,144V120A56.06,56.06,0,0,1,64,64h9.43a56.22,56.22,0,0,1,50.75,32.32l30.14,64.6A40.15,40.15,0,0,0,190.57,184H208a24,24,0,0,0,0-48H188a36,36,0,0,1,0-72h20a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H188a20,20,0,0,0,0,40h20A40,40,0,0,1,248,160Z"></path>
          </svg>
          <div className="absolute bottom-0 right-5 top-0">
            <div className="side-textt relative z-0 h-full font-extrabold leading-none text-white">
              <span className="absolute h-fit max-h-full truncate text-xl opacity-30">Louise Attaque</span>
              <div className="truncate">J'T'Emmène Au Vent</div>
              <div className="truncate text-xs font-normal">Les plus écoutés ce mois-ci</div>
            </div>
          </div>
          <Image
            alt="J'T'Emmène Au Vent"
            loading="lazy"
            width={200}
            height={200}
            className="absolute -bottom-10 -left-14 -z-10 rounded-full blur-2xl"
            src="https://lastfm.freetls.fastly.net/i/u/770x0/dd330235b9ecf77531534135e44a9108.jpg#dd330235b9ecf77531534135e44a9108"
            style={{ color: "transparent" }}
          />
          <Image
            alt="Fantasma (Versão Gordão do Pc)"
            loading="lazy"
            width={200}
            height={200}
            className="absolute bottom-13 -left-16 animate-spin overflow-hidden rounded-full animate-duration-[120s]"
            src="https://lastfm.freetls.fastly.net/i/u/770x0/dd330235b9ecf77531534135e44a9108.jpg#dd330235b9ecf77531534135e44a9108"
            style={{ color: "transparent" }}
          />
        </a>
      </div>
      
      
      <div className="col-span-3 flex flex-col gap-3">
  <div className="flex gap-3">
    <div className="w-24">
      <a
        href="https://letterboxd.com/voxiofr"
        target="_blank"
        className="relative flex h-full transform-gpu flex-col justify-between rounded-xl bg-[#131618] p-3 duration-500 hover:scale-[.97]"
      >
        <span className="flex justify-end text-lg text-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
          </svg>
        </span>
        <div className="absolute bottom-3 z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent blur-md">
          <span>Letter</span>
          <span>boxed</span>
        </div>
        <div className="absolute bottom-[3.75rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.10]">
          <span>Letter</span>
          <span>boxed</span>
        </div>
        <div className="absolute bottom-[3rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.15]">
          <span>Letter</span>
          <span>boxed</span>
        </div>
        <div className="absolute bottom-[2.25rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.20]">
          <span>Letter</span>
          <span>boxed</span>
        </div>
        <div className="absolute bottom-[1.5rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.25]">
          <span>Letter</span>
          <span>boxed</span>
        </div>
        <div className="z-20 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent">
          <span>Letter</span>
          <span>boxed</span>
        </div>
      </a>
    </div>

    <div className="flex w-full flex-col gap-3">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="www.linkedin.com/in/ilia-choumitzky"
          target="_blank"
          className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[#2867b2] text-white duration-500 hover:scale-[.97]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-2xl">
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
          </svg>
          <p className="-rotate-3 text-[12px] text-white/90">(Profil professionnel)</p>
        </a>

        <a
          href="https://www.instagram.com/photoshopxeno"
          target="_blank"
          className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white duration-500 hover:scale-95 hover:shadow-lg hover:shadow-[#fd1d1d]/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="text-3xl animate-pulse"
          >
            <path d="M128,72a56,56,0,1,0,56,56A56.06,56.06,0,0,0,128,72Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,168Zm48-104a12,12,0,1,1-12-12A12,12,0,0,1,176,64Zm64,20v88a72.08,72.08,0,0,1-72,72H72a72.08,72.08,0,0,1-72-72V84A72.08,72.08,0,0,1,72,12H176a72.08,72.08,0,0,1,72,72ZM224,84a48.05,48.05,0,0,0-48-48H80A48.05,48.05,0,0,0,32,84v88a48.05,48.05,0,0,0,48,48H176a48.05,48.05,0,0,0,48-48Z"></path>
          </svg>
          <p className="text-[12px]  italic"> Voici les créations Photoshop :)</p>
        </a>

        <a
          href="https://www.reddit.com/user/voxiofr/"
          target="_blank"
          className="color-social flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-brand-reddit text-white duration-500 hover:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-2xl">
            <path d="M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24Zm40.13,93.78a8,8,0,0,0-3.29,10A43.58,43.58,0,0,1,224,144c0,16.53-9.59,32.27-27,44.33C178.67,201,154.17,208,128,208s-50.67-7-69-19.67C41.59,176.27,32,160.53,32,144a43.75,43.75,0,0,1,3.14-16.17,8,8,0,0,0-3.27-10A16,16,0,1,1,52.94,94.59a8,8,0,0,0,10.45,2.23l.36-.22C81.45,85.9,104.25,80,128,80h0c23.73,0,46.53,5.9,64.23,16.6l.42.25a8,8,0,0,0,10.39-2.26,16,16,0,1,1,21.07,23.19ZM88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm96-16a16,16,0,1,1-16-16A16,16,0,0,1,184,128Zm-16.93,44.25a8,8,0,0,1-3.32,10.82,76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0A8,8,0,0,1,167.07,172.25Z"></path>
          </svg>
          <p className="text-[12px]">"là où je partage"</p>
        </a>

        <a
        href="https://codepen.io/woze-clan"
        target="_blank"
        className="color-sociall flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg duration-500 hover:scale-95 dark:bg-white dark:text-black bg-black text-white"
            >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-2xl">
          <path d="M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7.05l104,56a8,8,0,0,0,7.58,0l104-56A8,8,0,0,0,240,160V96A8,8,0,0,0,235.79,89ZM224,146.61,189.45,128,224,109.39Zm-51.43-27.7L136,99.22V53.39L215.13,96Zm-44.57,24L100.3,128,128,113.09,155.7,128Zm-8-89.52V99.22L83.43,118.91,40.87,96Zm-88,56L66.55,128,32,146.61Zm51.43,27.7L120,156.78v45.83L40.87,160ZM136,202.61V156.78l36.57-19.69L215.13,160Z"></path>
        </svg>
        <p className="text-[12px] dark:text-black text-white">(Les créations)</p>
            </a>
      </div>
      
    </div>
    
  </div>
  <LogoCarousel/>
</div>

<div className='cols-span-3'>
  
</div>


      <div className="grid grid-cols-5 gap-2">
        <div className='pc'>
        <CardStackDemo/>

        </div>
        <a target="_blank" className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-2xl"></svg>
        </a>
      </div>
    </div>
  );
};

export default WobbleCard;
