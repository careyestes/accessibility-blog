// lib/unoptimized-image.js
import React from 'react';

/**
 * A drop-in replacement for `next/image` that just renders <img>
 * so no loader or optimization API is ever invoked.
 */
export default function Image({ src, alt, width, height, ...props }) {
  return <img src={src} alt={alt} width={width} height={height} {...props} />;
}
