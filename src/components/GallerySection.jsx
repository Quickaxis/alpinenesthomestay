import React, { useRef } from 'react';
import { galleryData } from '../data/gallery';
import styles from './GallerySection.module.css';

const GalleryCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={item.src} 
          alt={item.alt} 
          className={styles.galleryImg} 
          loading="lazy" 
        />
        <div className={styles.cardOverlay}>
          <span className={styles.categoryBadge}>{item.category}</span>
          <h4 className={styles.cardTitle}>{item.title}</h4>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} id="gallery" className={styles.section}>
      <div className="section-container">
        <div className={styles.header}>
          <span className="eyebrow">PHOTO GALLERY</span>
          <h2 className={styles.heading}>A GLIMPSE OF YOUR STAY</h2>
          <p className={styles.subheading}>
            Take a visual tour through Alpine Nest's capsule suites, cozy living spaces, and serene Dibrugarh environment.
          </p>
        </div>
      </div>
      
      <div className={styles.galleryTrackWrapper}>
        <div className={styles.galleryTrack}>
          {/* Set 1 */}
          <div className={styles.carouselSet}>
            {galleryData.map(item => (
              <GalleryCard key={`set1-${item.id}`} item={item} />
            ))}
          </div>
          {/* Set 2 (Duplicate for infinite seamless loop) */}
          <div className={styles.carouselSet}>
            {galleryData.map(item => (
              <GalleryCard key={`set2-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
