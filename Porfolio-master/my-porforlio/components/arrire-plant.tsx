// components/arrire-plant.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TypeAnimation } from 'react-type-animation';
import WobbleCard from "./WobbleCard";

export function AuroraBackgroundDemo() {
  return (
    
    <AuroraBackground>
      
      <motion.div
        
        className="relative flex flex-col items-center justify-between h-fit w-full px-4"
      >
        <div className="absolute -z-50 h-64 w-64 bg-[conic-gradient(transparent,rgb(0,0,0))] opacity-15 blur-2xl dark:bg-[conic-gradient(transparent,rgb(255,255,255))] md:left-36"></div>
        <div className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-5 md:hidden">
          <img
            alt="Deconstructed Robot Light"
            loading="lazy"
            width="466"
            height="468"
            decoding="async"
            data-nimg="1"
            className="w-96 object-cover dark:hidden"
            src="Avatar.svg"
            style={{ color: "transparent" }}
          />
          <img
            alt="Deconstructed Robot Dark"
            loading="lazy"
            width="466"
            height="468"
            decoding="async"
            data-nimg="1"
            className="hidden w-96 dark:block"
            src="Avatar.svg"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex w-full items-center gap-12 md:justify-between">
          <div className="flex w-full flex-col items-center gap-4 md:w-fit md:items-start">
            <span className="w-min text-7xl font-bold text-black drop-shadow-2xl dark:text-neutral-50 md:w-max">
              Ilia Choumitzky,
            </span>
            <span className="flex w-full items-center justify-center text-center text-2xl text-neutral-400 md:min-h-fit md:justify-start md:text-left md:text-3xl">
              <TypeAnimation
                sequence={[
                  'bonjour', 
                  2000, 
                  'toto', // Deletes 'bonjour'
                  2000, // Waits 1s
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-4xl font-bold text-black dark:text-white"
              />
            </span>
          </div>
          <div className="hidden flex-1 items-center justify-end md:flex">
            <img
              alt="Deconstructed Robot Light"
              loading="lazy"
              width="466"
              height="468"
              decoding="async"
              data-nimg="1"
              className="w-72 dark:hidden"
              src="Avatar.svg"
              style={{ color: "transparent" }}
            />
            <img
              alt="Deconstructed Robot Dark"
              loading="lazy"
              width="466"
              height="468"
              decoding="async"
              data-nimg="1"
              className="hidden w-72 dark:block"
              src="Avatar.svg"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <WobbleCard />
       
      </motion.div>
      
    </AuroraBackground>
    
  );
}
