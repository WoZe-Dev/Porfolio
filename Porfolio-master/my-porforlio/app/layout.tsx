import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";
import { ThemeProvider } from "@/content/ThemeContext";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ilia Choumitzky - Portfolio | Étudiant en 4ᵉ année d'ingénierie web - Recherche alternance en développement",
  description: "Étudiant en 4ᵉ année d'ingénierie web, je recherche une alternance en développement web (front-end et back-end). Découvrez mes projets, mes compétences techniques et téléchargez mon CV.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+SK:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </head>
=======
>>>>>>> 007a9c91f2c1cce0a128e471156d33093885cbf7
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
