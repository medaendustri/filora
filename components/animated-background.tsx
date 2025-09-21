"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

// Floating particles component
function FloatingParticle({
  position,
  scale,
  color,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.1, 0.1]}
    >
      <Sphere position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Main scene component
function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Floating particles with brand colors */}
      <FloatingParticle position={[-4, 2, -5]} scale={0.8} color="#14b8a6" />
      <FloatingParticle position={[4, -2, -3]} scale={0.6} color="#0891b2" />
      <FloatingParticle position={[-2, -3, -4]} scale={0.4} color="#22c55e" />
      <FloatingParticle position={[3, 3, -6]} scale={0.5} color="#06b6d4" />
      <FloatingParticle position={[0, 1, -8]} scale={0.7} color="#10b981" />
      <FloatingParticle position={[-3, 0, -2]} scale={0.3} color="#0ea5e9" />

      {/* Large background sphere */}
      <Sphere position={[0, 0, -10]} scale={8}>
        <MeshDistortMaterial
          color="#14b8a6"
          attach="material"
          distort={0.4}
          speed={1}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.1}
        />
      </Sphere>
    </>
  );
}

// CSS particles overlay
function CSSParticles() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement("div");
      particle.className = "css-particle";

      // Random position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      // Random color from brand palette
      const colors = ["#14b8a6", "#0891b2", "#22c55e", "#06b6d4", "#10b981"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.backgroundColor = color;
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.borderRadius = "50%";
      particle.style.position = "absolute";
      particle.style.pointerEvents = "none";
      particle.style.animation = `float ${
        Math.random() * 3 + 2
      }s infinite ease-in-out`;
      particle.style.opacity = "0.6";

      particlesRef.current.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 5000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      />
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-green-50" />

      {/* Three.js Scene */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Scene />
      </Canvas>

      {/* CSS Particles */}
      <CSSParticles />

      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="meshGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1">
                <animate
                  attributeName="stop-color"
                  values="#14b8a6;#0891b2;#22c55e;#14b8a6"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1">
                <animate
                  attributeName="stop-color"
                  values="#0891b2;#22c55e;#14b8a6;#0891b2"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <polygon fill="url(#meshGradient)" points="0,0 100,20 80,100 0,80">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
    </div>
  );
}
