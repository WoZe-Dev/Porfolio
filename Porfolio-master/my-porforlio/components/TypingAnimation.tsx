"use client";
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, className, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let frameId: ReturnType<typeof setTimeout>;

    const updateText = () => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text.charAt(index));
        index++;
        frameId = setTimeout(updateText, speed);
      } else {
        clearTimeout(frameId);
      }
    };

    setDisplayedText(''); // Reset displayed text when text prop changes
    frameId = setTimeout(updateText, speed);

    return () => clearTimeout(frameId);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default TypingAnimation;
