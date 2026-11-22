import React from 'react';

function seeded(seed: number) {
  let value = seed % 2147483647 || 1;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function edgePath(seed: number, width: number, height: number, lift: number) {
  const random = seeded(seed);
  const points: string[] = [`M0 ${height}`];
  let x = 0;
  while (x < width) {
    const y = lift + random() * (height * 0.62 - lift);
    points.push(`L${x.toFixed(1)} ${y.toFixed(1)}`);
    x += 10 + random() * 24;
  }
  points.push(`L${width} ${(lift + random() * height * 0.48).toFixed(1)}`);
  points.push(`L${width} ${height}Z`);
  return points.join('');
}

interface TornEdgeProps {
  fill: string;
  fiber?: string;
  seed?: number;
  side?: 'top' | 'bottom';
  className?: string;
}

export default function TornEdge({
  fill,
  fiber = '#F7F7F4',
  seed = 7,
  side = 'top',
  className = '',
}: TornEdgeProps) {
  const width = 1440;
  const height = 30;

  return (
    <svg
      className={`torn-edge ${side === 'bottom' ? 'rotate-180' : ''} ${className}`.trim()}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={edgePath(seed + 11, width, height, 0)} fill={fiber} />
      <path d={edgePath(seed, width, height, 6)} fill={fill} />
    </svg>
  );
}
