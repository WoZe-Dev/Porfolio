"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[13rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [



  
  {
    id: 2,
    content: (
      <p className="text-smm text-neutral-700 dark:text-neutral-200">
           Cérez une application SaaS prête pour la production en <Highlight>TypeScript</Highlight>{" "}
        <br />
        <br />
        Apprenez à créer une application SaaS évolutive et prête pour la production avec <Highlight>Encore.ts </Highlight>et <Highlight>Next.js</Highlight> Ce modèle intègre Clerk pour l'authentification, Stripe pour les paiements et utilise Tailwind et shadcn/ui pour le style.
        <a
          href="https://dev.to/encore/build-a-production-ready-saas-application-44nb?ref=dailydev"
          className="mt-4 inline-block text-emerald-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lire l'article
        </a>
      </p>
       
    ),
  },

  {
    id: 1,
    name: "Ilia Choumitzky",
    designation: "Développeur Full-Stack",
    content: (
      <p className="text-smm text-neutral-700 dark:text-neutral-200">
         ⚠️ Recherche une <Highlight>Alternance</Highlight> pour mon <Highlight>Master</Highlight> ⚠️ {" "}
        <br />
        <br />
        Je suis actuellement en Bachelor d'ingénierie du web en alternance chez Tricycle Environnement et je cherche une entreprise pour continuer mes études en Master à l'ESGI à partir de septembre 2025.
 

      </p>
       
    ),

 },



  {
    id: 3,
    content: (
      <p className="text-smm text-neutral-700 dark:text-neutral-200">
           Un premier aperçu des nouvelles fonctionnalités et modifications de <Highlight> PHP 9.0</Highlight> {" "}
        <br />
        <br />
        PHP 9.0 introduit plusieurs modifications, notamment un meilleur comportement d'incrémentation/décrémentation, une meilleure gestion des erreurs de désérialisation, des signatures de fonctions simplifiées, des règles de création de tableaux plus strictes 
        <br />
        <a
          href="https://benjamincrozat.com/php-90?ref=dailydev"
          className="mt-4 inline-block text-emerald-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lire l'article
        </a>
      </p>
      
       
    ),
  },

];
