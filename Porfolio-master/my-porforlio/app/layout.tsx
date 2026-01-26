import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "../styles/globals.css";
import { ThemeProvider } from "@/content/ThemeContext";

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
      <body className={inter.className}>
          <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
