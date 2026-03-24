"use client";

import { CardStack } from "@/components/ui/card-stack";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">
    {children}
  </span>
);

const CARDS = [
  {
    id: 1,
    name: "Ilia Choumitzky",
    designation: "Développeur Full-Stack",
    content: (
      <p className="text-sm text-neutral-700 dark:text-neutral-200">
        ⚠️ Recherche une <Highlight>Alternance</Highlight> pour ma{" "}
        5ème année en <Highlight>MASTER</Highlight> ⚠️
        <br />
        <br />
        Étudiant en 4ᵉ année d&apos;ingénierie du web en alternance chez Tricycle Environnement,
        je recherche une entreprise pour achever ma dernière année en Master,
        en vue d&apos;une continuité au sein de l&apos;entreprise.
      </p>
    ),
  },
  {
    id: 2,
    name: "Encore.ts + Next.js",
    designation: "Article SaaS",
    content: (
      <p className="text-sm text-neutral-700 dark:text-neutral-200">
        Créez une application SaaS prête pour la production en{" "}
        <Highlight>TypeScript</Highlight>
        <br />
        <br />
        Apprenez à créer une application SaaS évolutive avec{" "}
        <Highlight>Encore.ts</Highlight> et <Highlight>Next.js</Highlight>.
        Ce modèle intègre Clerk pour l&apos;authentification, Stripe pour les paiements,
        Tailwind et shadcn/ui pour le style.{" "}
        <a href="https://dev.to/encore/build-a-production-ready-saas-application-44nb?ref=dailydev"
           className="mt-4 inline-block text-emerald-600 hover:underline"
           target="_blank" rel="noopener noreferrer">
          Lire l&apos;article
        </a>
      </p>
    ),
  },
  {
    id: 3,
    name: "Nouveautés PHP 9.0",
    designation: "Article technique",
    content: (
      <p className="text-sm text-neutral-700 dark:text-neutral-200">
        Un premier aperçu des nouvelles fonctionnalités de{" "}
        <Highlight>PHP 9.0</Highlight>
        <br />
        <br />
        PHP 9.0 introduit plusieurs améliorations : meilleur comportement
        d&apos;incrémentation/décrémentation, gestion des erreurs de désérialisation,
        signatures de fonctions simplifiées, règles de création de tableaux plus strictes…{" "}
        <a href="https://benjamincrozat.com/php-90?ref=dailydev"
           className="mt-4 inline-block text-emerald-600 hover:underline"
           target="_blank" rel="noopener noreferrer">
          Lire l&apos;article
        </a>
      </p>
    ),
  },
];

export default function CardStackSection() {
  return (
    <div className="profil-cardstack-wrap">
      <CardStack items={CARDS} offset={10} scaleFactor={0.06} />
    </div>
  );
}
