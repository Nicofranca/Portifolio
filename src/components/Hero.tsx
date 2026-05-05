import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c026d3" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => {
            const offset = i * 6;
            const opacity = 0.08 + i * 0.02;
            return (
              <path
                key={i}
                d={`M-100,${280 + offset} C200,${180 + offset} 400,${420 + offset} 700,${260 + offset} S1100,${140 + offset} 1540,${300 + offset}`}
                fill="none"
                stroke="url(#waveGrad1)"
                strokeWidth="1.5"
                opacity={opacity}
                className="wave-line"
                style={{ animationDelay: `${i * 0.15}s` }} 
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Construindo o <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-violet-500">Futuro</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            Sla
          </button>
          <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-white text-white rounded-full font-medium transition-all">
            Saiba Mais
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10"></div>
    </section>
  );
}