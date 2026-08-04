import { useState } from 'react';
import { motion } from 'motion/react';

interface NodeDetail {
  id: string;
  title: string;
  cx: number;
  cy: number;
  r: number;
  label: string;
  labelY: number;
  description: string;
}

export default function NetworkDiagram() {
  const [activeNodeId, setActiveNodeId] = useState<string>('center');

  const nodes: NodeDetail[] = [
    {
      id: 'osint',
      title: 'OSINT',
      cx: 160,
      cy: 48,
      r: 19,
      label: 'OSINT',
      labelY: 20,
      description: 'Open-Source Intelligence: Mastering advanced search logic, domain footprinting, public registries, and digital trace analysis.'
    },
    {
      id: 'lea',
      title: 'LEA Training',
      cx: 268,
      cy: 110,
      r: 19,
      label: 'LEA Training',
      labelY: 82,
      description: 'Law Enforcement Agencies: Actionable, scenario-based digital tracing and investigation modules designed for active officers and investigators.'
    },
    {
      id: 'investigations',
      title: 'Investigations',
      cx: 272,
      cy: 228,
      r: 19,
      label: 'Investigations',
      labelY: 264,
      description: 'Methodology: Constructing ironclad cyber tracking protocols, verifying online footprints, and analyzing social indicators safely.'
    },
    {
      id: 'workshops',
      title: 'Workshops',
      cx: 150,
      cy: 278,
      r: 19,
      label: 'Workshops',
      labelY: 308,
      description: 'Interactive Seminars: Hands-on live-fire training sessions covering digital identity hygiene, password security, and active defenses.'
    },
    {
      id: 'cyber_defense',
      title: 'Cyber Defense',
      cx: 46,
      cy: 220,
      r: 19,
      label: 'Cyber Defense',
      labelY: 256,
      description: 'Cyber Defense: Designing robust operational security strategies, threat mitigations, and defensive capabilities for institutions.'
    },
    {
      id: 'campaigns_awareness',
      title: 'Campaigns & Awareness',
      cx: 52,
      cy: 96,
      r: 19,
      label: 'Campaigns & Awareness',
      labelY: 68,
      description: 'Public Safety & Campaigns: Developing high-impact awareness materials, security guidelines, and public cyber awareness drives.'
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] aspect-square" aria-label="Interactive OSINT Network Diagram">
        <svg viewBox="0 0 320 320" className="w-full h-full overflow-visible">
          {/* Main active connection halo for the center node */}
          {activeNodeId && (
            <motion.circle
              cx="160"
              cy="160"
              r="34"
              fill="none"
              stroke="#2CD97B"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="opacity-60"
            />
          )}

          {/* Connecting lines from center to outer nodes */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            d="M160,160 L160,48"
            className="stroke-cyber-green/40"
            strokeWidth={activeNodeId === 'osint' ? '2.5' : '1.5'}
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            d="M160,160 L268,110"
            className="stroke-cyber-green/40"
            strokeWidth={activeNodeId === 'lea' ? '2.5' : '1.5'}
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            d="M160,160 L272,228"
            className="stroke-cyber-green/40"
            strokeWidth={activeNodeId === 'investigations' ? '2.5' : '1.5'}
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            d="M160,160 L150,278"
            className="stroke-cyber-green/40"
            strokeWidth={activeNodeId === 'workshops' ? '2.5' : '1.5'}
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            d="M160,160 L46,220"
            className="stroke-cyber-green/40"
            strokeWidth={activeNodeId === 'cyber_defense' ? '2.5' : '1.5'}
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            d="M160,160 L52,96"
            className="stroke-cyber-green/40"
            strokeWidth={activeNodeId === 'campaigns_awareness' ? '2.5' : '1.5'}
            fill="none"
          />

          {/* Secondary cross links for OSINT-graph feel */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            d="M268,110 L272,228"
            className="stroke-cyber-green/20"
            strokeWidth="1.5"
            strokeDasharray="3 5"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            d="M46,220 L52,96"
            className="stroke-cyber-green/20"
            strokeWidth="1.5"
            strokeDasharray="3 5"
            fill="none"
          />

          {/* CENTER NODE */}
          <g 
            className="cursor-pointer group animate-pulse"
            onMouseEnter={() => setActiveNodeId('center')}
            onClick={() => setActiveNodeId('center')}
          >
            <circle 
              cx="160" 
              cy="160" 
              r="26" 
              className={`transition-all duration-300 ${activeNodeId === 'center' ? 'fill-cyber-green ring-4 ring-cyber-green/20' : 'fill-cyber-green-dark'}`}
            />
            <text 
              x="160" 
              y="164" 
              textAnchor="middle" 
              className="fill-cyber-slate font-mono text-[11px] font-bold select-none"
            >
              KS
            </text>
          </g>

          {/* OUTER NODES */}
          {nodes.map((node) => {
            const isActive = activeNodeId === node.id;
            return (
              <g
                key={node.id}
                className="cursor-pointer group"
                onMouseEnter={() => setActiveNodeId(node.id)}
                onClick={() => setActiveNodeId(node.id)}
              >
                {/* Outer highlight pulse when active */}
                {isActive && (
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r + 5}
                    fill="none"
                    stroke="#2CD97B"
                    strokeWidth="2"
                    className="opacity-90 shadow-sm"
                  />
                )}
                {/* Standard Node Circle */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  className={`transition-all duration-300 stroke-cyber-green stroke-[1.5] ${
                    isActive ? 'fill-cyber-navy/90 scale-110' : 'fill-cyber-slate group-hover:fill-cyber-navy/70'
                  }`}
                />
                {/* Subtle indicator dot inside active node */}
                {isActive && (
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="4"
                    className="fill-cyber-green animate-ping"
                  />
                )}
                {/* Label text */}
                <text
                  x={node.cx}
                  y={node.labelY}
                  textAnchor="middle"
                  className={`font-mono text-[9px] uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? 'fill-cyber-green font-bold' : 'fill-slate-300 group-hover:fill-white'
                  }`}
                >
                  {node.title}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Node Detail Box */}
      <div className="mt-6 w-full max-w-[360px] sm:max-w-[400px] bg-cyber-navy/80 border border-cyber-green/30 rounded-lg p-4 text-center min-h-[82px] flex flex-col justify-center transition-all duration-300 shadow-lg">
        {activeNodeId === 'center' ? (
          <div>
            <span className="font-mono text-[10px] text-cyber-green uppercase tracking-widest font-bold block mb-1">
              CENTRAL NODE: KARTIKEYA SRIVASTAVA
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hover or click on any node to view detailed capabilities and specialization metrics.
            </p>
          </div>
        ) : (
          (() => {
            const activeNode = nodes.find((n) => n.id === activeNodeId);
            return activeNode ? (
              <div>
                <span className="font-mono text-[10px] text-cyber-green uppercase tracking-widest font-bold block mb-1">
                  NODE: {activeNode.title}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeNode.description}
                </p>
              </div>
            ) : null;
          })()
        )}
      </div>
    </div>
  );
}
