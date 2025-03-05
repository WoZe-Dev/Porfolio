import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const logos = [
  'css.svg',
  'pythonn.svg',
  'html.svg',
  'html.svg',
  'html.svg',
  'html.svg',
  'html.svg',
  'pythonn.svg',
  'pythonn.svg',
  'pythonn.svg',
  'pythonn.svg',
  
  // Ajoutez ici les chemins de vos logos
];

const LogoCarousel: React.FC = () => {
  const [pausedGroup1, setPausedGroup1] = useState(false);
  const [pausedGroup2, setPausedGroup2] = useState(false);

  return (
    <CarouselContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup
            isPaused={pausedGroup1}
            onMouseEnter={() => setPausedGroup1(true)}
            onMouseLeave={() => setPausedGroup1(false)}
          >
            {logos.map((logo, index) => (
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
            {logos.map((logo, index) => (
              <ImageGroup key={`duplicate-${index}`}>
                <Image src={logo} alt={`Logo ${index + 1} (Duplicate)`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2
            isPaused={pausedGroup2}
            onMouseEnter={() => setPausedGroup2(true)}
            onMouseLeave={() => setPausedGroup2(false)}
          >
            {logos.map((logo, index) => (
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
            {logos.map((logo, index) => (
              <ImageGroup key={`duplicate-${index}`}>
                <Image src={logo} alt={`Logo ${index + 1} (Duplicate)`} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </CarouselContainer>
  );
};

export default LogoCarousel;

const CarouselContainer = styled.div`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -150px !important;
  width: 200%;
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
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 57rem;
`;

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
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css<{ isPaused: boolean }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 62%;
  animation: ${scrollX} 30s linear infinite;
  animation-play-state: ${({ isPaused }) => (isPaused ? 'paused' : 'running')};
`;

const MarqueeGroup = styled.div<{ isPaused: boolean }>`
  ${common}
`;

const MarqueeGroup2 = styled.div<{ isPaused: boolean }>`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  width: clamp(2rem, 3rem + 1vmin, 1rem);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;
