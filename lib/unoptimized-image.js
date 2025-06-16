// lib/unoptimized-image.js
import React from 'react';

export default function Image({ src, alt, width, height, ...props }) {
  // render a plain <img> so Next.js never looks for a loader
  return <img src={src} alt={alt} width={width} height={height} {...props} />;
}
