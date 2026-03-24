"use client";

import Image from "next/image";

export default function LastFMCard() {
  return (
    <a
      target="_blank"
      className="relative flex h-36 transform-gpu items-center justify-center overflow-hidden rounded-lg bg-[#000] text-white duration-500 hover:scale-95 profil-lfm-card"
      href="https://www.last.fm/music/Louise+Attaque/Louise+Attaque/J%27T%27Emm%C3%A8ne+Au+Vent"
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="absolute left-0 top-0 text-[50px] text-red-800">
        <path d="M248,160a40,40,0,0,1-40,40H190.57a56.22,56.22,0,0,1-50.75-32.32l-30.14-64.6A40.15,40.15,0,0,0,73.43,80H64a40,40,0,0,0-40,40v24a40,40,0,0,0,40,40h8a32,32,0,0,0,29.34-19.2A8,8,0,1,1,116,171.2,48,48,0,0,1,72,200H64A56.06,56.06,0,0,1,8,144V120A56.06,56.06,0,0,1,64,64h9.43a56.22,56.22,0,0,1,50.75,32.32l30.14,64.6A40.15,40.15,0,0,0,190.57,184H208a24,24,0,0,0,0-48H188a36,36,0,0,1,0-72h20a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H188a20,20,0,0,0,0,40h20A40,40,0,0,1,248,160Z"></path>
      </svg>
      <div className="absolute bottom-0 right-5 top-0">
        <div className="side-textt relative z-0 h-full font-extrabold leading-none text-white">
          <span className="absolute h-fit max-h-full truncate text-xl opacity-30">Louise Attaque</span>
          <div className="truncate">J&apos;T&apos;Emmène Au Vent</div>
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
  );
}
