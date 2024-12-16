"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["Epoxy", "Modern", "Solutions"];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 33.33); // ~30fps

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const animateWord = () => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    };

    // Start the cycle immediately
    const wordTimer = setInterval(animateWord, 300); // Reduced from 3000 to 1000ms

    return () => clearInterval(wordTimer);
  }, [words.length]); // Keep empty dependency array

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="relative">
        <div className="text-white text-9xl mb-32 tracking-wider">
          {words[currentWordIndex]}
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-[120%] h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
        </div>
      </div>

      <div className="text-white text-4xl font-bold mb-12 tracking-widest">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Palushaj Epoxy Flooring
        </span>
      </div>

      <div className="relative w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
