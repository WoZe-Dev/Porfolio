"use client";

import Image from "next/image";

export default function GitHubCard() {
  return (
    <div className="profil-gh-card">
      <a
        className="groupe relatif flex h-full w-full transform-gpu flex-col justify-between gap-5 overflow-hidden rounded-xl text-white transition-all duration-500 will-change-[border,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100"
        href="https://github.com/WoZe-Dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span aria-hidden="true" className="pointer-events-none absolute inset-1 -z-20">
          <Image
            alt="Fond de la carte GitHub — technologies web"
            loading="lazy"
            width={564}
            height={642}
            className="absolute inset-1 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
            src="/home.png"
            style={{ color: "transparent" }}
          />
          <span aria-hidden="true" className="absolute inset-1 bg-gradient-to-t to-neutral-900/20"></span>
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
  );
}
