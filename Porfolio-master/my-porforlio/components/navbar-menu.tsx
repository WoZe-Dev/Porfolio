"use client";
import React, { useState, useContext } from "react";
import { MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from 'lucide-react';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState<string | null>(null);

  const logoSrc = theme === "dark" ? "voxio.svg" : "img-ilia.svg";

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <nav
        className={cn(
          "centrer relative rounded-full shadow-input flex justify-center space-x-4 px-8 py-6",
          theme === "dark" ? "border-white" : "border-black"
        )}
      >
        <a href="/" className="navbar-container">
          <img src={logoSrc} alt="Brandify Logo" className="h-8" />
        </a>
        <ul className="flex space-x-4">
          <MenuItem setActive={setActive} active={active} item="Home" href="/" />
          <MenuItem setActive={setActive} active={active} item="School" href="/school" />
          <MenuItem setActive={setActive} active={active} item="Projects" href="/projects" />
          <MenuItem setActive={setActive} active={active} item="Blog" href="/blog" />
          <MenuItem setActive={setActive} active={active} item="About" href="/about" />
          <MenuItem setActive={setActive} active={active} item="Experience" href="/experience" />
        </ul>
        <div className="flex gap-2 ml-auto">
          {/* Bouton pour changer le thème */}
          <button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "inline-flex items-center button-voxio justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-sm h-9 w-9 px-2",
              theme === "dark" ? "bg-black text-white border-white" : "bg-white text-black border-black"
            )}
            type="button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
