"use client";

import React, { useState, useContext } from "react";
import { MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ThemeContext } from "../content/ThemeContext";
import { Sun, Moon, Menu, X, Home, BookOpen, FolderGit2, Users, Briefcase, ScrollText, ExternalLink } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoSrc = theme === "dark" ? "/voxio.svg" : "/img-ilia.svg";

  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "School", href: "/school", icon: BookOpen },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Blog", href: "/blog", icon: ScrollText },
    { name: "About", href: "/about", icon: Users },
    { name: "Experience", href: "/experience", icon: Briefcase },
  ];

  return (
    <>
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <nav
          className={cn(
            "centrer relative rounded-full shadow-input flex justify-between items-center space-x-4 px-8 py-6",
            theme === "dark" ? "border-white" : "border-black"
          )}
        >
          <a href="/" className="flex items-center">
            <img src={logoSrc} alt="Brandify Logo" className="h-8" />
          </a>
          
          <ul className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <MenuItem key={item.name} setActive={setActive} active={active} item={item.name} href={item.href} />
            ))}
          </ul>

          <div className="flex gap-2 items-center">
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

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center button-voxio justify-center rounded-md text-sm font-medium h-9 w-9 px-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay with Blur Effect */}
      <div
        className={cn(
          "fixed inset-0 backdrop-blur-md bg-white/30 dark:bg-black/30 z-40 md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-xl",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="flex-1 px-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg backdrop-blur-sm"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;