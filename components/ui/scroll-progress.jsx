"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ScrollProgress = ({
  className,
  height = "h-1",
  backgroundColor = "bg-muted",
  progressColor = "bg-primary",
  position = "top",
  ...props
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const positionClasses = {
    top: "top-0",
    bottom: "bottom-0",
  };

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-[90] h-1 bg-transparent top-16",
        className
      )}
      {...props}
    >
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: '#1E4E9A'
        }}
      />
    </div>
  );
};

export { ScrollProgress };