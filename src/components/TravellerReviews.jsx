import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import styles from './TravellerReviews.module.css';

const LeftArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const RightArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const REVIEWS = [
  {
    id: 'rev-1',
    author: "Abhiraj Bordoloi",
    role: "Google Maps",
    rating: 5,
    date: "3 weeks ago",
    quote: "It was a pleasure staying here, The owner is very well behaved and the caretakers are always available for any need . The environment is very friendly and cool.All necessary item Shops are available near by.\nOverall Great experience .",
    url: "https://goo.gl/maps/rN8oBjxZmYvFUCn49?g_st=aw"
  },
  {
    id: 'rev-2',
    author: "Bishnu jyoti Gogoi",
    role: "Google Maps",
    rating: 5,
    date: "3 days ago",
    quote: "Had a really comfortable and pleasant stay at Alpine Homestay. The place was clean, peaceful, and cozy, with a very welcoming atmosphere. Everything was well managed, and the overall experience was great.\n\nIf you’re looking for a comfortable homestay in Dibrugarh, I would definitely recommend Alpine Homestay.",
    url: "https://goo.gl/maps/FVrWGSTDLRCcykt79?g_st=aw"
  },
  {
    id: 'rev-3',
    author: "Rana Das",
    role: "Google Maps",
    rating: 5,
    date: "2 months ago",
    quote: "A great experience it was, totally worth the money.\nThey really have worked upon every minor details to make every stays peaceful and to make a memory worth remembering. Thank you for giving us a great experience 😊",
    url: "https://goo.gl/maps/v7GcC95J9miDp17WA?g_st=aw"
  },
  {
    id: 'rev-4',
    author: "Trinayan Borah",
    role: "Google Maps",
    rating: 5,
    date: "2 months ago",
    quote: "Excellent stay at Alpine Homestay, Dibrugarh. Clean and comfortable rooms, warm hospitality, and a peaceful atmosphere. The hosts were professional and attentive, making the stay truly enjoyable. Highly recommended for anyone visiting Dibrugarh.",
    url: "https://goo.gl/maps/sUAwcrt3BSfZCr9C9?g_st=aw"
  },
  {
    id: 'rev-5',
    author: "Samm m Pradhan",
    role: "Google Maps",
    rating: 5,
    date: "3 months ago",
    quote: "I had a fantastic stay at this homestay. From the moment I arrived, the hospitality was warm and welcoming, making me feel right at home. The room was clean, comfortable, and well-maintained. The location is peaceful, yet conveniently accessible. I truly appreciated the personalized attention and the delicious homemade meals. It was a perfect blend of comfort and local charm. I would highly recommend this place to anyone looking for a cozy and memorable stay",
    url: "https://goo.gl/maps/dPyz3msfM4AwHa1s9?g_st=aw"
  }
];

const TravellerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const trackRef = useRef(null);
  const autoplayTimer = useRef(null);

  // We add clones to the start and end to create the infinite loop effect.
  const renderedReviews = [
    REVIEWS[REVIEWS.length - 1],
    ...REVIEWS,
    REVIEWS[0]
  ];

  const totalRealSlides = REVIEWS.length;

  const nextReview = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    resetAutoplay();
  }, [isTransitioning]);

  const prevReview = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    resetAutoplay();
  }, [isTransitioning]);

  const resetAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
    autoplayTimer.current = setInterval(() => {
      if (!isDragging) {
        nextReview();
      }
    }, 6000);
  }, [nextReview, isDragging]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [resetAutoplay]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(totalRealSlides);
    } else if (currentIndex === totalRealSlides + 1) {
      setCurrentIndex(1);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    setDragOffset(0);
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchEndX.current = e.targetTouches[0].clientX;
    const diff = touchEndX.current - touchStartX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const distance = touchEndX.current - touchStartX.current;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      prevReview();
    } else if (distance < -swipeThreshold) {
      nextReview();
    }
    
    setDragOffset(0);
    resetAutoplay();
  };

  let activeDotIndex = currentIndex - 1;
  if (activeDotIndex === -1) activeDotIndex = totalRealSlides - 1;
  if (activeDotIndex === totalRealSlides) activeDotIndex = 0;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>GUEST TESTIMONIALS</span>
            <h2 className={styles.heading}>STAY STORIES</h2>
          </div>
          
          <div className={styles.controls}>
            <button 
              className={styles.arrowBtn} 
              onClick={prevReview}
              aria-label="Previous review"
            >
              <LeftArrowIcon />
            </button>
            <button 
              className={styles.arrowBtn} 
              onClick={nextReview}
              aria-label="Next review"
            >
              <RightArrowIcon />
            </button>
          </div>
        </div>

        <div 
          className={styles.carouselViewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={styles.carouselTrack}
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translate3d(calc(-${currentIndex} * var(--slide-width, 100%) + ${dragOffset}px), 0, 0)`,
              transition: isTransitioning && !isDragging ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
            }}
          >
            {renderedReviews.map((review, index) => (
              <div 
                key={`${review.id}-${index}`} 
                className={styles.cardSlot}
              >
                <div 
                  className={styles.innerCard}
                  onClick={() => {
                    if (Math.abs(dragOffset) < 10) {
                      window.open(review.url, '_blank');
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.quoteIconWrapper}>
                    <Quote size={28} className={styles.quoteIcon} />
                  </div>
                  
                  {review.rating > 0 && (
                    <div className={styles.starsRow}>
                      <div className={styles.starsGroup}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={18} fill="#C9571D" color="#C9571D" />
                        ))}
                      </div>
                      <span className={styles.reviewDate}>{review.date}</span>
                    </div>
                  )}

                  <p className={styles.reviewQuote} style={{ whiteSpace: 'pre-wrap' }}>
                    "{review.quote}"
                  </p>

                  <div className={styles.reviewerMeta}>
                    <div className={styles.reviewerAvatar}>
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className={styles.reviewerName}>{review.author}</h4>
                      <span className={styles.reviewerRole}>{review.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pagination}>
          {REVIEWS.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.dot} ${index === activeDotIndex ? styles.dotActive : ''}`} 
            />
          ))}
        </div>

        <div className={styles.bottomCtaContainer}>
          <a href="https://www.google.com/maps/place/Alpine+Nest/@27.4750693,94.8932367,894m/data=!3m1!1e3!4m11!3m10!1s0x374099b54cfa50e1:0xd04ee3bcc5057c93!5m2!4m1!1i2!8m2!3d27.4750646!4d94.895817!9m1!1b1!16s%2Fg%2F11yd8yp9yk?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.viewReviewsBtn}>
            VIEW MORE REVIEWS
            <div className={styles.ctaCircle}>
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default TravellerReviews;
