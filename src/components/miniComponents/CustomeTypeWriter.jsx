import { useState, useEffect } from 'react';

const CustomTypewriter = ({
  words = [],
  speed = 100,
  pause = 1000,
  delayBeforeStart = 1000,
  loop = true,
  cursor = true,
  cursorBlinkSpeed = 500,
  cursorChar = '|',
  cursorClassName = 'text-blue-500 dark:text-blue-300',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isStarting, setIsStarting] = useState(true);

  // Initial delay before typing starts
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setIsStarting(false);
    }, delayBeforeStart);
    return () => clearTimeout(startDelay);
  }, [delayBeforeStart]);

  // Cursor blinking
  useEffect(() => {
    if (!cursor) return;
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(blink);
  }, [cursor, cursorBlinkSpeed]);

  // Typing logic
  useEffect(() => {
    if (isStarting) return;

    const word = words[currentWordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(word.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(word.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    }

    if (!isDeleting && charIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isStarting]);

  return (
    <span className="text-inherit font-bold">
      {displayedText}
      {cursor && (
        <span
          className={`${cursorClassName} transition-opacity duration-200 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default CustomTypewriter;