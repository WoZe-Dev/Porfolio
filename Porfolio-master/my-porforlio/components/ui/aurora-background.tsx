"use client";
import { cn } from "@/utils/cn";
import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "@/content/ThemeContext";



interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const { theme } = useContext(ThemeContext);

  return (

    <main>
      
      <div
      
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center transition-bg",
          theme === "dark" ? "bg-black text-white" : "bg-white text-black",
          className
        )}
        {...props}
        
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--gray-900)_0%,var(--gray-900)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--gray-900)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-900)_10%,var(--indigo-900)_15%,var(--blue-800)_20%,var(--violet-800)_25%,var(--blue-900)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert-0 dark:invert
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
