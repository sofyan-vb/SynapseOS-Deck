"use client";

import { ReactNode } from "react";

interface SlideFrameProps {
  children: ReactNode;
  slideId: number;
  transitionType: string;
  speed: number;
}

export default function SlideFrame({
  children,
  slideId,
  transitionType,
  speed,
}: SlideFrameProps) {
  return (
    <div className="slide-viewport">
      <div className="slide-wrapper" key={slideId}>
        {children}
      </div>
    </div>
  );
}

