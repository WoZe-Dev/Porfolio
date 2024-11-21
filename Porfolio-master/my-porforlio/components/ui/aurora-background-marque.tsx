"use client";
import { cn } from "@/utils/cn";
import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";



interface AuroraBackgroundmarqueProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackgroundmarque = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundmarqueProps) => {
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
            className="dark"
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
