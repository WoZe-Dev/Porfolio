"use client";

export default function SocialZone() {
  return (
    <div className="profil-social-zone flex flex-col gap-3">
      <div className="wobble-social-row flex gap-3">
        {/* Letterboxd — colonne étroite */}
        <div className="w-24">
          <a
            href="https://letterboxd.com/voxiofr"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-full transform-gpu flex-col justify-between rounded-xl bg-[#131618] p-3 duration-500 hover:scale-[.97]"
          >
            <span className="flex justify-end text-lg text-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
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

        {/* Grille 2×2 */}
        <div className="flex w-full flex-col gap-3">
          <div className="grid grid-cols-2 gap-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ilia-choumitzky/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[#2867b2] text-white duration-500 hover:scale-[.97]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-2xl">
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
              <p className="-rotate-3 text-[12px] text-white/90">(Profil professionnel)</p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/photoshopxeno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white duration-500 hover:scale-95 hover:shadow-lg hover:shadow-[#fd1d1d]/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-3xl animate-pulse">
                <path d="M128,72a56,56,0,1,0,56,56A56.06,56.06,0,0,0,128,72Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,168Zm48-104a12,12,0,1,1-12-12A12,12,0,0,1,176,64Zm64,20v88a72.08,72.08,0,0,1-72,72H72a72.08,72.08,0,0,1-72-72V84A72.08,72.08,0,0,1,72,12H176a72.08,72.08,0,0,1,72,72ZM224,84a48.05,48.05,0,0,0-48-48H80A48.05,48.05,0,0,0,32,84v88a48.05,48.05,0,0,0,48,48H176a48.05,48.05,0,0,0,48-48Z"></path>
              </svg>
              <p className="text-[12px] italic">Voici les créations Photoshop :)</p>
            </a>

            {/* Reddit */}
            <a
              href="https://www.reddit.com/user/voxiofr/"
              target="_blank"
              rel="noopener noreferrer"
              className="color-social flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-brand-reddit text-white duration-500 hover:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-2xl">
                <path d="M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24Zm40.13,93.78a8,8,0,0,0-3.29,10A43.58,43.58,0,0,1,224,144c0,16.53-9.59,32.27-27,44.33C178.67,201,154.17,208,128,208s-50.67-7-69-19.67C41.59,176.27,32,160.53,32,144a43.75,43.75,0,0,1,3.14-16.17,8,8,0,0,0-3.27-10A16,16,0,1,1,52.94,94.59a8,8,0,0,0,10.45,2.23l.36-.22C81.45,85.9,104.25,80,128,80h0c23.73,0,46.53,5.9,64.23,16.6l.42.25a8,8,0,0,0,10.39-2.26,16,16,0,1,1,21.07,23.19ZM88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm96-16a16,16,0,1,1-16-16A16,16,0,0,1,184,128Zm-16.93,44.25a8,8,0,0,1-3.32,10.82,76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0A8,8,0,0,1,167.07,172.25Z"></path>
              </svg>
              <p className="text-[12px]">&quot;là où je partage&quot;</p>
            </a>

            {/* CodePen */}
            <a
              href="https://codepen.io/woze-clan"
              target="_blank"
              rel="noopener noreferrer"
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
    </div>
  );
}
