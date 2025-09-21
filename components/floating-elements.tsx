"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating geometric shapes
    const shapes = [
      { type: "circle", color: "bg-teal-400/20", size: "w-8 h-8" },
      { type: "square", color: "bg-cyan-400/20", size: "w-6 h-6" },
      { type: "triangle", color: "bg-green-400/20", size: "w-10 h-10" },
      { type: "diamond", color: "bg-emerald-400/20", size: "w-7 h-7" },
    ];

    const createShape = () => {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const element = document.createElement("div");

      element.className = `absolute ${shape.color} ${shape.size} opacity-80 pointer-events-none`;

      if (shape.type === "circle") {
        element.classList.add("rounded-full");
      } else if (shape.type === "triangle") {
        element.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
      } else if (shape.type === "diamond") {
        element.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
        element.classList.add("rotate-45");
      }

      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight + 50;

      element.style.left = `${startX}px`;
      element.style.top = `${startY}px`;

      container.appendChild(element);

      // Animate upward with random movement
      gsap.to(element, {
        y: -window.innerHeight - 100,
        x: `+=${(Math.random() - 0.5) * 200}`,
        rotation: Math.random() * 360,
        duration: 8 + Math.random() * 4,
        ease: "none",
        onComplete: () => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        },
      });

      // Fade in and out
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0 },
        {
          opacity: 0.8,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        }
      );

      gsap.to(element, {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 6,
        ease: "power2.in",
      });
    };

    // Create shapes periodically
    const interval = setInterval(createShape, 2000);

    // Create initial shapes
    for (let i = 0; i < 3; i++) {
      setTimeout(createShape, i * 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    />
  );
}
