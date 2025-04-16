// hooks/useTypingTitle.js
import { useEffect, useState } from 'react';

const useTypingTitle = ({
  titles = [],
  typingSpeed = 150,
  deletingSpeed = 80,
  delayBetween = 1500,
  inactiveTitle = "👀 Come back! Gideon's got cool stuff!",
}) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPageActive, setIsPageActive] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageActive(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!titles.length || !isPageActive) {
      document.title = inactiveTitle;
      return;
    }

    const fullText = titles[currentTitleIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    if (isPageActive) {
      document.title = displayedText || "Gideon Prime";
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, titles, isPageActive]);
};

export default useTypingTitle;