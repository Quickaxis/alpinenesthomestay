import React from 'react';
import { ImageIcon } from 'lucide-react';
import styles from './ImageSlot.module.css';

/**
 * ImageSlot Component
 * 
 * Reusable image component for Alpine Nest Homestay.
 * 
 * @param {string} id - Unique ID for the slot
 * @param {string} src - Image source (empty string triggers lookup or fallback)
 * @param {string} alt - Alt text for SEO and accessibility
 * @param {string} aspectRatio - CSS aspect ratio (e.g., '16/9', '4/5', '1/1')
 * @param {string} objectPosition - CSS object-position (e.g., 'center', 'top')
 * @param {boolean} lazy - Enable lazy loading
 * @param {boolean} overlay - Add a dark gradient overlay
 * @param {boolean} minimalPlaceholder - If true, hides the text and icon from the placeholder
 * @param {string} className - Additional CSS classes
 */
const ImageSlot = ({
  id,
  src = '',
  alt = 'Alpine Nest Homestay image',
  aspectRatio = 'auto',
  objectPosition = 'center',
  lazy = true,
  overlay = false,
  minimalPlaceholder = false,
  className = '',
  style = {}
}) => {
  const containerStyle = {
    aspectRatio,
    ...style
  };

  const imageMap = {
    'skyline-suite': '/images/skylinesuite4.webp',
    'capsule-studio': '/images/1rk.webp',
    'cozy-2bhk': '/images/2bhk1.webp',
    'niribili': '/images/nirbili1.webp',
    'room-01': '/images/skylinesuite4.webp',
    'room-02': '/images/1rk.webp',
    'room-03': '/images/2bhk1.webp',
    'room-04': '/images/nirbili1.webp',
    'review-01': '/images/skylinesuite2.webp',
    'review-02': '/images/2bhk3.webp',
    'review-03': '/images/1rk3.webp',
    'brahmaputra': '/images/brahmaputariverfront.webp',
    'teagarden': '/images/teagarden.webp',
    'bogibeel': '/images/bogibeel.webp',
    'dibrugarhtown': '/images/dibrugarhtown.webp',
    'radhakrishnamandir': '/images/radhakrishnamandir.webp',
    'dehingpatkai': '/images/dehingpatkai.webp'
  };

  const finalSrc = src || (id && id.startsWith('/images/') ? id : (imageMap[id] || ''));

  if (!finalSrc) {
    return (
      <div 
        className={`${styles.placeholder} ${className}`} 
        style={containerStyle}
        data-slot-id={id}
      >
        {!minimalPlaceholder && (
          <div className={styles.placeholderContent}>
            <ImageIcon size={32} opacity={0.5} />
            <span className={styles.placeholderText}>ALPINE NEST — {(id || 'PHOTO').toUpperCase()}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.imageContainer} ${className}`} style={containerStyle}>
      <img
        src={finalSrc}
        alt={alt}
        className={styles.image}
        style={{ objectPosition }}
        loading={lazy ? 'lazy' : 'eager'}
      />
      {overlay && <div className={styles.overlay}></div>}
    </div>
  );
};

export default ImageSlot;
