import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DATA_CENTERS } from '../data';
import { DataCenter } from '../types';
import { MapPin, Zap, Cpu, Thermometer, ShieldCheck, Layers, Eye } from 'lucide-react';

export default function InfrastructureMap() {
  const [selectedSite, setSelectedSite] = useState<DataCenter>(DATA_CENTERS[0]);

  // Texas SVG dimensions are normalized, we will draw a minimalist stylized outline of Texas,
  // or a grid node pattern representing Texas, with pins at actual locations.
  // Coordinates (x, y) range from 0 to 100 on our SVG viewport.
  // Approximate positions in Texas bounding box:
  // - Panhandle (Alun Site): x: 38, y: 15
  // - Winkler County (Winkler Facility): x: 22, y: 48
  // - Ward County (Sandhills): x: 25, y: 53
  // - Andrews County (Bear & Chief): x: 26, y: 42
  // - Ector County (Odessa Facility): x: 28, y: 49

  const siteMapCoordinates: Record<string, { x: number; y: number }> = {
    odessa: { x: 32, y: 50 },
    bear: { x: 30, y: 42 },
    chief: { x: 34, y: 44 },
    sandhills: { x: 27, y: 54 },
    winkler: { x: 24, y: 49 },
    'alun-expansion': { x: 40, y: 18 },
  };

  return (
    <section id="infrastructure" className="py-24 bg-[#030a05] relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-mono text-brand-green tracking-widest uppercase font-semibold mb-3">
              INFRASTRUCTURE MAP
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" id="infra-title">
              Our state-of-the-art facilities in Texas
            </h2>
            <p className="mt-4 font-sans text-neutral-400 font-light" id="infra-desc">
              Cipher operates a strategic footprint of high-capacity data centers. Each facility is built to rigorous industrial standards, connected directly to low-cost power grids.
            </p>
          </div>
          
          {/* Active site selector dropdown/tabs for mobile */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {DATA_CENTERS.map((site) => (
              <button
                key={site.id}
                onClick={() => setSelectedSite(site)}
                className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium border cursor-pointer transition-all ${
                  selectedSite.id === site.id
                    ? 'bg-brand-green/10 text-brand-green border-brand-green/30 shadow-[0_0_10px_rgba(0,255,102,0.15)]'
                    : 'bg-neutral-950/40 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
                id={`site-tab-${site.id}`}
              >
                {site.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Interactive Layout: Map (Left) & Node Details Panel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Customized Interactive Map (SVG) */}
          <div className="lg:col-span-6 bg-neutral-950/40 border border-neutral-800/80 rounded-3xl p-6 flex flex-col justify-between relative shadow-2xl overflow-hidden min-h-[460px] lg:min-h-0">
            <div className="absolute top-4 left-4 z-10">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest bg-neutral-900 border border-neutral-800 px-2 py-1 rounded flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                Live Texas Grid Interface
              </span>
            </div>

            {/* Interactive SVG Texas Map Outline */}
            <div className="w-full flex-grow flex items-center justify-center py-6 relative z-10" id="svg-map-container">
              <svg
                viewBox="0 0 100 100"
                className="w-full max-w-[400px] aspect-square text-neutral-900 stroke-neutral-800 fill-none stroke-[0.8]"
                id="texas-map-svg"
              >
                {/* Minimalist Grid Pattern Background */}
                <defs>
                  <pattern id="grid-pattern" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.4" fill="rgba(0, 255, 102, 0.08)" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid-pattern)" stroke="none" />

                {/* Stylized Outline of Texas */}
                <path
                  d="M 33 5 Q 38 4, 43 5 L 43 25 Q 65 24, 75 30 L 73 40 Q 82 50, 75 60 Q 77 70, 71 78 L 57 90 Q 53 92, 49 92 L 48 83 L 34 70 L 29 65 L 18 57 L 19 46 L 25 38 L 25 24 L 33 24 Z"
                  className="fill-neutral-950/80 stroke-neutral-800/80 stroke-[1] transition-all"
                />

                {/* Grid interconnect paths connecting nodes */}
                <path
                  d="M 32 50 L 30 42 L 34 44 L 27 54 L 24 49 M 32 50 L 40 18"
                  className="stroke-brand-green/10 stroke-[0.5] stroke-dasharray-[1,2]"
                />

                {/* Active node glow effects */}
                <AnimatePresence>
                  {DATA_CENTERS.map((site) => {
                    const coords = siteMapCoordinates[site.id];
                    if (!coords) return null;
                    const isSelected = selectedSite.id === site.id;

                    return isSelected ? (
                      <g key={`glow-${site.id}`}>
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="5"
                          className="fill-brand-green/20 animate-ping"
                        />
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="2.5"
                          className="fill-brand-cyan/20 animate-pulse"
                        />
                      </g>
                    ) : null;
                  })}
                </AnimatePresence>

                {/* Nodes Pins */}
                {DATA_CENTERS.map((site) => {
                  const coords = siteMapCoordinates[site.id];
                  if (!coords) return null;
                  const isSelected = selectedSite.id === site.id;

                  return (
                    <g
                      key={`pin-${site.id}`}
                      className="cursor-pointer group"
                      onClick={() => setSelectedSite(site)}
                      id={`map-pin-${site.id}`}
                    >
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isSelected ? "1.8" : "1.2"}
                        className={`transition-all duration-300 ${
                          isSelected
                            ? 'fill-brand-green stroke-white stroke-[0.5]'
                            : 'fill-neutral-600 stroke-neutral-900 stroke-[0.3] hover:fill-brand-cyan group-hover:r-[1.6]'
                        }`}
                      />
                      {/* Stylized tooltip indicators near pins */}
                      {isSelected && (
                        <foreignObject
                          x={coords.x + 3}
                          y={coords.y - 4}
                          width="24"
                          height="10"
                          className="overflow-visible"
                        >
                          <div className="bg-brand-green text-[5px] font-mono text-black font-bold uppercase px-1 py-0.5 rounded shadow-sm border border-brand-green/50 whitespace-nowrap">
                            {site.id === 'alun-expansion' ? 'EXPANSION' : `${site.powerCapacity} MW`}
                          </div>
                        </foreignObject>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map footer directions */}
            <div className="flex items-center justify-between border-t border-neutral-900 pt-4 font-mono text-[10px] text-neutral-500 relative z-10">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand-green" />
                Interact with map nodes
              </span>
              <span>GPS: WGS84 EPSG:3857</span>
            </div>
          </div>

          {/* Right Column: Node Details Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSite.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-neutral-950/40 border border-neutral-800/80 rounded-3xl p-8 flex flex-col h-full justify-between shadow-2xl relative"
                id="site-details-panel"
              >
                <div className="space-y-6">
                  {/* Status & Name Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-xs text-brand-green font-semibold uppercase tracking-wider">
                        {selectedSite.location}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white mt-1" id="selected-site-name">
                        {selectedSite.name}
                      </h3>
                    </div>
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider ${
                        selectedSite.status === 'Operational'
                          ? 'bg-brand-green/5 text-brand-green border-brand-green/20'
                          : selectedSite.status === 'Expansion'
                          ? 'bg-brand-cyan/5 text-brand-cyan border-brand-cyan/20'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                      }`}
                    >
                      {selectedSite.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                    {selectedSite.description}
                  </p>

                  {/* Core Metrics Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-b border-neutral-900 py-6" id="selected-site-metrics">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[10px] uppercase tracking-wider">
                        <Zap className="h-3.5 w-3.5 text-brand-green" />
                        POWER CAPACITY
                      </div>
                      <p className="font-display text-xl font-bold text-white">
                        {selectedSite.powerCapacity}{' '}
                        <span className="text-brand-green text-sm font-medium">MW</span>
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[10px] uppercase tracking-wider">
                        <Cpu className="h-3.5 w-3.5 text-brand-cyan" />
                        SECURED HASHRATE
                      </div>
                      <p className="font-display text-xl font-bold text-white">
                        {selectedSite.hashrate}{' '}
                        <span className="text-brand-cyan text-sm font-medium">EH/s</span>
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[10px] uppercase tracking-wider">
                        <Thermometer className="h-3.5 w-3.5 text-emerald-400" />
                        THERMAL LOOPS
                      </div>
                      <p className="font-sans text-xs text-neutral-200 font-semibold uppercase">
                        {selectedSite.coolingType}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[10px] uppercase tracking-wider">
                        <ShieldCheck className="h-3.5 w-3.5 text-neutral-400" />
                        ENERGY SOURCE
                      </div>
                      <p className="font-sans text-xs text-neutral-200 font-semibold uppercase leading-snug">
                        {selectedSite.energySource}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Substation visual mock diagram / bar metrics */}
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase flex items-center gap-1">
                      <Layers className="h-3 w-3" /> Grid Interconnect Status
                    </span>
                    <span className="font-mono text-brand-green font-semibold uppercase text-[10px]">
                      100% ONLINE
                    </span>
                  </div>
                  {/* Styled linear progress bar for power loading */}
                  <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(selectedSite.powerCapacity / 207) * 100}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-brand-green to-brand-cyan rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-neutral-600">
                    <span>GRID LOAD: {(selectedSite.powerCapacity * 1.2).toFixed(1)} kVA</span>
                    <span>PF: 0.99</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
