"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        scale: 0,
        duration: 0.3,
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.1,
      });
    };

    // Interactive element hover effects
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"]'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
            scale: 1.5,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
          gsap.to(follower, {
            scale: 0.8,
            duration: 0.3,
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
            scale: 1,
            duration: 0.3,
          });
          gsap.to(follower, {
            scale: 1,
            duration: 0.3,
          });
        });
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Add hover effects after a short delay to ensure elements are rendered
    setTimeout(addHoverEffects, 1000);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-teal-400/50 rounded-full pointer-events-none z-50 opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
