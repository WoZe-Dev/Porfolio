import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'

/**
 * Tableau pour la première ligne (défilement normal)
 */
const logosLine1 = [
  'next-js.256x256.png',
  'tailwind-css.svg',
  'typescript-icon.svg',
  'react.svg',
  'javascript-js.svg',
  'node-js.svg',
  'figma.svg',
  'file-type-css.svg',
  'file-type-html.svg',
  // ...
]

/**
 * Tableau pour la deuxième ligne (défilement inversé)
 */
const logosLine2 = [
  'linux.svg',
  'photoshop.svg',
  'php.svg',
  'python.svg',
  'sql.svg',
  'wordpress.svg',
  'laravel.svg',
  'gitt.svg',
  'github.svg',
  // ...
]

const LogoCarousel: React.FC = () => {
  const [pausedGroup1, setPausedGroup1] = useState(false)
  const [pausedGroup2, setPausedGroup2] = useState(false)

  // Contrôle l'affichage effectif du carrousel
  const [showMarquee, setShowMarquee] = useState(false)

  useEffect(() => {
    // Fonction déclenchée lorsque la page est totalement chargée
    const handlePageLoad = () => {
      // On attend 3 secondes avant d'activer l'affichage (ici seulement 10ms pour la démo)
      setTimeout(() => {
        setShowMarquee(true)
      }, 10)
    }

    // Vérifie si la page est déjà chargée (cas d’un rafraîchissement rapide)
    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      // Sinon, on écoute l'événement load
      window.addEventListener('load', handlePageLoad)
    }

    // Nettoyage si le composant se démonte avant le load (très rare)
    return () => {
      window.removeEventListener('load', handlePageLoad)
    }
  }, [])

  return (
    <CarouselContainer>
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
                    <Image src={logo} alt={`Logo ${index + 1}`} />
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
                    <Image src={logo} alt={`Logo ${index + 1} (Duplicate)`} />
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
                    <Image src={logo} alt={`Logo ${index + 1}`} />
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
                    <Image src={logo} alt={`Logo ${index + 1} (Duplicate)`} />
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

const Image = styled.img`
  object-fit: contain;
  width: 70%;
  height: 100%;
  border-radius: 0.5rem;
`
