import { NavbarDemo } from "@/components/navbar-menu";
import HeroSection from "@/components/profil/HeroSection";
import GitHubCard from "@/components/profil/GitHubCard";
import StatsCard from "@/components/profil/StatsCard";
import LastFMCard from "@/components/profil/LastFMCard";
import SocialZone from "@/components/profil/SocialZone";
import CardStackSection from "@/components/profil/CardStackSection";
import WorkCard from "@/components/profil/WorkCard";
import ProfilCarousel from "@/components/profil/ProfilCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil — Ilia Choumitzky",
  description:
    "Développeur Full-Stack, étudiant en 4ᵉ année d'ingénierie web, cherche alternance Master.",
};

export default function ProfilPage() {
  return (
    <>
      <NavbarDemo />

      <main className="profil-main">
        {/* ── HERO ── */}
        <HeroSection />

        {/* ── GRILLE PRINCIPALE : 2 colonnes ── */}
        <div className="profil-layout">

          {/* ── COLONNE GAUCHE ── */}
          <div className="profil-left-col">
            {/* 1. GitHub Card */}
            <GitHubCard />

            {/* 2. Letterboxd + social 2×2 */}
            <SocialZone />

            {/* 3. Carousel logos */}
            <div className="profil-carousel-wrap">
              <ProfilCarousel />
            </div>
          </div>

          {/* ── COLONNE DROITE ── */}
          <div className="profil-right-col">
            {/* 1. Stats + LastFM côte à côte */}
            <div className="profil-right-top">
              <StatsCard />
              <LastFMCard />
            </div>

            {/* 2. CardStack rotatif */}
            <CardStackSection />
          </div>

        </div>

        {/* ── ABOUT + WORK CARD ── */}
        <div className="profil-about-section">
          {/* Texte bio */}
          <div className="profil-about-left">
            <p className="profil-about-label">Développeur Full-Stack</p>
            <p className="profil-about-welcome">
             👋 Hey,  bienvenue dans mon petit coin du web !
            </p>
            <p className="profil-about-text">
              Je suis développeur autodidacte spécialisé dans les solutions logicielles.
              Passionné de programmation, je m&apos;efforce d&apos;utiliser une architecture
              logicielle optimale et un code propre et maintenable. J&apos;apprécie
              particulièrement travailler avec les technologies des écosystèmes suivants :{" "}
              <span className="profil-highlight-js">JavaScript</span> ,{" "}
              <span className="profil-highlight-ts">TypeScript</span> , et d&apos;autres langages.
            </p>
            <p className="profil-about-text">
              Voir plus{" "}
              <a href="/experience" className="profil-about-link">
                à propos de moi
              </a>{" "}
              ou consultez{" "}
              <a href="/projects" className="profil-about-link">
                mes projets
              </a>
              .
            </p>
            <p className="profil-about-text">
              Vous pouvez également apprendre quelque chose de nouveau sur mon{" "}
              <a href="/blog" className="profil-about-link">
                blog
              </a>
            </p>
            <p className="profil-about-text">
              J&apos;aimerais beaucoup découvrir vos idées et collaborer dès que l&apos;occasion
              se présente.
            </p>
          </div>

          {/* Work card */}
          <WorkCard />
        </div>
      </main>
    </>
  );
}
