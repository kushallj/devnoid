import React from 'react';
import { siteContent } from '../data/siteContent.js';
import { Cpu, Terminal, Zap, ShieldCheck } from 'lucide-react';

function FuturisticMatrixVisual() {
  return (
    <div className="relative w-full aspect-4/3 sm:aspect-16/7 bg-[#1C0D05] overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(169,67,10,0.45),rgba(28,13,5,0.95))]" />

      {/* Futuristic Vector Circuit Matrix */}
      <svg
        viewBox="0 0 1200 525"
        className="absolute inset-0 w-full h-full text-[#A9430A] opacity-90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA45B" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#A9430A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5E1D03" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2E2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A9430A" stopOpacity="0" />
          </linearGradient>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5E6DA" strokeWidth="0.5" strokeOpacity="0.08" />
          </pattern>
        </defs>

        {/* Isometric base grid */}
        <rect width="1200" height="525" fill="url(#gridPattern)" />

        {/* Central Core Hexagonal Reactor & Neural Hub */}
        <g transform="translate(600, 260)">
          {/* Outer orbital rings */}
          <circle cx="0" cy="0" r="160" stroke="#FFA45B" strokeWidth="1" strokeDasharray="6 8" strokeOpacity="0.4" />
          <circle cx="0" cy="0" r="120" stroke="#FBF5EF" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx="0" cy="0" r="85" stroke="#FFA45B" strokeWidth="1.5" strokeDasharray="3 5" />
          <circle cx="0" cy="0" r="50" stroke="url(#glowGrad)" strokeWidth="2" />
          <circle cx="0" cy="0" r="16" fill="#FFA45B" fillOpacity="0.85" />
          <circle cx="0" cy="0" r="8" fill="#FFFFFF" />

          {/* Isometric Cube / Hexagon Matrix Core */}
          <path d="M 0 -45 L 39 -22.5 L 39 22.5 L 0 45 L -39 22.5 L -39 -22.5 Z" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" fill="#A9430A" fillOpacity="0.3" />
          <line x1="0" y1="0" x2="0" y2="45" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="0" y1="0" x2="39" y2="-22.5" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="0" y1="0" x2="-39" y2="-22.5" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />

          {/* Rotating node orbits */}
          {[-130, -75, 45, 110].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 120;
            const y = Math.sin(rad) * 120;
            return (
              <g key={i}>
                <line x1="0" y1="0" x2={x} y2={y} stroke="#FFA45B" strokeWidth="0.8" strokeOpacity="0.5" />
                <circle cx={x} cy={y} r="4.5" fill="#FFFFFF" />
                <circle cx={x} cy={y} r="8" stroke="#FFA45B" strokeWidth="1" strokeOpacity="0.8" />
              </g>
            );
          })}
        </g>

        {/* Left Neural Bus & Data Pathways */}
        <path d="M 60 120 L 220 120 L 320 220 L 460 220 L 515 260" stroke="url(#glowGrad)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 80 380 L 260 380 L 360 280 L 480 280 L 515 260" stroke="#FFA45B" strokeWidth="1.5" strokeDasharray="8 6" strokeOpacity="0.7" />
        <path d="M 140 250 L 300 250 L 360 260 L 515 260" stroke="#F5E6DA" strokeWidth="1" strokeOpacity="0.4" />

        {/* Right Autonomous Agent Pipeline & Cluster Buses */}
        <path d="M 1140 120 L 980 120 L 880 220 L 740 220 L 685 260" stroke="url(#glowGrad)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 1120 380 L 940 380 L 840 280 L 720 280 L 685 260" stroke="#FFA45B" strokeWidth="1.5" strokeDasharray="8 6" strokeOpacity="0.7" />
        <path d="M 1060 250 L 900 250 L 840 260 L 685 260" stroke="#F5E6DA" strokeWidth="1" strokeOpacity="0.4" />

        {/* Data Nodes & Quantum Lattices */}
        <g stroke="#FFA45B" strokeWidth="1" fill="#281206">
          {/* Left Cluster Nodes */}
          <rect x="200" y="105" width="30" height="30" rx="4" />
          <rect x="305" y="205" width="30" height="30" rx="4" />
          <rect x="245" y="365" width="30" height="30" rx="4" />
          {/* Right Cluster Nodes */}
          <rect x="970" y="105" width="30" height="30" rx="4" />
          <rect x="865" y="205" width="30" height="30" rx="4" />
          <rect x="925" y="365" width="30" height="30" rx="4" />
        </g>

        {/* Telemetry coordinate marks */}
        <text x="50" y="480" fill="#FFA45B" fontSize="12" fontFamily="monospace" opacity="0.6">
          SYS_LATENCY: 1.2MS // PIPELINE: PARALLEL // AGENTS: RUNNING
        </text>
        <text x="890" y="480" fill="#FFA45B" fontSize="12" fontFamily="monospace" opacity="0.6">
          NODE_MATRIX: 256_TFLOPS // CORES: DISTRIBUTED
        </text>
      </svg>

      {/* Floating UI HUD elements overlay */}
      <div className="absolute top-6 left-8 hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-md bg-black/60 border border-white/10 backdrop-blur-md">
        <Cpu className="w-4 h-4 text-[#FFA45B]" />
        <span className="text-xs font-mono text-[#FBF5EF]/90 tracking-wide uppercase">
          Neural Architecture Core
        </span>
      </div>

      <div className="absolute top-6 right-8 hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-md bg-black/60 border border-white/10 backdrop-blur-md">
        <Terminal className="w-4 h-4 text-[#FFA45B]" />
        <span className="text-xs font-mono text-[#FBF5EF]/90 tracking-wide uppercase">
          Autonomous Agent Orchestration
        </span>
      </div>
    </div>
  );
}

export default function CollaborationPhoto() {
  const { futuristicVisual } = siteContent;

  return (
    <section aria-label="Futuristic Neural Architecture" className="py-6 sm:py-8 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[20px] overflow-hidden border border-[#E5CDBB] shadow-xl group">
          {/* Viewfinder corner brackets matching the reference aesthetic */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/80 z-20 pointer-events-none" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/80 z-20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/80 z-20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/80 z-20 pointer-events-none" />

          {/* Futuristic Matrix Visual */}
          <FuturisticMatrixVisual />

          {/* Bottom caption badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-md bg-black/70 border border-white/15 backdrop-blur-md text-[11px] sm:text-xs text-[#FBF5EF] tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA45B] animate-pulse" />
            <span>{futuristicVisual.captionNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
