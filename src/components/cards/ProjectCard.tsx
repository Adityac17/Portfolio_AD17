'use client';

import React from 'react';
import { useTilt } from '@/hooks/useTilt';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function TiltCard({ children, style, className, ...props }: TiltCardProps) {
  const { ref, style: tiltStyle } = useTilt();

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, ...tiltStyle }}
      {...props}
    >
      {children}
    </div>
  );
}