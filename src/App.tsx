import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Static imports for slideshow images
// @ts-ignore
import service1 from '../assets/images/gallery25.jpeg';
// @ts-ignore
import service3 from '../assets/images/service3.jpeg';
// @ts-ignore
import service4 from '../assets/images/service4.jpeg';
// @ts-ignore
import service6 from '../assets/images/service6.jpeg';
// @ts-ignore
import gallery1 from '../assets/images/gallery1.jpeg';
// @ts-ignore
import gallery4 from '../assets/images/gallery4.jpeg';
// @ts-ignore
import gallery21 from '../assets/images/gallery21.jpeg';

const serviceImages = [
  { id: 'img-1', src: service1, objectPosition: 'object-left' },
  { id: 'img-s3', src: service3, objectPosition: 'object-right sm:object-[75%_center]' },
  { id: 'img-s4', src: service4, objectPosition: 'object-left-top' },
  { id: 'img-2', src: gallery1, objectPosition: 'object-center' },
  { id: 'img-g4', src: gallery4, objectPosition: 'object-center' },
  { id: 'img-s6', src: service6, objectPosition: 'object-center' },
  { id: 'img-5', src: gallery21, objectPosition: 'object-center' },
];

export default function HeroBackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedIndices, setFailedIndices] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceImages.length);
    }, 2500); // Change photo every 2.5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleImageError = (index: number) => {
    setFailedIndices((prev) => ({ ...prev, [index]: true }));
    // Immediately advance to next image
    setCurrentIndex((prev) => (prev + 1) % serviceImages.length);
  };

  const currentImg = serviceImages[currentIndex];
  const isCurrentFailed = failedIndices[currentIndex];
  const displaySrc = isCurrentFailed ? gallery1 : currentImg.src;

  return (
    <div className="absolute left-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none overflow-hidden select-none z-0">
      {/* Background Slideshow Image with full opacity */}
      <AnimatePresence mode="sync">
        <motion.img
          key={`${currentIndex}-${displaySrc}`}
          src={displaySrc}
          alt="Kartikeya Srivastava in Action"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          onError={() => handleImageError(currentIndex)}
          className={`absolute inset-0 w-full h-full object-cover ${currentImg.objectPosition} filter grayscale contrast-120 brightness-105`}
        />
      </AnimatePresence>

      {/* Light Navy Blue Tint Layer */}
      <div className="absolute inset-0 bg-[#05122C]/20 mix-blend-multiply pointer-events-none" />

      {/* Right and bottom subtle gradient fading into the dark background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#05122C]/40 to-[#05122C] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05122C]/80 via-transparent to-[#05122C]/40 pointer-events-none" />
    </div>
  );
}
