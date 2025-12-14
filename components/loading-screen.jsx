"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LoadingScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    const fullText = "Welcome to NTCOGK";

    useEffect(() => {
        let currentIndex = 0;
        let typingTimer;
        let erasingTimer;

        // Cursor blinking effect
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        // Typing effect
        const typeText = () => {
            if (currentIndex < fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
                typingTimer = setTimeout(typeText, 150); // 150ms per character
            } else {
                // Wait 1 second after typing completes, then start erasing
                setTimeout(() => {
                    setIsTyping(false);
                    eraseText();
                }, 1000);
            }
        };

        // Erasing effect
        const eraseText = () => {
            if (currentIndex > 0) {
                currentIndex--;
                setDisplayText(fullText.slice(0, currentIndex));
                erasingTimer = setTimeout(eraseText, 100); // 100ms per character (faster erasing)
            } else {
                // When erasing is complete, start smooth exit transition
                setTimeout(() => {
                    setIsExiting(true);
                    // Complete after transition duration
                    setTimeout(() => {
                        setIsVisible(false);
                        onComplete();
                    }, 1000); // Match transition duration
                }, 300);
            }
        };

        // Start typing after a brief delay
        const startTimer = setTimeout(typeText, 1000);

        return () => {
            clearTimeout(typingTimer);
            clearTimeout(erasingTimer);
            clearTimeout(startTimer);
            clearInterval(cursorInterval);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isExiting
                ? 'opacity-0 scale-95 blur-sm'
                : 'opacity-100 scale-100 blur-0'
            }`}>

            {/* Main Content */}
            <div className={`relative z-10 text-center transition-all duration-800 ease-out ${isExiting
                    ? 'transform translate-y-8 opacity-0'
                    : 'transform translate-y-0 opacity-100'
                }`}>
                {/* Logo - Static */}
                <div className="mb-6">
                    <div className={`relative w-20 h-20 mx-auto mb-4 transition-all duration-700 ease-out ${isExiting ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
                        }`}>
                        <div className="relative w-full h-full bg-white rounded-full p-3 shadow-2xl">
                            <Image
                                src="/icons/favicon.ico"
                                alt="NTCOGK Logo"
                                width={56}
                                height={56}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Typewriter Text */}
                <div className="space-y-4">
                    <h1 className={`text-xl md:text-2xl font-bold text-gray-800 tracking-wider min-h-[40px] flex items-center justify-center transition-all duration-600 ease-out ${isExiting ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                        }`}>
                        {displayText}
                        <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                            |
                        </span>
                    </h1>
                </div>
            </div>

            {/* Smooth overlay for transition */}
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white transition-opacity duration-1000 ease-in-out ${isExiting ? 'opacity-100' : 'opacity-0'
                }`}></div>
        </div>
    );
};

export default LoadingScreen;