'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Temiz gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50" />
      
      {/* Hafif animasyonlu mesh overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1">
                <animate 
                  attributeName="stop-color" 
                  values="#14b8a6;#0891b2;#14b8a6" 
                  dur="20s" 
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1">
                <animate 
                  attributeName="stop-color" 
                  values="#0891b2;#14b8a6;#0891b2" 
                  dur="20s" 
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <polygon fill="url(#bgGradient)" points="0,0 100,30 70,100 0,70">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="80s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
    </div>
  );
}