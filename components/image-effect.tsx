'use client';

import React, { MouseEvent, TouchEvent, useState } from 'react';
import Image, { StaticImageData, ImageProps as NextImageProps } from 'next/image';

interface ImageEffectProps extends NextImageProps {
  magnifierSize?: number;
  zoomLevel?: number;
  magnifierClassName?: string;
}

const ImageEffect: React.FC<ImageEffectProps> = ({
  src,
  alt,
  magnifierSize = 100,
  zoomLevel = 2.5,
  className = '',
  magnifierClassName = '',
  ...imageProps
}) => {
  const [zoomable, setZoomable] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0, mouseX: 0, mouseY: 0 });

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e.clientX, e.clientY, element);
  };

  const handleMouseLeave = () => {
    setZoomable(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY, e.currentTarget);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY, element);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY, e.currentTarget);
  };

  const handleTouchEnd = () => {
    setZoomable(false);
  };

  const updatePosition = (clientX: number, clientY: number, element: HTMLElement) => {
    const { left, top } = element.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setPosition({
      x: x * zoomLevel - magnifierSize / 2,
      y: y * zoomLevel - magnifierSize / 2,
      mouseX: x - magnifierSize / 2,
      mouseY: y - magnifierSize / 2,
    });
  };

  const imageUrl = typeof src === 'string' ? src : (src as StaticImageData).src;

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`${className} relative overflow-hidden`}
    >
      <Image
        className={`object-cover border w-full z-10 ${className}`}
        alt={alt}
        src={src}
        {...imageProps} // Apply any additional props here
      />
      {zoomable && (
        <div
          style={{
            backgroundPosition: `-${position.x}px -${position.y}px`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `${imageSize.width * zoomLevel}px ${imageSize.height * zoomLevel}px`,
            backgroundRepeat: 'no-repeat',
            top: `${position.mouseY}px`,
            left: `${position.mouseX}px`,
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            borderRadius: '50%',  // Ensure the magnifier is circular
          }}
          className={`z-50 border-4 rounded-full pointer-events-none absolute border-gray-500 ${magnifierClassName}`}
        />
      )}
    </div>
  );
};

export default ImageEffect;
