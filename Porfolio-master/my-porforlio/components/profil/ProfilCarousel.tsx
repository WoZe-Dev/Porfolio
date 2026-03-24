"use client";

import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";

const LOGOS_LINE1 = [
  { src: "/next-js.256x256.png", alt: "Next.js" },
  { src: "/tailwind-css.svg", alt: "Tailwind" },
  { src: "/typescript-icon.svg", alt: "TypeScript" },
  { src: "/react.svg", alt: "React" },
  { src: "/javascript-js.svg", alt: "JavaScript" },
  { src: "/node-js.svg", alt: "Node.js" },
  { src: "/figma.svg", alt: "Figma" },
  { src: "/file-type-css.svg", alt: "CSS" },
  { src: "/file-type-html.svg", alt: "HTML" },
];

const LOGOS_LINE2 = [
  { src: "/linux.svg", alt: "Linux" },
  { src: "/photoshop.svg", alt: "Photoshop" },
  { src: "/php.svg", alt: "PHP" },
  { src: "/python.svg", alt: "Python" },
  { src: "/sql.svg", alt: "SQL" },
  { src: "/wordpress.svg", alt: "WordPress" },
  { src: "/laravel.svg", alt: "Laravel" },
  { src: "/gitt.svg", alt: "Git" },
  { src: "/github.svg", alt: "GitHub" },
];

export default function ProfilCarousel() {
  const [isDark, setIsDark] = useState(false);
  const [paused1, setPaused1] = useState(false);
  const [paused2, setPaused2] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return (
    <Wrapper>
      {/* Ligne 1 → */}
      <Row
        onMouseEnter={() => setPaused1(true)}
        onMouseLeave={() => setPaused1(false)}
      >
        <Track $paused={paused1}>
          {[...LOGOS_LINE1, ...LOGOS_LINE1].map((logo, i) => (
            <LogoBox key={i}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={26}
                height={26}
                style={{
                  objectFit: "contain",
                  filter:
                    isDark && (logo.alt === "Next.js" || logo.alt === "GitHub")
                      ? "invert(1) brightness(1.8)"
                      : "none",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.setAttribute(
                    "data-fallback",
                    logo.alt.slice(0, 2).toUpperCase()
                  );
                }}
              />
            </LogoBox>
          ))}
        </Track>
      </Row>

      {/* Ligne 2 ← */}
      <Row
        onMouseEnter={() => setPaused2(true)}
        onMouseLeave={() => setPaused2(false)}
      >
        <Track $paused={paused2} $reverse>
          {[...LOGOS_LINE2, ...LOGOS_LINE2].map((logo, i) => (
            <LogoBox key={i}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={26}
                height={26}
                style={{ objectFit: "contain" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </LogoBox>
          ))}
        </Track>
      </Row>
    </Wrapper>
  );
}

/* ── Styled Components ── */

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 4px 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, var(--profil-carousel-fade, white), transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, var(--profil-carousel-fade, white), transparent);
  }

  html.dark & {
    --profil-carousel-fade: #0a0a0a;
  }
`;

const Row = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 8px;
  width: 100%;
`;

const scrollX = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const Track = styled.div<{ $paused: boolean; $reverse?: boolean }>`
  display: flex;
  gap: 12px;
  width: max-content;
  animation: ${scrollX} 22s linear infinite;
  animation-direction: ${({ $reverse }) => ($reverse ? "reverse" : "normal")};
  animation-play-state: ${({ $paused }) => ($paused ? "paused" : "running")};
`;

const LogoBox = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
