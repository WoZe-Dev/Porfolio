"use client";
import React, { useState, useEffect } from 'react'
import styled, { keyframes, css, createGlobalStyle } from 'styled-components'

/**
 * Tableau pour la première ligne (défilement normal)
 */
const logosLine1 = [
  '/next-js.256x256.png',
  '/tailwind-css.svg',
  '/typescript-icon.svg',
  '/react.svg',
  '/javascript-js.svg',
  '/node-js.svg',
  '/figma.svg',
  '/file-type-css.svg',
  '/file-type-html.svg',
  // ...
]

/**
 * Tableau pour la deuxième ligne (défilement inversé)
 */
const logosLine2 = [
  '/linux.svg',
  '/photoshop.svg',
  '/php.svg',
  '/python.svg',
  '/sql.svg',
  '/wordpress.svg',
  '/laravel.svg',
  '/gitt.svg',
  '/github.svg',
  // ...
]


const GlobalStyles = createGlobalStyle`
  .dark img[src*="next-js"] {
    filter: invert(1) brightness(1.8);
    transition: filter .3s ease;
  }

  .dark img[src*="wordpress"] {
    filter: invert(1) brightness(1.8);
    transition: filter .3s ease;
  }

  .dark img[src*="github"] {
    filter: invert(1) brightness(1.8);
    transition: filter .3s ease;
  }
    
`;

const LogoCarousel: React.FC = () => {
  const [pausedGroup1, setPausedGroup1] = useState(false)
  const [pausedGroup2, setPausedGroup2] = useState(false)

  // Contrôle l'affichage effectif du carrousel
  const [showMarquee, setShowMarquee] = useState(true)

  // State pour le thème
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // Add a useEffect to detect system theme or parent theme changes
  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(prefersDark);
    
    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <CarouselContainer>
      <GlobalStyles />
      <Wrapper>
        {showMarquee && (
          <>
            {/*
              Première ligne : utilise logosLine1 (défilement normal)
            */}
            <Marquee>
              <MarqueeGroup
                isPaused={pausedGroup1}
                onMouseEnter={() => setPausedGroup1(true)}
                onMouseLeave={() => setPausedGroup1(false)}
              >
                {logosLine1.map((logo, index) => (
                  <ImageGroup key={index}>
                    <Image 
                      src={logo} 
                      alt={`Logo ${index + 1}`}
                      isDarkTheme={isDarkTheme} // Pass theme state from parent
                    />
                  </ImageGroup>
                ))}
              </MarqueeGroup>

              <MarqueeGroup
                isPaused={pausedGroup1}
                onMouseEnter={() => setPausedGroup1(true)}
                onMouseLeave={() => setPausedGroup1(false)}
              >
                {logosLine1.map((logo, index) => (
                  <ImageGroup key={`duplicate-${index}`}>
                    <Image 
                      src={logo} 
                      alt={`Logo ${index + 1} (Duplicate)`}
                      isDarkTheme={isDarkTheme} // Pass theme state from parent
                    />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>

            {/*
              Deuxième ligne : utilise logosLine2 (défilement inversé)
            */}
            <Marquee>
              <MarqueeGroup2
                isPaused={pausedGroup2}
                onMouseEnter={() => setPausedGroup2(true)}
                onMouseLeave={() => setPausedGroup2(false)}
              >
                {logosLine2.map((logo, index) => (
                  <ImageGroup key={index}>
                    <Image 
                      src={logo} 
                      alt={`Logo ${index + 1}`}
                      isDarkTheme={isDarkTheme} // Pass theme state from parent
                    />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>

              <MarqueeGroup2
                isPaused={pausedGroup2}
                onMouseEnter={() => setPausedGroup2(true)}
                onMouseLeave={() => setPausedGroup2(false)}
              >
                {logosLine2.map((logo, index) => (
                  <ImageGroup key={`duplicate-${index}`}>
                    <Image 
                      src={logo} 
                      alt={`Logo ${index + 1} (Duplicate)`}
                      isDarkTheme={isDarkTheme} // Pass theme state from parent
                    />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </>
        )}
      </Wrapper>
    </CarouselContainer>
  )
}

export default LogoCarousel

// --------- STYLES ---------

const CarouselContainer = styled.div`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 415%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0) 0%,
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0) 100%
  );
`

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 57rem;
`

const Marquee = styled.div`
  display: flex;
  width: 718px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`

// Keyframes pour le défilement horizontal
const scrollX = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`

// Styles communs pour l'animation
const common = css<{ isPaused: boolean }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 62%;
  animation: ${scrollX} 30s linear infinite;
  animation-play-state: ${({ isPaused }) => (isPaused ? 'paused' : 'running')};
`

const MarqueeGroup = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isPaused',
})<{ isPaused: boolean }>`
  ${common}
`

const MarqueeGroup2 = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isPaused',
})<{ isPaused: boolean }>`
  ${common}
  animation-direction: reverse;
  animation-delay: 1s;
`

const ImageGroup = styled.div`
  display: grid;
  width: clamp(2rem, 3rem + 1vmin, 4rem);
`

const Image = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDarkTheme',
})<{ isDarkTheme?: boolean }>`
  object-fit: contain;
  width: 70%;
  height: 100%;
  border-radius: 0.5rem;
  
  /* Only invert Next.js logo when in dark theme */
  ${props => props.isDarkTheme && `
    &[src*="next-js"] {
      filter: invert(1);
    }
  `}
`

// --------- WORKBENCH COLOR CUSTOMIZATIONS ---------

const workbenchColorCustomizations = {
  "workbench.colorCustomizations": {
    "editor.background": "#000000",
    "editor.foreground": "#FFFFFF"
  }
}
