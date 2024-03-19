"use client";
import { useEffect, useState } from "react";

const WelcomeScreen = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-orange transition-opacity duration-500 ${
        showWelcome ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative animate-pulse">
        <span className="text-4xl text-white font-extrabold">Ginger</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
