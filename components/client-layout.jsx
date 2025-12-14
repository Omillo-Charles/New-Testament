"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./loading-screen";

const ClientLayout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Check if this is the first visit or a refresh
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (hasVisited) {
            // Skip loading screen for subsequent page navigations
            setIsLoading(false);
            setShowContent(true);
        } else {
            // Show loading screen for first visit
            sessionStorage.setItem("hasVisited", "true");
        }
    }, []);

    const handleLoadingComplete = () => {
        setIsTransitioning(true);
        setIsLoading(false);

        // Staggered content reveal for smooth transition
        setTimeout(() => {
            setShowContent(true);
        }, 200);

        // Complete transition
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1200);
    };

    return (
        <>
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

            {/* Smooth transition overlay */}
            <div className={`fixed inset-0 z-[9998] bg-white transition-all duration-1000 ease-in-out pointer-events-none ${isTransitioning ? 'opacity-0' : showContent ? 'opacity-0' : 'opacity-100'
                }`} />

            <div className={`transition-all duration-1200 ease-out ${showContent
                    ? "opacity-100 transform translate-y-0 scale-100 blur-0"
                    : "opacity-0 transform translate-y-4 scale-95 blur-sm"
                }`}>
                {children}
            </div>
        </>
    );
};

export default ClientLayout;