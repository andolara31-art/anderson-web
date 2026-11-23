import React from 'react';
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          delay,
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
