"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WORDS = [
  "Développeur Full-Stack",
  "Étudiant en Master",
  "Cherche une Alternance 🔍",
];

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIndex];
    const delay = isDeleting ? 45 : 78;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % WORDS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="profil-hero">
      <div className="profil-hero-left relative">
        {/* Avatar mobile — centré, pleine largeur, opacity 0.1 */}
        <div className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 opacity-50 dark:opacity-30 md:hidden">
          <Image
            src="/Avatar.svg"
            alt="Deconstructed Robot Light"
            loading="lazy"
            width={466}
            height={468}
            className="w-96 object-cover dark:hidden"
            style={{ color: "transparent" }}
          />
          <Image
            src="/Avatar.svg"
            alt="Deconstructed Robot Dark"
            loading="lazy"
            width={466}
            height={468}
            className="hidden w-96 dark:block"
            style={{ color: "transparent" }}
          />
        </div>
        <h1 className="profil-hero-name relative z-10">
          Ilia Choumitzky<span className="profil-hero-comma">,</span>
        </h1>
        <div className="profil-typewriter-wrap relative z-10">
          <span className="profil-typewriter-text">{displayed}</span>
          <span className="profil-cursor" aria-hidden="true" />
        </div>
      </div>

      {/* Avatar desktop — visible à droite */}
      <div className="hidden flex-1 items-center justify-end md:flex">
        <Image
          src="/Avatar.svg"
          alt="Avatar illustré"
          loading="lazy"
          width={466}
          height={468}
          className="w-72 dark:hidden"
          style={{ color: "transparent" }}
        />
        <Image
          src="/Avatar.svg"
          alt="Avatar illustré"
          loading="lazy"
          width={466}
          height={468}
          className="hidden w-72 dark:block"
          style={{ color: "transparent" }}
        />
      </div>
    </section>
  );
}
